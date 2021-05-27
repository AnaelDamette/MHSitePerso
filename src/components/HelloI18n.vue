<template>
  <div>
    <p class="grostest">{{ $t("message") }}</p>
    <p class="grostest2">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
      asperiores fugiat, amet corrupti quidem sapiente accusamus alias
      voluptatibus, voluptatem, qui possimus facere consequuntur tenetur placeat
      iusto aliquid in nisi expedita? Lorem ipsum, dolor sit amet consectetur
      adipisicing elit. Non aut quaerat quos ullam, voluptatibus omnis, modi hic
      accusantium nemo maxime laborum culpa commodi voluptas nisi sint rem,
      impedit consequuntur perspiciatis. Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Iste distinctio labore ab eveniet obcaecati nobis, atque
      quas voluptatum, deserunt minima excepturi nemo omnis veniam officia et
      tempora libero, doloribus nisi!
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloI18n extends Vue {}
</script>
