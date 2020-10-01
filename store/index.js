export const state = () => ({
  message: 'Hello World',
  count: 0,
})

export const mutations = {
  increment(state) {
    state.count += 2
  },
  changMessage(state, message) {
    state.message = message
  },
}
