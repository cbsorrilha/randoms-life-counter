<template>
  <div id="app">
      <ResetButton />
    <div class="counter-list" v-for="(counter, index) in $store.state.counters" v-bind:key="index">
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
body {
  margin: 0;
}
#app {
  background-color: #000;
  font-family: 'Gugi', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
