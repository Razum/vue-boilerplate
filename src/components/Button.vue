<template>
  <button class="btn" :type="type" @click="onClick">
    <slot>Button</slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button"
    },
    onClick: Function
  }

}
</script>

<style scoped lang="scss">
.btn {
  background: transparent;
  border: 1px solid rgba(color(black), 0.25);
  padding: 15px 30px;
  border-radius: 4px;
  cursor: pointer;

  &:active {
    box-shadow: inset 0 0 7px rgba(color(black), 0.35);
    outline: none;
  }

  &:focus {
    outline: none;
  }
}
</style>