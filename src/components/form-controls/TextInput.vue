<template>
  <label class="label" :for="$attrs.id">{{ label }}</label>
  <input class="input" :id="$attrs.id" :type="type" :value="value" @input="onChange"/>
</template>

<script>
export default {
  name: "TextInput",
  inheritAttrs: false,
  props: {
    onChange: Function,
    value: String,
    label: String,
    type: {
      type: String,
      default: "text"
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.input {
  height: 3rem;
  border: 1px solid rgba(color(black), 0.25);
  border-radius: 4px;
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  padding: 0 10px;
}

.label {
  font-size: 11px;
  text-transform: uppercase;
  padding-left: 5px;
}
</style>