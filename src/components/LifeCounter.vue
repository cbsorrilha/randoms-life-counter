<template>
  <div v-bind:class="{ active: id % 2 != 0 }" class="life-counter">
    <button :id="counter.id" v-on:click="increment">+</button>
    <h1>{{ counter.count }}</h1>
    <button :id="counter.id" v-on:click="decrement">-</button>
  </div>
</template>

<script>

export default {
  name: 'LifeCounter',
  props: {
    counter: Object,
    id: String
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
  .life-counter {
    border: solid black 1px;
    border-radius: 8px;
    background-color: #333;
  }

  .active {
    transform: rotate(180deg)
  }

  .life-counter button{
    border: none;
    background-color: transparent;
    color: white;
    font-size: 32px;
    width: 100%;
  }
</style>
