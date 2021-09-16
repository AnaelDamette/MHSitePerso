<template>
  <div class="d-flex center pageHauteur sectionAbout">
    <h2 class="textTitre">{{ $t("temoignage.temoignage") }}</h2>
    <Carousel>
      <CarouselSlide v-for="n in slides" :key="n" :index="n - 1"
        ><img :src="'https://source.unsplash.com/random/' + n" alt=""
      /></CarouselSlide>
    </Carousel>
    <div class="d-flex flexDirectionLigne">
      <div class="card">
        <h3>{{ $t("temoignage.listeTemoignage.temoignage_1.titre") }}</h3>
        <p>{{ $t("temoignage.listeTemoignage.temoignage_1.texte") }}</p>
      </div>
      <div class="card">
        <h3>{{ $t("temoignage.listeTemoignage.temoignage_2.titre") }}</h3>
        <p>{{ $t("temoignage.listeTemoignage.temoignage_2.texte") }}</p>
      </div>
      <div class="card">
        <h3>{{ $t("temoignage.listeTemoignage.temoignage_3.titre") }}</h3>
        <p>{{ $t("temoignage.listeTemoignage.temoignage_3.texte") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Carousel from "@/components/carousel/Carousel.vue";
import CarouselSlide from "@/components/carousel/CarouselSlide.vue";

@Component({
  components: {
    Carousel,
    CarouselSlide,
  },
})
export default class PageTestimonials extends Vue {
  data() {
    return {
      slides: 8,
    };
  }
}
</script>
