<template>
  <div id="app">
      <ResetButton />
    <div v-for="(counter, index) in $store.state.counters" v-bind:key="index">
      <LifeCounter :counter="counter" />
    </div>
  </div>
</template>

<script>
import LifeCounter from './components/LifeCounter.vue'
import ResetButton from './components/ResetButton.vue'

export default {
  name: 'app',
  components: {
    LifeCounter,
    ResetButton
  }
}
</script>

<style>
#app {
  font-family: 'Gugi', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
</style>
