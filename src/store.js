import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import { v4 as uuidv4 } from 'uuid';

const store = createStore({
  state: {
    cart: [] 
  },
  mutations: {
    addToCart(state, dish) {
      const existingDish = state.cart.find(item => item.id === dish.id);
      if (existingDish) {
        // Aggiorna la quantità del piatto esistente nel carrello
        existingDish.quantity++;
      } else {
        // Controlla se un piatto con lo stesso nome è già nel carrello
        const sameNamedDish = state.cart.find(item => item.name === dish.name);
        if (sameNamedDish) {
          // Aggiorna la quantità del piatto esistente con lo stesso nome nel carrello
          sameNamedDish.quantity++;
        } else {
          // Se il piatto non esiste nel carrello, aggiungilo normalmente
          dish.id = uuidv4();
          dish.quantity = 1;
          state.cart.push(dish);
        }
      }
    },
    setCart(state, cart) {
      state.cart = cart;
    },
    removeFromCart(state, dish) {
      const filteredCart = state.cart.filter(cartDish => cartDish.id !== dish.id);
      state.cart = filteredCart;
    },
    resetCart(state) {
      state.cart = [];
    }
  },
  actions: {
    addToCart({ commit }, dish) {
      commit('addToCart', dish); 
    },
    removeFromCart({ commit, state }, dish) {
     
      const filteredCart = state.cart.filter(cartDish => cartDish.id !== dish.id);
      commit('setCart', filteredCart); 
    },
    resetCart({ commit }) {
      commit('resetCart'); 
    },
  },
  getters: {
    cartItems(state) {
      return state.cart;
    }
  },
  plugins: [createPersistedState()]
});

export default store;