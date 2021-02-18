<template>
  <div class="group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "FormGroup"
}
</script>

<style scoped lang="scss">
  .group {
    @include flex(column, flex-end, flex-start);
    padding: 0 0 15px 0;
  }
</style>