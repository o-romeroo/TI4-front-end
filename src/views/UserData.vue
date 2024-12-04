<template>
    <div class="banner-content" style="width: 100%; justify-content: center; display: flex;">
        <ContentBanner :title="banner.title" :description="banner.description" :buttonText="banner.buttonText"
            @buttonClicked="openExecutionComponent()" />
    </div>

    <div class="tab-component" style="width: 100%;">
        <v-card>
            <v-tabs v-model="tab" align-tabs="center" bg-color="#092F47">
                <v-tab value="one">Molecules count</v-tab>
                <v-tab value="two">City and Country Infos</v-tab>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <v-card variant="tonal" title="Number of biological activities" text="The number of biological activities analysed so far is: " v-slot:item="lastValue"></v-card>

                        <v-card class="mt-8 mx-auto overflow-visible" max-width="400">
                            <v-sheet class="v-sheet--offset mx-auto" color="#092F47" elevation="12"
                                max-width="calc(100% - 32px)" rounded="lg">
                                <v-sparkline :labels="labels" :model-value="values" color="white" line-width="2"
                                    padding="16"></v-sparkline>
                            </v-sheet>

                            <v-card-text class="pt-0">
                                <div class="text-h6 font-weight-light mb-2">
                                    User Runs
                                </div>
                                <div class="subheading font-weight-light text-grey">
                                    Number of biological activities analysed
                                </div>
                                <v-divider class="my-2"></v-divider>
                                
                            </v-card-text>
                        </v-card>

                    </v-tabs-window-item>

                    <v-tabs-window-item value="two" >
                        <v-card variant="tonal" title="Users cities"
                            text="The cities that the Massa Software users are from are:"></v-card>

                        <v-card flat>
                            <v-card-title class="d-flex align-center pe-2">
                                <v-icon icon="mdi-city"></v-icon> &nbsp;
                                Find a City

                                <v-spacer></v-spacer>

                                <v-text-field v-model="search" density="compact" label="Search"
                                    prepend-inner-icon="mdi-magnify" variant="solo-filled" flat hide-details
                                    single-line></v-text-field>
                            </v-card-title>

                            <v-divider></v-divider>
                            <v-data-table v-model:search="search" :filter-keys="['name']" :items="cities" :page="page" :items-per-page="itemsPerPage">
                                <template v-slot:header.Name>
                                    <div class="text-end">Name</div>
                                </template>

                                <template v-slot:item.rating="{ item }">
                                    <v-rating :model-value="item.rating" color="orange-darken-2" density="compact"
                                        size="small" readonly></v-rating>
                                </template>

                                <template v-slot:bottom>
                                    <div class="text-center pt-2">
                                        <v-pagination v-model="page" :length="pageCount"></v-pagination>
                                    </div>
                                </template>
                            </v-data-table>
                        </v-card>

                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ContentBanner from '@/components/ContentBanner.vue';
import { getIpInfos } from '@/services/Geolocation';
import { getCountryName } from '@/services/Geolocation';
import { useStatsStore } from '@/stores/stats';

const stats = useStatsStore();

const banner = {
    title: "User Data",
    description: "Data collected from users",
};
//Tab configuration
const tab = ref(null);

//Molecules data
const labels = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);
const values = ref([0, 0, 0, 0, 0, 0, 0]);
const lastValue = ref(0);

//Cities + Countries table
const page = ref(1);
const itemsPerPage = 10;
const search = ref('');
const cities = ref([]);
const pageCount = ref(0);
const statsError = ref(null);
const ipInfo = ref(null);
const ipError = ref(null);

async function fillStatsInfos() {
    try {
        stats.value = await getStats();
        values.value = stats.value.map(stat => stat.biological_activity_count)
        lastValue.value = lastValue.value + stats.value.some(biological_activity_count)
    } catch (error) {
        statsError.value = error;
        return;
    }
}

async function fillIpInfos() {
    try {
        ipInfo.value = await getIpInfos();
    } catch (error) {
        ipError.value = error;
        return;
    }

    // Check if city exists in cities array
    const cityExists = cities.value.some(city => city.name === ipInfo.value.city);
    if (!cityExists) {
        cities.value.push({
            name: ipInfo.value.city,
            country: getCountryName(ipInfo.value.country),
        });
    }
    
    // Update page counts
    pageCount.value = Math.ceil(cities.value.length / itemsPerPage);
}

onMounted(() => {
    fillIpInfos(), fillStatsInfos().then(() => {
    });
});
</script>

<style scoped>
.tab-component {
    width: 100%;
    justify-content: center;
    margin-top: 20px;
}

.v-sheet--offset {
    top: -24px;
    position: relative;
}
</style>
