<template>
  <div class="d-flex center pageHauteur">
    <h2> {{ $t("temoignage.temoignage") }}</h2>
    <div class="d-flex flexDirectionLigne">
      <div>
        <h3> {{ $t("temoignage.listeTemoignage.temoignage_1.titre") }}</h3>
        <p>{{ $t("temoignage.listeTemoignage.temoignage_1.texte") }}</p>
      </div>
      <div>
        <h3> {{ $t("temoignage.listeTemoignage.temoignage_2.titre") }}</h3>
        <p>{{ $t("temoignage.listeTemoignage.temoignage_2.texte") }}</p>
      </div>
      <div>
        <h3> {{ $t("temoignage.listeTemoignage.temoignage_3.titre") }}</h3>
        <p>{{ $t("temoignage.listeTemoignage.temoignage_3.texte") }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageTestimonials extends Vue {}
</script>
