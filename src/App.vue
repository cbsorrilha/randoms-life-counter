<template>
  <div id="app">
    <div v-for="(counter, index) in $store.state.counters" v-bind:key="index">
      <LifeCounter :state="$store.state" :counter="counter" />
    </div>
  </div>
</template>

<script>
import LifeCounter from './components/LifeCounter.vue'

export default {
  name: 'app',
  components: {
    LifeCounter
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
