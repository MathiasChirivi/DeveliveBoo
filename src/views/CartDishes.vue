<script>
export default {
  methods: {
    removeFromCart(item) {
      this.$store.dispatch('removeFromCart', item);
    },
    resetCart() {
      this.$store.dispatch('resetCart');
    },
    goToRestaurant() {
      this.$router.go(-1);
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cartItems;
    }
  },
  created() {
    this.$store.dispatch('loadCart');
  }
};
</script>

<template>
  <div>
    <h2>Riepilogo del Carrello:</h2>
    <ul>
      <li v-for="dish in cart" :key="dish.id">
        {{ dish.name }} - Quantità: {{ dish.quantity }} - {{ dish.price }}
        <button class="btn btn-danger" @click="removeFromCart(dish)">Rimuovi dal Carrello</button>
      </li>
    </ul>
    <button class="btn btn-danger" @click="resetCart()">Resetta Carrello</button>
    <button class="btn btn-primary" @click="goToRestaurant()">Torna al Ristorante</button>
  </div>
</template>

