<template>
  <div class="container">
    <button @click="changMessage">ボタン</button>
    <input v-model="message" type="text" />
    <p>{{ $store.state.message }}</p>

    <button @click="counter">ボタン</button>
    <p>{{ $store.state.count }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    counter() {
      this.$store.commit('increment')
    },
    changMessage() {
      this.$store.commit('changMessage', this.message)
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
