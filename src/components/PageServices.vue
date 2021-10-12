<template>
  <section class="d-flex pageHauteur sectionService pageService onScreen">
    <div class="d-flex center">
      <h2 class="textTitre">{{ $t("service.titreService") }}</h2>
      <ul class="listService">
        <li>
          <i class="fas fa-long-arrow-alt-right puce"> </i
          >{{ $t("service.listPourquoiTravailler.1") }}
        </li>
        <li>
          <i class="fas fa-long-arrow-alt-right puce"> </i
          >{{ $t("service.listPourquoiTravailler.2") }}
        </li>
        <li>
          <i class="fas fa-long-arrow-alt-right puce"> </i
          >{{ $t("service.listPourquoiTravailler.3") }}
        </li>
        <li>
          <i class="fas fa-long-arrow-alt-right puce"> </i
          >{{ $t("service.listPourquoiTravailler.4") }}
        </li>
      </ul>
    </div>
    <div class="d-flex flexDirectionService center">
      <figure class="d-flex center figureService">
        <img
          src="../assets/Translating.png"
          alt="Icone de Traduction"
          class="iconeServices"
        />
        <figcaption class="figcaption">
          <h3 class="titreList">{{ $t("service.traductionList.titre") }}</h3>
          <ul>
            <li>
              <i class="fas fa-caret-right puce"></i
              >{{ $t("service.traductionList.1") }}
            </li>
            <li>
              <i class="fas fa-caret-right puce"></i
              >{{ $t("service.traductionList.2") }}
            </li>
            <li>
              <i class="fas fa-caret-right puce"></i
              >{{ $t("service.traductionList.3") }}
            </li>
            <li>
              <i class="fas fa-caret-right puce"></i
              >{{ $t("service.traductionList.4") }}
            </li>
          </ul>
        </figcaption>
      </figure>
      <figure class="d-flex center figureService">
        <img
          src="../assets/Subtitling.png"
          alt="Icone de Subtitling"
          class="iconeServices"
        />
        <figcaption class="figcaption">
          <h3 class="titreList">{{ $t("service.sousTitreList.titre") }}</h3>
          <ul>
            <li>
              <i class="fas fa-caret-right puce"></i
              >{{ $t("service.sousTitreList.1") }}
            </li>
            <li>
              <i class="fas fa-caret-right puce"></i
              >{{ $t("service.sousTitreList.2") }}
            </li>
            <li>
              <i class="fas fa-caret-right puce"></i
              >{{ $t("service.sousTitreList.3") }}
            </li>
          </ul>
        </figcaption>
      </figure>
      <figure class="d-flex center figureService">
        <img
          src="../assets/ProofReading.png"
          alt="Icone de Proof Reading"
          class="iconeServices"
        />
        <figcaption class="figcaption">
          <h3 class="titreList">{{ $t("service.correctionList.titre") }}</h3>
          <ul>
            <li>
              <i class="fas fa-caret-right puce"></i
              >{{ $t("service.correctionList.1") }}
            </li>
            <li>
              <i class="fas fa-caret-right puce"></i
              >{{ $t("service.correctionList.2") }}
            </li>
          </ul>
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageServices extends Vue {}
</script>
