<template>
    <header class="header">Header</header>
    <div class="content">
      <button @click="isOpen=true">Open modal</button>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <router-view></router-view>
      <Modal :isOpen="isOpen" @close="isOpen=false" medium/>

      <FormGroup>
        <TextInput v-model="text" :type="'text'" id="txt" :label="'Your name'" />
      </FormGroup>
      <FormGroup>
        <Toggle v-model="checked" id="toggle" />
      </FormGroup>
      <Button :onClick="onClick">Submit</Button>
    </div>
    <footer class="footer">Footer</footer>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from "@/components/Modal";
import FormGroup from "@/components/form-controls/FormGroup";
import TextInput from "@/components/form-controls/TextInput";
import Toggle from "@/components/form-controls/Toggle";
import Button from "@/components/Button";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Modal,
    FormGroup,
    TextInput,
    Toggle,
    Button
  },
  data: () => {
    return {
      isOpen: false,
      text: "",
      checked: false
    }
  },
  methods: {
    onClick: function() {
      console.log("Click");
    }
  },
  mounted() {
    console.log(this.$store);
  }
}
</script>

<style lang="scss">
#app {
  @include flex(column, flex-start, stretch);
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100%;
}

.header {
  @include flex(row, center, center);
  height: 5rem;
  background-color: aliceblue;
}

.footer {
  @include flex(row, center, center);
  height: 7rem;
  background-color: antiquewhite;
  margin-top: auto;
}
</style>
