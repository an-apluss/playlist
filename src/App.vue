<template>
  <div id="app">
    <router-link v-bind:to="{ name: 'Home' }">Home</router-link>
    <router-link v-bind:to="{ name: 'ProductOne' }">Products</router-link>
    <router-link v-bind:to="{ name: 'ProductTwo' }">Sale Products</router-link>
    <router-view/>
  </div>
</template>

<script>
import ProductOne from '@/components/ProductOne'
import ProductTwo from '@/components/ProductTwo'
export default {
  name: 'App',
  components: {
    ProductOne,
    ProductTwo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
