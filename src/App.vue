<template>
  <header class="header">Header</header>
  <div class="content">

    <router-view></router-view>
    <!--
    <button @click="isOpen=true">Open modal</button>
    <Modal :isOpen="isOpen" @close="isOpen=false" medium/>

          <FormGroup>
            <TextInput v-model="text" :type="'text'" id="txt" :label="'Your name'" />
          </FormGroup>
          <FormGroup>
            <Toggle v-model="checked" id="toggle" />
          </FormGroup>
          <Button :onClick="onClick">Submit</Button>-->
  </div>
  <footer class="footer">Footer</footer>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => {
    return {
      isOpen: false,
      text: "",
      checked: false
    }
  },
  methods: {
    onClick: function () {
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
