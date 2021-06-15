<template>
  <div class="d-flex pageHauteur">
    <div class="d-flex center">
      <h2>{{ $t("service.titreService") }}</h2>
      <ul>
        <li>{{ $t("service.listPourquoiTravailler.1") }}</li>
        <li>{{ $t("service.listPourquoiTravailler.2") }}</li>
        <li>{{ $t("service.listPourquoiTravailler.3") }}</li>
        <li>{{ $t("service.listPourquoiTravailler.4") }}</li>
      </ul>
    </div>
    <div class="d-flex flexDirectionLigne center">
      <figure class="d-flex center">
        <img src="../assets/Translating.png" alt="Icone de Traduction" />
        <figcaption>
          <h3>{{ $t("service.traductionList.titre") }}</h3>
          <ul>
            <li>{{ $t("service.traductionList.1") }}</li>
            <li>{{ $t("service.traductionList.2") }}</li>
            <li>{{ $t("service.traductionList.3") }}</li>
            <li>{{ $t("service.traductionList.4") }}</li>
          </ul>
        </figcaption>
      </figure>
      <figure class="d-flex center">
        <img src="../assets/Subtitling.png" alt="Icone de Subtitling" />
        <figcaption>
          <h3>{{ $t("service.sousTitreList.titre") }}</h3>
          <ul>
            <li>{{ $t("service.sousTitreList.1") }}</li>
            <li>{{ $t("service.sousTitreList.2") }}</li>
            <li>{{ $t("service.sousTitreList.3") }}</li>
          </ul>
        </figcaption>
      </figure>
      <figure class="d-flex center">
        <img src="../assets/ProofReading.png" alt="Icone de Proof Reading" />
        <figcaption>
          <h3>{{ $t("service.correctionList.titre") }}</h3>
          <ul>
            <li>{{ $t("service.correctionList.1") }}</li>
            <li>{{ $t("service.correctionList.2") }}</li>
          </ul>
        </figcaption>
      </figure>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageServices extends Vue {}
</script>
