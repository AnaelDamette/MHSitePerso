<template>
  <div id="app" data-scroll-container>
    <div class="d-flex" data-scroll-section>
      <PagePresentation id="ancreHome" data-scroll data-scroll-speed="2" />
      <PageServices id="ancreServices" data-scroll data-scroll-speed="2" />
      <PageTestimonials id="ancreTestimonials" data-scroll data-scroll-speed="2" />
      <PageAbout id="ancreAbout" data-scroll data-scroll-speed="2" />
      <PageContact id="ancreContact" data-scroll data-scroll-speed="2" />
    </div>
    <Navbar />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import HelloI18n from "./components/HelloI18n.vue";
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
    HelloWorld,
    HelloI18n,
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
    console.log("scroll", scroll);
    console.log("Je test si le scroll est bien smooth " + scroll);
  }
}
</script>

<style lang="scss"></style>
