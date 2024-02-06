import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: [] // Array per tenere traccia dei piatti nel carrello
  },
  mutations: {
    addToCart(state, dish) {
      state.cart.push(dish); // Aggiungi il piatto al carrello
    }
  },
  actions: {
    addToCart({ commit }, dish) {
      commit('addToCart', dish); // Chiama la mutazione per aggiungere il piatto al carrello
    }
  },
  getters: {
    cartItems(state) {
      return state.cart;
    }
  }
});

export default store;