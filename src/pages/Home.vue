<template>
  <h1 class="h1">This is Home page</h1>
  <div class="container">
    <InputButton btnText="Add" :value="text" :onChange="onChange" :onSubmit="onSubmit"/>
    <ul>
      <li class="li" v-for="(value, index) in items" :key="index" @click="removeItem(index)">{{ value }}</li>
    </ul>
    <div class="row">
      <div class="col w-33">1</div>
      <div class="col w-33">2</div>
      <div class="col w-33">3</div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import InputButton from "@/components/form-controls/InputButton";

export default {
  name: "Home",
  components: {
    InputButton
  },
  data: () => {
    return {
      text: ""
    }
  },
  vuex: {},
  computed: {
    ...mapGetters({
      items: "moduleA/items"
    })
  },
  methods: {
    onChange: function (evt) {
      this.text = evt.target.value;
    },
    onSubmit: function () {
      if (!this.text.trim()) {
        return null;
      }
      this.addItem(this.text);
      this.text = "";
    },

    ...mapActions({
      addItem: "moduleA/add",
      removeItem: "moduleA/remove"
    })
  },
  mounted() {
    console.log(9, this.$store);
  }
}
</script>

<style scoped lang="scss">

.li {
  cursor: pointer;

  &:hover {
    color: rgba(255, 127, 80, 0.8);
  }
}

</style>