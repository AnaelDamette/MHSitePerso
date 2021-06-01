<template>
  <section class="d-flex pageHauteur flexDirectionLigne sectionAbout">
    <aside class="blockAbout blockAboutImg">
      <img src="../assets/PhotoAbout.png" alt="Une photo de Marina Hantz" />
    </aside>
    <article class="blockAbout">
      <h2><mark class="clicker">Bonjour,</mark>nice to meet you !</h2>
      <p>
        My name is <strong>Marina</strong>, I am a native French translator
        based in Mons, Belgium. I translate from
        <strong>English, Spanish, and Romanian</strong> into
        <strong>French</strong>. I specialise in
        <strong>international development</strong> and
        <strong>arts</strong> (espacially music and dance) Concerning my
        qualifications, I have an MA in Translation Studies from the University
        of Mons. . I have chosen translation as my profession, but I have many
        other passions that enrich my cultural and linguistic skills ; I am a
        <strong>musician</strong> (12 years of harp, choir and music theory), a
        <strong>dancer</strong> (I have been dancing Salsa and Bachata since
        2016 and teaching since 2020), and as an
        <strong>amateur</strong> artist, I enjoy everything about visual arts
        (photography, drawing, etc.) My main goal ? Giving you a voice to
        communicate and share your ideas with the French speaking audience !
        Would you like to <strong>know more</strong> ? Or to
        <strong>request a quote</strong> ? Don’t hesite to <a>contact me !</a>
      </p>
    </article>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageAbout extends Vue {}
</script>
