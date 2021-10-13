<template>
  <div class="localeChange">
    <div class="toggle_btn" v-on:click="openNav()" v-if="screenReSize == true">
      <span></span>
    </div>
    <div class="overlay" v-on:click.self="openNav()">
      <div class="headbar">
        <a
          data-scroll-to
          href="#ancreHome"
          class="underline"
          id="navBarHome"
          v-bind:class="{ underlineActif: headers[0] }"
          v-on:click="openNav()"
          ><p class="textNavbar">{{ $t("acceuil.acceuil") }}</p></a
        >
        <a
          data-scroll-to
          href="#ancreAbout"
          class="underline"
          id="navBarAbout"
          v-bind:class="{ underlineActif: headers[1] }"
          v-on:click="openNav()"
          ><p clas="textNavbar">{{ $t("about.about") }}</p></a
        >
        <a
          data-scroll-to
          href="#ancreServices"
          class="underline"
          id="navBarService"
          v-bind:class="{ underlineActif: headers[2] }"
          v-on:click="openNav()"
          ><p class="textNavbar">{{ $t("service.service") }}</p></a
        >
        <a
          v-if="true"
          data-scroll-to
          href="#ancreTestimonials"
          class="underline"
          id="navBartestimonials"
          v-bind:class="{ underlineActif: headers[3] }"
          v-on:click="openNav()"
          ><p clas="textNavbar">{{ $t("temoignage.temoignage") }}</p></a
        >

        <a
          data-scroll-to
          href="#ancreContact"
          class="underline"
          id="navBarContact"
          v-bind:class="{ underlineActif: headers[4] }"
          v-on:click="openNav()"
          ><p clas="textNavbar">{{ $t("contact.contact") }}</p></a
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
  data(): void | Record<string, unknown> {
    return { langs: ["en", "fr", "ro", "sp"] };
  }
  screenReSize = false;
  height = 0;
  width = 0;
  headers = [
    false as boolean,
    false as boolean,
    false as boolean,
    false as boolean,
    false as boolean,
  ];
  openNav(): void {
    if (screen.width < 769) {
      const nav = document.querySelector(".headbar") as HTMLInputElement;
      const btn = document.querySelector(".toggle_btn") as HTMLInputElement;
      const overlay = document.querySelector(".overlay") as HTMLInputElement;
      nav.classList.toggle("headbar_open");
      btn.classList.toggle("toggle_btn_open");
      overlay.classList.toggle("overlay_open");
    } else {
      return;
    }
  }
  activateUnderline(position: number): void {
    this.headers = this.headers.map((element, index) => {
      if (index === position) {
        return true;
      }
      return false;
    });
  }
  mounted(): void {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const vm = this;
    window.addEventListener("resize", () => {
      if (window.innerWidth < 769) {
        this.screenReSize = true;
      } else this.screenReSize = false;
    });
    if (window.innerWidth < 769) {
      this.screenReSize = true;
    }

    let observer = new IntersectionObserver(
      function (observables) {
        observables.forEach((observable) => {
          if (observable.intersectionRatio > 0.5) {
            let arrayClass: string[] = [
              "sectionAbout",
              "sectionService",
              "sectionTestimonials",
              "sectionContact",
              "sectionPresentation",
            ];
            arrayClass.forEach(function (itemArrayClass: string) {
              if (observable.target.classList.contains(itemArrayClass)) {
                switch (itemArrayClass as string) {
                  case "sectionPresentation":
                    vm.activateUnderline(0);
                    break;
                  case "sectionAbout":
                    vm.activateUnderline(1);
                    break;
                  case "sectionService":
                    vm.activateUnderline(2);
                    break;
                  case "sectionTestimonials":
                    vm.activateUnderline(3);
                    break;
                  case "sectionContact":
                    vm.activateUnderline(4);
                    break;
                  default:
                    console.log(
                      `Sorry, ça marche pas parce que ${itemArrayClass}`
                    );
                    break;
                }
              }
            });
          }
        });
      },
      {
        threshold: [0.5],
      }
    );
    let items = document.querySelectorAll(".onScreen");
    items.forEach((item) => {
      observer.observe(item);
    });
  }
}
</script>
