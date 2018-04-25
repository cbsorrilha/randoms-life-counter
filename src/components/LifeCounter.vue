<template>
  <div>
    <button :id="counter.id" v-on:click="increment">+</button>
    <h1>{{ counter.count }}</h1>
    <button :id="counter.id" v-on:click="decrement">-</button>
  </div>
</template>

<script>

export default {
  name: 'LifeCounter',
  props: {
    counter: Object
  },
  methods: {
    increment: function (e) {
      this.$store.commit('increment', {id: e.target.id})
    },
    decrement: function (e) {
      this.$store.commit('decrement', {id: e.target.id})
    }
  }
}
</script>

<style>

</style>
