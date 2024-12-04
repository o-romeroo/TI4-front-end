<template>
  <div class="banner-content" style="width: 100%; justify-content: center; display: flex;">
    <ContentBanner :title="banner.title" :description="banner.description" :buttonText="banner.buttonText"
      @buttonClicked="openExecutionComponent()" />
  </div>


  <div style="margin: 2rem;">
    <v-divider :thickness="4"></v-divider>
  </div>


  <v-container style="display: flex; justify-content: center; flex-direction: column;">
    <div class="text-center pb-10">
      <h2>Why use Massa?</h2>
      <p>See the advantages of using the Massa Algoritm</p>
    </div>
    <v-row>
      <v-col v-for="item in items" cols="4" style="width: 100%; display: flex; justify-content: center;">
        <v-btn variant="text" size="140" :prepend-icon="item.icon" :ripple="false" stacked
          @click="selectCategory(item.category)">
          {{ item.text }}
          <p class="text-subtitle-2" style="margin-top: 0.5rem;">{{ item.subtext }}</p>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>


  <div class="banner2" style="width: 100%; justify-content: center; display: flex;">
    <ContentBanner :title="banner2.title" :description="banner2.description" />
  </div>


  <div class="panel">
    <v-expansion-panels variant="accordion" style="width: 100%; display: flex; justify-content: center;">
      <v-expansion-panel v-for="dropdownValue in dropdownValues" :key="dropdownValue.position"
        :title="dropdownValue.title" :text="dropdownValue.text" />
    </v-expansion-panels>
  </div>


  <div class="banner3" style="width: 100%; justify-content: center; display: flex;">
    <ContentBanner :title="banner3.title" :description="banner3.description" :buttonText="banner3.buttonText"
      @buttonClicked="openTutorialComponent()" />
  </div>

</template>

<script setup>
import ContentBanner from '@/components/ContentBanner.vue';

const banner = {
  title: "Welcome to the Massa",
  description: "Building Predictive QSAR models with Rational Sampling",
  buttonText: "RUN ALGORITHM",
};

const banner2 = {
  title: "How the algorithm works",
  description: "Loren ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
};

const banner3 = {
  title: "Still in doubt?",
  description: "See the tutorial on how to use the Algorithm",
  buttonText: "TUTORIAL",
};

const items = [
  {
    category: 'massa',
    text: 'Massa',
    subtext: 'Loren ipsum dolor sit amet consectetur',
    icon: 'mdi-atom',
  },
  {
    category: 'results',
    text: 'Results',
    subtext: 'Loren ipsum dolor sit amet consectetur',
    icon: 'mdi-chart-line',
  },
  {
    category: 'security',
    text: 'Security',
    subtext: 'Loren ipsum dolor sit amet consectetur',
    icon: 'mdi-shield-check',
  },
  {
    category: 'technicalSupport',
    text: 'Technical Support',
    subtext: 'Loren ipsum dolor sit amet consectetur',
    icon: 'mdi-headset',
  },
  {
    category: 'other',
    text: 'Other',
    subtext: 'Loren ipsum dolor sit amet consectetur',
    icon: 'mdi-help-circle',
  },
  {
    category: 'other',
    text: 'Other',
    subtext: 'Loren ipsum dolor sit amet consectetur',
    icon: 'mdi-help-circle',
  },
];

const dropdownValues = [
  {
    title: 'Upload your Data',
    text: '1. MASSA Algorithm Web is a user-friendly web application that allows researchers to easily apply the MASSA Algorithm for rational sampling of datasets in drug discovery and related fields. It simplifies the process of dividing a dataset into training and test sets for building robust and predictive QSAR/QSPR models.'
  },
  {
    title: 'Smart Sampling',
    text: '2. No, MASSA Web is designed to be accessible to users with diverse technical backgrounds. It features an intuitive graphical interface that guides you through the entire process, from uploading your dataset to visualizing the results.'
  },
  {
    title: 'Enhanced QSAR Modeling',
    text: '3. You can easily upload your dataset in various formats, such as .sdf, .csv, or .xlsx, through a simple drag-and-drop interface or by selecting the file from your computer.'
  },
  {
    title: 'Download your Results',
    text: '4. MASSA Web offers various analysis options, including hierarchical clustering analysis (HCA), principal component analysis (PCA), and k-modes clustering. You can choose the methods that best suit your data and research question.'
  }
];

function openExecutionComponent() {
  window.location.href = '/execution';
};

function openTutorialComponent() {
  window.location.href = '/support';
};
</script>

<style>
.sub-text {
  font-size: 1.4rem;
  margin-bottom: 2rem;
}

.banner2 {
  margin-top: 5rem;
}

.panel {
  margin: 5rem;
}
</style>