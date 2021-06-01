<template>
  <div class="localeChange">
    <div class="headbar">
      <a data-scroll-to href="#ancreHome"><p>Home</p></a>
      <a data-scroll-to href="#ancreServices"><p>services</p></a>
      <a data-scroll-to href="#ancreTestimonial"><p>testimonial</p></a>
      <a data-scroll-to href="#ancreAbout"><p>about</p></a>
      <a data-scroll-to href="#ancreContact"><p>contact</p></a>
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
