<template>
  <div class="hello">
    <h2>{{msg}}</h2>
    <ul>
      <li v-for="(product, index) in products" :key="index">
        <span>{{product.name}}</span>
        <span>{{product.price}}</span>
      </li>
    </ul>
    <button type="button" name="button" @click="reducePrices(4)">Reduce Prices by 1</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'ProductOne',
  data () {
    return {
      msg: 'Famous'
    }
  },

  computed: {
    products() {
      return this.$store.state.products;
    }
  },

  methods: {
    ...mapActions([
      'reducePrices'
    ])
    // reducePrices(amount) {
    //   this.$store.dispatch('reducePrices', amount);
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
