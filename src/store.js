import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  state: {
    cart: [] 
  },
  mutations: {
    addToCart(state, dish) {
      // Verifica se il piatto appartiene al ristorante corrente
      if (state.currentRestaurantId === dish.restaurant_id) {
        const existingDish = state.cart.find(item => item.id === dish.id);
        if (existingDish) {
          // Aggiorna la quantità del piatto esistente nel carrello
          existingDish.quantity++;
          existingDish.totalPrice = existingDish.quantity * existingDish.price;
        } else {
          // Controlla se un piatto con lo stesso nome è già nel carrello
          const sameNamedDish = state.cart.find(item => item.name === dish.name);
          if (sameNamedDish) {
            // Aggiorna la quantità del piatto esistente con lo stesso nome nel carrello
            sameNamedDish.quantity++;
            sameNamedDish.totalPrice = sameNamedDish.quantity * sameNamedDish.price;
          } else {
            // Se il piatto non esiste nel carrello, aggiungilo normalmente
            dish.quantity = 1;
            dish.totalPrice = dish.price; 
            state.cart.push(dish);
          }
        } 
        state.cart.forEach(item => {
          item.totalPrice = item.quantity * item.price;
        });
      } else {
        const confirmNewCart = window.confirm('Il piatto selezionato non appartiene al ristorante corrente. Vuoi creare un nuovo carrello?');
        if (confirmNewCart) {
        // Se il piatto non appartiene al ristorante corrente, resetta il carrello e aggiungi il nuovo piatto
        state.cart = [];
        dish.quantity = 1;
        dish.totalPrice = dish.price;
        state.cart.push(dish);
        state.currentRestaurantId = dish.restaurant_id;
        } else {
          // Non aggiungere il piatto al carrello
          return;
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