<template>
  <div class="localeChange">
    <div class="headbar">
      <a data-scroll-to href="#ancreHome"
        ><p>{{ $t("acceuil.acceuil") }}</p></a
      >
      <a data-scroll-to href="#ancreServices"
        ><p>{{ $t("service.service") }}</p></a
      >
      <a data-scroll-to href="#ancreTestimonials"
        ><p>{{ $t("temoignage.temoignage") }}</p></a
      >
      <a data-scroll-to href="#ancreAbout"
        ><p>{{ $t("about.about") }}</p></a
      >
      <a data-scroll-to href="#ancreContact"
        ><p>{{ $t("contact.contact") }}</p></a
      >
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
}
</script>
