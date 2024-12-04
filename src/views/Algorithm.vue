<template>
  <div style="width: 100%; justify-content: center; display: flex;">
      <ContentBanner :title="banner.title" :description="banner.description" :buttonText="banner.buttonText"
        @buttonClicked="openArticle()" />
  </div>
  <div class="content">
    <p class="text-h4 font-weight-medium">The Massa Algorithm</p>
    <p class="text-justify"> Lorem ipsum odor amet, consectetuer adipiscing elit. Primis efficitur ultrices augue
      pharetra himenaeos, posuere vitae. Ligula nibh eget cubilia ac nam. Maximus fames mi ut blandit potenti himenaeos
      elementum. Laoreet ante tincidunt varius torquent metus nulla. Vel laoreet sapien ornare, diam nunc adipiscing
      dolor amet conubia. Adipiscing pellentesque molestie phasellus ad lorem ac.

      Ultrices laoreet nibh cursus suscipit placerat feugiat. Facilisis vulputate at eleifend nec ut id nibh. Venenatis
      efficitur inceptos at torquent ut. Platea tempor habitasse condimentum imperdiet molestie ipsum consectetur
      libero. Nibh platea iaculis massa fusce vivamus sapien tincidunt vivamus ex. Finibus nisl congue commodo magnis
      inceptos at. Feugiat fermentum lorem maecenas blandit consectetur.

      Quisque nulla tortor inceptos vulputate tortor. Luctus dignissim donec ullamcorper urna inceptos sodales rhoncus
      nullam! Curae aliquam taciti tincidunt ultrices ultrices quam cras turpis. Quisque integer mi accumsan blandit
      tempus himenaeos; at eros. Sit diam felis natoque bibendum ex metus justo mauris. Accumsan ac facilisi augue
      nascetur eleifend.

      Nibh nisl auctor, nullam dictum commodo magna. Sociosqu fringilla vitae non commodo ullamcorper volutpat. Nibh
      scelerisque mattis nullam habitasse eleifend. Nascetur natoque felis nascetur scelerisque proin. Accumsan metus
      nibh penatibus ridiculus ad; massa tempus urna. Lacus quisque venenatis curae orci consequat volutpat. In suscipit
      pulvinar arcu inceptos mus laoreet odio taciti facilisi. Fermentum egestas hac sem rhoncus, gravida suscipit.
      Etiam nunc pharetra duis nullam viverra nullam vulputate sit quis.

      Nisl ligula molestie adipiscing facilisi; mi fermentum dis. Nibh ultricies et congue lectus turpis. Lacinia montes
      ipsum euismod ligula eu turpis erat. Tellus magna himenaeos aliquam magnis torquent non quisque a a. Nisi risus
      volutpat mi id amet ad sit. Imperdiet natoque condimentum euismod lacus orci. Ornare augue torquent enim dictumst
      amet etiam varius hac duis. Litora vestibulum nullam faucibus viverra et ultrices egestas vitae interdum. Dui
      sollicitudin montes a nulla tortor dapibus laoreet. Pretium volutpat ullamcorper eleifend phasellus urna et.

      Libero ullamcorper lorem gravida quis magnis velit. Quisque velit mollis ad proin arcu lacus. Sed molestie cubilia
      facilisis posuere volutpat vitae cursus tristique. Ad accumsan blandit facilisi auctor habitant ante odio feugiat
      sem. Nulla arcu volutpat hendrerit a habitasse. In vitae elit semper himenaeos tempor. Tempor litora risus diam ac
      ut. Ac a ipsum dolor integer eget; tellus curae proin. Vitae ornare fringilla magnis risus quisque maecenas
      molestie eros.

      Blandit efficitur potenti nam, habitasse ut tempus imperdiet. Semper consectetur lacinia tincidunt aenean habitant
      sagittis. Pharetra id himenaeos dictum nostra felis fringilla. Sollicitudin scelerisque quisque scelerisque; dolor
      dolor dui. Litora ultrices faucibus finibus euismod, nostra tempus. Mus diam eros; proin augue ante elit varius.
    </p>
  </div>

  <div class="text-center" style="padding-bottom: 2rem;">
    <p class="text-h4 font-weight-bold">Tutorials</p>
  </div>

  <v-row>
    <v-col cols="12" md="4">
      <v-card class="mx-auto" prepend-icon="$vuetify" width="400" href="https://github.com/vuetifyjs/vuetify/"
        rel="noopener" target="_blank">
        <template v-slot:title>
          <span class="font-weight-black">How to see the results</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
          voluptatibus! Eaque
          cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" md="4">
      <v-card class="mx-auto" prepend-icon="$vuetify" width="400" href="https://github.com/vuetifyjs/vuetify/"
        rel="noopener" target="_blank">
        <template v-slot:title>
          <span class="font-weight-black">How to see the results</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
          voluptatibus!
          Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
        </v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="4">
      <v-card class="mx-auto" prepend-icon="$vuetify" width="400" href="https://github.com/vuetifyjs/vuetify/"
        rel="noopener" target="_blank">
        <template v-slot:title>
          <span class="font-weight-black">How to see the results</span>
        </template>

        <v-card-text class="bg-surface-light pt-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore
          voluptatibus!
          Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <div>

  </div>
</template>

<script setup>
import ContentBanner from '@/components/ContentBanner.vue';
const banner = {
  title: "The Massa Algorithm",
  description: "Access the full article on the rational sampling method",
  buttonText: "ARTICLE",
};

function openArticle() {
  window.open("https://drive.google.com/file/d/1eVIKStKM6RnmxFgioTZTswjnstyIr6hp/view?usp=sharing", "_blank");
}
</script>

<style>
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/logo_pizza.svg");
  background-size: contain;
  background-attachment: fixed;
  background-position: center;
  opacity: 0.05;
  /* Aplica opacidade apenas à imagem */
  z-index: 1;
}

.content {
  position: relative;
  z-index: 2;
  /* Coloca o conteúdo acima da imagem */
  padding: 1rem;
  width: 100%;
}

.text-justify {
  margin: 1rem;

}

.mx-auto {
  margin-left: auto;
  margin-right: auto;

}

.text-center {
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}

.button {
  margin-bottom: 1rem;
  width: 400px;
}
</style>
