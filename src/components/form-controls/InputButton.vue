<template>

  <div class="input-button">
    <div class="input">
      <TextInput :id="$attrs.id" :onChange="onChange" :value="value"/>
    </div>
    <Button class="btn" :onClick="onSubmit">{{ btnText }}</Button>
  </div>
</template>

<script>
import TextInput from "@/components/form-controls/TextInput";
import Button from "@/components/Button";

export default {
  name: "InputButton",
  components: {
    Button,
    TextInput
  },
  props: {
    btnText: String,
    value: String,
    onChange: Function,
    onSubmit: Function
  }
}
</script>

<style scoped lang="scss">
.input-button {
  @include flex(row, flex-start, flex-end);
}

.input {
  flex: 1;
  overflow: hidden;
}

.btn {
  height: 3rem;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

</style>