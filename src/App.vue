<template>
    <header class="header">Header</header>
    <div class="content">
      <button @click="isOpen=true">Open modal</button>
      <HelloWorld msg="Welcome to Your Vue.js App"/>
      <router-view></router-view>
      <Modal :isOpen="isOpen" @close="isOpen=false" medium/>
    </div>
    <footer class="footer">Footer</footer>
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
  },
  mounted() {
    console.log(this.$store);
  }
}
</script>

<style lang="scss">
#app {
  @include flex(column, flex-start, stretch);
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
