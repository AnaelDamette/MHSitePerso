<template>
  <div class="localeChange">
    <div class="toggle_btn" v-on:click="openNav()" v-if="screenSize == true">
      <span></span>
    </div>
    <div class="overlay" v-on:click.self="openNav()">
      <div class="headbar">
        <a data-scroll-to href="#ancreHome" class="underline"
          ><p>{{ $t("acceuil.acceuil") }}</p></a
        >
        <a data-scroll-to href="#ancreServices" class="underline"
          ><p>{{ $t("service.service") }}</p></a
        >
        <a
          v-if="false"
          data-scroll-to
          href="#ancreTestimonials"
          class="underline"
          ><p>{{ $t("temoignage.temoignage") }}</p></a
        >
        <a data-scroll-to href="#ancreAbout" class="underline"
          ><p>{{ $t("about.about") }}</p></a
        >
        <a data-scroll-to href="#ancreContact" class="underline"
          ><p>{{ $t("contact.contact") }}</p></a
        >
      </div>
    </div>

    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  data() {
    return { langs: ["en", "fr", "ro", "sp"] };
  }
  screenSize = false;
  openNav() {
    const nav = document.querySelector(".headbar") as HTMLInputElement;
    const btn = document.querySelector(".toggle_btn") as HTMLInputElement;
    const overlay = document.querySelector(".overlay") as HTMLInputElement;
    nav.classList.toggle("headbar_open");
    btn.classList.toggle("toggle_btn_open");
    overlay.classList.toggle("overlay_open");
  }

  viewportResize(): void {
    if (screen.width > 768) {
      this.screenSize = false;
    } else {
      this.screenSize = true;
    }
  }
  created() {
    this.viewportResize();
  }
  beforeUpdate() {
    this.viewportResize();
  }
}
</script>
<style scoped></style>
