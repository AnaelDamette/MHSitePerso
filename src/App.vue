<template>
  <div id="app" data-scroll-container>
    <div class="d-flex" data-scroll-section>
      <PagePresentation id="ancreHome" data-scroll />

      <PageAbout id="ancreAbout" data-scroll />
      <PageServices id="ancreServices" data-scroll />
      <PageTestimonials v-if="true" id="ancreTestimonials" data-scroll />
      <PageContact id="ancreContact" data-scroll />
    </div>
    <Navbar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "./components/Navbar.vue";
import PagePresentation from "./components/PagePresentation.vue";
import PageServices from "./components/PageServices.vue";
import PageAbout from "./components/PageAbout.vue";
import PageContact from "./components/PageContact.vue";
import PageTestimonials from "./components/PageTestimonials.vue";
import LocomotiveScroll from "locomotive-scroll";
// LocomotiveScroll = require("locomotive-scroll");

@Component({
  components: {
    Navbar,
    PagePresentation,
    PageServices,
    PageAbout,
    PageContact,
    PageTestimonials,
  },
})
export default class App extends Vue {
  private scroll = {};
  public mounted(): void {
    this.scroll = new LocomotiveScroll({
      el: document.querySelector("#app"),
      smooth: true,
    });
  }
}
</script>

<style lang="scss"></style>
