<template>
  <div class="d-flex center pageHauteur sectionAbout">
    <h2 class="textTitre">{{ $t("temoignage.temoignage") }}</h2>
    <Carousel>
      <CarouselSlide v-for="n in slides" :key="n" :index="n - 1">
        <h3>
          {{ $t("temoignage.listeTemoignage.temoignage_" + n + ".titre") }}
        </h3>

        <p>{{ $t("temoignage.listeTemoignage.temoignage_" + n + ".texte") }}</p>
      </CarouselSlide>
    </Carousel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Carousel from "@/components/carousel/Carousel.vue";
import CarouselSlide from "@/components/carousel/CarouselSlide.vue";
import i18n from "../i18n";

@Component({
  components: {
    Carousel,
    CarouselSlide,
  },
})
export default class PageTestimonials extends Vue {
  data() {
    return {
      slides: Object.keys(i18n.t("temoignage.listeTemoignage")).length,
    };
  }
}
</script>
