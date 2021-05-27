<template>
  <div class="d-flex center pageHauteur">
    <figure class='d-flex figurePresentation center'>
      <img src="../assets/Logo.png" alt="Le logo de Marina Hantz Translation">
      <figcaption class="textLogo"> {{ $t("textLogo") }}</figcaption>
    </figure>
    <h1 class="presentation">{{ $t("presentationTraduction") }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PagePresentation extends Vue {}
</script>
