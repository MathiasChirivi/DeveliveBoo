<script>
export default {
    computed: {
        cart() {
            return this.$store.getters.cartItems;
        }
    }
};
</script>

<template>
  <div>
    <h2>Riepilogo del Carrello:</h2>
    <ul>
      <li v-for="dish in cart" :key="dish.id">
        {{ dish.name }} - {{ dish.description }} - {{ dish.price }}
      </li>
    </ul>
    <!-- Altri elementi del carrello come il totale -->
  </div>
</template>

