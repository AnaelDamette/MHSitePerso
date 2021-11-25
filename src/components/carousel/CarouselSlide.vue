<template>
  <transition :name="transition">
    <div v-show="visible" class="d-flex carouselSlide">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    index: { type: Number, default: 0 },
  },
  computed: {
    transition() {
      if (this.$parent.direction) {
        return "slide-" + this.$parent.direction;
      }
      return "test";
    },
    visible() {
      return this.index === this.$parent.index;
    },
  },
};
</script>
<style lang="scss" scoped>
.slide-right-enter-active {
  animation: slide-rightIn 1.5s;
}
.slide-right-leave-active {
  animation: slide-rightOut 1.5s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
@keyframes slide-rightIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 100;
  }
}
@keyframes slide-rightOut {
  from {
    transform: translateX(0);
    opacity: 100;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
}
.slide-left-enter-active {
  animation: slide-leftIn 1.5s;
}
.slide-left-leave-active {
  animation: slide-leftOut 1.5s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
}
@keyframes slide-leftIn {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 100;
  }
}
@keyframes slide-leftOut {
  from {
    transform: translateX(0);
    opacity: 100;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
}
</style>
