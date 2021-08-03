<template>
  <section class="d-flex pageHauteur flexDirectionService sectionAbout">
    <aside class="blockAbout blockAboutImg">
      <img src="../assets/PhotoAbout.png" alt="Une photo de Marina Hantz" />
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
export default class PageAbout extends Vue {}
</script>
