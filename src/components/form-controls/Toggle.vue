<template>
<div class="toggle">
  <span>{{ leftLabel }}</span>
  <input :id="$attrs.id" class="input" type="checkbox" :checked="modelValue" @change="change"/>
  <label :for="$attrs.id" class="label"></label>
  <span>{{ rightLabel }}</span>
</div>
</template>

<script>
export default {
  name: "Toggle",
  inheritAttrs: false,
  props: {
    leftLabel: {
      type: String,
      default: "Off"
    },
    rightLabel: {
      type: String,
      default: "On"
    },
    modelValue: Boolean
  },
  methods: {
    change: function() {
      this.$emit("update:modelValue", !this.modelValue);
    }
  }
}
</script>

<style scoped lang="scss">
.toggle {
  display: flex;
  align-items: center;
}

.input {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; /* added line */
  border: 0;
}

.label {
  display: inline-block;
  position: relative;
  width: 60px;
  height: 30px;
  border-radius: 30px;
  border: 1px solid rgba(color(black), 0.25);
  cursor: pointer;
  margin: 0 10px;

  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 3px;
    top: 1px;
    width: 26px;
    height: 26px;
    border-radius: 50px;
    background-color: rgba(color(black), 0.25);
    transition: all 0.2s ease;
  }
}

input:checked + label:before {
  transform: translateX(26px);
}

</style>