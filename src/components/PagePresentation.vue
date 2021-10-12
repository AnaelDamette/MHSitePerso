<template>
  <section class="d-flex center pageHauteur sectionPresentation onScreen">
    <figure class="d-flex figurePresentation center">
      <img src="../assets/Logo.png" alt="Le logo de Marina Hantz Translation" />
      <figcaption class="textTitre">{{ $t("acceuil.textLogo") }}</figcaption>
    </figure>
    <h1 class="presentation">{{ $t("acceuil.presentationTraduction") }}</h1>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PagePresentation extends Vue {}
</script>
