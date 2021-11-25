<template>
  <section
    class="d-flex alignTestimonials sectionTestimonials onScreen bgTestimonials"
  >
    <h2 class="textTitre">{{ $t("temoignage.temoignage") }}</h2>
    <Carousel class="">
      <CarouselSlide v-for="n in slides" :key="n" :index="n - 1">
        <h3 class="titreSlide" hidden>
          {{ $t("temoignage.listeTemoignage.temoignage_" + n + ".titre") }}
        </h3>

        <p class="texteSlide">
          <i class="fas fa-quote-left space"></i
          >{{ $t("temoignage.listeTemoignage.temoignage_" + n + ".texte")
          }}<i class="fas fa-quote-right space"></i>
        </p>
        <p class="textRight">
          {{ $t("temoignage.listeTemoignage.temoignage_" + n + ".titre") }}
        </p>
      </CarouselSlide>
    </Carousel>
  </section>
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
  data(): Record<string, unknown> {
    return {
      slides: Object.keys(i18n.t("temoignage.listeTemoignage")).length,
    };
  }
}
</script>
