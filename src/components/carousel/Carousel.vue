<template>
  <div
    class="carousel d-flex"
    v-touch:swipe.left="next"
    v-touch:swipe.right="prev"
  >
    <slot></slot>
    <!-- <button class="carouselNav carouselNext" @click.prevent="next">
      <i class="far fa-arrow-alt-circle-right d-flex center iCarousel"></i>
    </button>

    <button class="carouselNav carouselPrev" @click.prevent="prev">
      <i class="far fa-arrow-alt-circle-left d-flex center iCarousel"></i>
    </button> -->
    <div class="carouselPagination">
      <button
        v-for="n in this.slidesCount"
        :key="n"
        @click="goto(n - 1)"
        :class="{ active: n - 1 === index }"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      slides: [],
      direction: "right",
    };
  },
  computed: {
    slidesCount() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      this.index++;
      this.direction = "right";
      if (this.index >= this.slidesCount) {
        this.index = 0;
      }
    },
    prev() {
      this.index--;
      this.direction = "left";
      if (this.index < 0) {
        this.index = this.slidesCount - 1;
      }
    },
    goto(index) {
      console.log("goto");
      this.direction = index > this.index ? "right" : "left";
      this.index = index;
    },
  },

  mounted() {
    this.slides = this.$children;
    setInterval(() => {
      this.next();
    }, 20000);
  },
};
</script>
<style lang="scss" scoped>
</style>
