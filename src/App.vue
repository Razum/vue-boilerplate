<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <h1 class="blue">this is h1</h1>
  <button @click="isOpen=true">Open modal</button>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <Modal :isOpen="isOpen" @close="isOpen=false" medium/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Modal from "@/components/Modal";

export default {
  name: 'App',
  components: {
    HelloWorld,
    Modal
  },
  data: () => {
    return {
      isOpen: false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
