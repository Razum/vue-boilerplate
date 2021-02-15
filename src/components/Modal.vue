<template>
  <template v-if="isOpen">
    <div class="background" @click="close"></div>
    <div class="modal" :class="{ small, medium, large }" v-lock-scroll="isOpen">
      <span class="close" @click="close">&#10005;</span>
      <div class="modal__header">
        <slot name="header">Header</slot>
      </div>
      <div class="modal__content">
        <slot name="content">Content</slot>
      </div>
      <div class="modal__footer">
        <slot name="footer">Footer</slot>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  name: "Modal",
  props: {
    small: Boolean,
    medium: Boolean,
    large: Boolean,
    isOpen: Boolean
  },
  emits: ["close"],
  methods: {
    close: function () {
      this.$emit("close");
    }
  },
  directives: {
    "lock-scroll": {
      mounted() {
        document.body.classList.add("no-scroll");
      },

      unmounted() {
        document.body.classList.remove("no-scroll");
      }
    }
  }
}
</script>

<style scoped lang="scss">
.background {
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.modal {
  @include flex(column, flex-start, stretch);
  top: 100px;
  min-height: 300px;
  position: fixed;
  z-index: 2;
  left: 50%;
  transform: translateX(-50%);
  background-color: color(white);
  border-radius: 4px;

  &__content {
    flex: 1;
  }

  &.small {
    width: 33%
  }

  &.medium {
    width: 50%;
  }

  &.large {
    width: 75%;
  }
}

.close {
  position: absolute;
  top: 5px;
  right: 7px;
  cursor: pointer;
}
</style>