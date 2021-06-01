<template>
  <div class="d-flex pageHauteur">
    <figure class="iconeServices d-flex">
      <img src="../assets/Translating.png" alt="Icone de Traduction" />
      <img src="../assets/Subtitling.png" alt="Icone de Subtitling" />
      <img src="../assets/ProofReading.png" alt="Icone de Proof Reading" />
    </figure>
    <figure class="photoService">
      <img
        src="../assets/PhotoService.png"
        alt="Photo représentant les services de traduction"
      />
    </figure>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageServices extends Vue {}
</script>
