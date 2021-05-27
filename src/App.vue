<template>
  <div id="app">
    <div class="d-flex">
      <PagePresentation />
      <PageServices />
    </div>
    <LocaleChange />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import HelloI18n from "./components/HelloI18n.vue";
import LocaleChange from "./components/LocaleChange.vue";
import PagePresentation from "./components/PagePresentation.vue";
import PageServices from "./components/PageServices.vue";

@Component({
  components: {
    HelloWorld,
    HelloI18n,
    LocaleChange,
    PagePresentation,
    PageServices,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
