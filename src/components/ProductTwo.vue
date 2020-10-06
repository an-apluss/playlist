<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(salesProduct, i) in salesProducts" :key="i">
        <span>{{salesProduct.name}}</span>
        <span>{{salesProduct.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ProductTwo',
  data () {
    return {
      msg: 'Excellent'
    }
  },

  computed: {
    ...mapGetters([
      'salesProducts'
    ])
    // salesProducts() {
    //   return this.$store.getters.salesProducts
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
