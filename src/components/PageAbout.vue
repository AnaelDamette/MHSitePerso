<template>
  <section class="d-flex pageHauteur flexDirectionService sectionAbout">
    <aside class="blockAbout">
      <div class="blockAboutImg">
        <img
          class="moveMouse"
          id="imageAbout"
          src="../assets/PhotoAbout.png"
          alt="Une photo de Marina Hantz"
        />
      </div>
      <div class="shadowAnimate"></div>
    </aside>
    <article class="blockAbout">
      <h2 class="titreAbout">
        <mark class="textTitre">{{ $t("about.titre.hello") }}</mark>
        {{ $t("about.titre.enchantee") }}
      </h2>
      <div class="texteRetouche">
        <p
          class="textPresentation"
          :inner-html.prop="
            $t('about.paragraphe1') | miseEnGras($t('about.paragraphe1'))
          "
        ></p>
        <p
          class="textPresentation"
          :inner-html.prop="
            $t('about.paragraphe2') | miseEnGras($t('about.paragraphe2'))
          "
        ></p>
        <p
          class="textPresentation"
          :inner-html.prop="
            $t('about.paragraphe3') | miseEnGras($t('about.paragraphe3'))
          "
        ></p>
        <p
          class="textPresentation"
          :inner-html.prop="
            $t('about.paragraphe4') | miseEnGras($t('about.paragraphe4'))
          "
        ></p>
        <a
          data-scroll-to
          href="#ancreContact"
          class="textPresentation d-flex center"
        >
          <strong class="textContact underline">
            {{ $t("about.contact") }}</strong
          >
        </a>
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import i18n from "../i18n";

@Component({
  filters: {
    miseEnGras(test: string) {
      const motEnGras: any = i18n.t("about.motEnGras");

      for (let i = 0; i < motEnGras.length; i++) {
        let texteArray = test.split(motEnGras[i]);
        test = " ";

        for (let j = 0; j < texteArray.length - 1; j++) {
          test += texteArray[j] + "<strong>" + motEnGras[i] + "</strong>";
        }

        test += texteArray[texteArray.length - 1];
      }
      return test;
    },
  },
})
export default class PageAbout extends Vue {
  positionMouseXEased = 0;
  positionMouseYEased = 0;
  boxOffsetX = 0;
  boxOffsetY = 0;
  speedFactor = 50;
  speedDivider = 1 / 15;
  shadowOffsetX = 0;
  shadowOffsetY = 0;

  mousePosition() {
    document.addEventListener("mousemove", (e) => {
      const positionMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      if (positionMouseX >= 0) {
        this.positionMouseXEased = this.easefunction(positionMouseX);
      } else {
        this.positionMouseXEased = -this.easefunction(-positionMouseX);
      }
      const positionMouseY = (e.clientY / window.innerHeight) * 2 - 1;

      if (positionMouseY >= 0) {
        this.positionMouseYEased = this.easefunction(positionMouseY);
      } else {
        this.positionMouseYEased = -this.easefunction(-positionMouseY);
      }
    });
  }
  lerp(start: number, end: number, amt: number) {
    return (1 - amt) * start + amt * end;
  }
  raf() {
    this.boxAnimate();
    this.shadowAnimate();
  }
  easefunction(ratio: number) {
    return ratio * 1;
  }
  boxAnimate() {
    const imageAbout = document.querySelector(
      "#imageAbout"
    ) as HTMLInputElement;

    const blockImageAbout = document.querySelector(
      ".blockAboutImg"
    ) as HTMLInputElement;

    this.boxOffsetX = this.lerp(
      this.boxOffsetX,
      this.positionMouseXEased * this.speedFactor,
      this.speedDivider
    );
    this.boxOffsetY = this.lerp(
      this.boxOffsetY,
      this.positionMouseYEased * this.speedFactor,
      this.speedDivider
    );

    imageAbout.style.transform = `scale(1.09) translate(${
      this.boxOffsetX / 2
    }px, ${-this.boxOffsetY}px)`;
    blockImageAbout.style.transform = ` translate(${this.boxOffsetX}px, ${this.boxOffsetY}px)`;
  }
  shadowAnimate() {
    const shadowAnimate = document.querySelector(
      ".shadowAnimate"
    ) as HTMLInputElement;
    const blockImageAbout = document.querySelector(
      ".blockAboutImg"
    ) as HTMLInputElement;

    shadowAnimate.style.width =
      blockImageAbout.getBoundingClientRect().width + "px";
    shadowAnimate.style.height =
      blockImageAbout.getBoundingClientRect().height + "px";
    this.shadowOffsetX = this.lerp(
      this.shadowOffsetX,
      this.boxOffsetX,
      this.speedDivider
    );
    this.shadowOffsetY = this.lerp(
      this.shadowOffsetY,
      this.boxOffsetY,
      this.speedDivider
    );

    shadowAnimate.style.transform = ` translate(${this.shadowOffsetX}px, ${this.shadowOffsetY}px)`;
  }
  mounted() {
    this.mousePosition();
    setInterval(this.raf, 1000 / 60);
  }
}
</script>
