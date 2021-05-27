<template>
  <div class="localeChange">
    <div class="headbar">
      <a href=""><p>Home</p></a>
      <a href=""><p>services</p></a>
      <a href=""><p>testimonial</p></a>
      <a href=""><p>about</p></a>
      <a href=""><p>contact</p></a>
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
export default class localChange extends Vue {
  data() {
    return { langs: ["en", "fr", "ro", "sp"] };
  }
}
</script>