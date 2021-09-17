<template>
  <div class="carousel" v-touch:swipe.left="next" v-touch:swipe.right="prev">
    <slot></slot>
    <button class="carouselNav carouselNext" @click.prevent="next">
      <i class="far fa-arrow-alt-circle-right d-flexCenter"></i>
    </button>

    <button class="carouselNav carouselPrev" @click.prevent="prev">
      <i class="far fa-arrow-alt-circle-left d-flexCenter"></i>
    </button>
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
      console.log("next");
      this.index++;
      this.direction = "right";
      if (this.index >= this.slidesCount) {
        this.index = 0;
      }
    },
    prev() {
      console.log("prev");
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
  },
};
</script>
<style lang="scss" scoped>
i {
  font-size: 3em;
  width: 100%;
  height: 100%;
}
.d-flexCenter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel {
  position: relative;
  overflow: hidden;
  height: 80vh;
  width: 100%;
  background-color: grey;
}
.carouselNav {
  position: absolute;
  top: 50%;
  margin-top: -31px;
}
.carouselPrev {
  left: 10px;
  right: auto;
  height: 63px;
  width: 63px;
  z-index: 2;
}
.carouselNext {
  right: 10px;
  left: auto;
  height: 63px;
  width: 63px;
  z-index: 2;
}

.carouselPagination {
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  button {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: black;
    opacity: 0.8;
    border-radius: 50%;
    margin: 0 2px;
    &.active {
      background-color: white;
    }
  }
}
</style>
