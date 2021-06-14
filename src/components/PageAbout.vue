<template>
  <section class="d-flex pageHauteur flexDirectionLigne sectionAbout">
    <aside class="blockAbout blockAboutImg">
      <img src="../assets/PhotoAbout.png" alt="Une photo de Marina Hantz" />
    </aside>
    <article class="blockAbout">
      <h2 class="titreAbout">
        <mark class="clicker">{{ $t("about.titre.hello") }}</mark>
        {{ $t("about.titre.enchantee") }}
      </h2>
      <p>
        {{ $t("about.texte.p1.myName")
        }}<strong>{{ $t("about.texte.maj.marina") }}</strong
        >{{ $t("about.texte.p1.basedIn") }}
        <strong
          >{{ $t("about.texte.maj.traductionPays.anglais") }}
          {{ $t("about.texte.maj.traductionPays.espagnols") }}</strong
        >{{ $t("about.texte.p1.etMin") }}
        <strong> {{ $t("about.texte.maj.traductionPays.romanian") }}</strong>
        {{ $t("about.texte.p1.into") }}
        <strong>{{ $t("about.texte.maj.traductionPays.francais") }}</strong
        >. {{ $t("about.texte.p1.specialiste") }}<strong>{{ $t("about.texte.maj.international") }}</strong>{{ $t("about.texte.p1.etMin") }}
        <strong>{{ $t("about.texte.maj.art.art") }}</strong>{{ $t("about.texte.p1.parenthese") }} {{ $t("about.texte.p1.qualification") }}<br />
        {{ $t("about.texte.p2.profession") }} {{ $t("about.texte.p2.iAm") }}
        <strong>{{ $t("about.texte.maj.art.musicienne") }}</strong>{{ $t("about.texte.p2.parentheseMusique") }}
        <strong>{{ $t("about.texte.maj.art.danse") }}</strong> {{ $t("about.texte.p2.parentheseDance") }}
        <strong>{{ $t("about.texte.maj.art.artiste") }}</strong> {{ $t("about.texte.p2.enjoyArt") }}<br />
        {{ $t("about.texte.p3.text")}}<br />
       {{ $t("about.texte.p4.would")}}<strong>{{ $t("about.texte.maj.contact.savoirPlus")}}</strong> ? {{ $t("about.texte.p4.orTo")}}
        <strong>{{ $t("about.texte.maj.contact.demandeDevis")}}{{ $t("")}}</strong> ?{{ $t("about.texte.p4.hesitate")}}
        <a data-scroll-to href="#ancreContact"><strong>{{ $t("about.texte.maj.contact.contact")}}</strong></a>
      </p>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageAbout extends Vue {}
</script>
