<template>
  <section class="d-flex pageHauteur pageContact">
    <h2 class="titreCentre d-flex">{{ $t("contact.titreContact") }}</h2>
    <article class="carteContact d-flex flexDirectionLigne">
      <figure class="logoContact testBackground">
        <img
          src="../assets/Logo.png"
          alt="Le logo de Marina Hantz Translation"
        />
      </figure>
      <div class="d-flex center">
        <h3 class="titreCarteContact">{{ $t("contact.getInTouch") }}</h3>
        <div>
          <a
            class="d-flex flexDirectionLigne lienContact"
            href="mailto:marinahanz@hotmail.fr"
          >
            <i class="far fa-envelope lienContact"></i>
            <p class="lienContact">marina.hantz@hotmail.fr</p></a
          >
          <a class="d-flex flexDirectionLigne lienContact" href="">
            <i class="fab fa-linkedin-in lienContact"></i>
            <p class="lienContact">Marina Hantz</p></a
          >
          <a class="d-flex flexDirectionLigne lienContact" href="">
            <i class="fas fa-phone-alt lienContact"></i>
            <p class="lienContact">+336 28 75 31 64</p></a
          >
        </div>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Pagecontact extends Vue {}
</script>
