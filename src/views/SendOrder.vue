<script>
import axios from 'axios';

export default {
  data() {
    return {
      formData: {
        name: '',
        lastname: '',
        address: '',
        phone: '',
        totalprice: ''
      }
    };
  },
  methods: {
    async submitOrder() {
      try {
        if (this.cartIsEmpty) {
          console.error('Errore durante l\'invio dell\'ordine: Il carrello è vuoto');
          return;
        }
        const orderData = {
          name: this.formData.name,
          lastname: this.formData.lastname,
          address: this.formData.address,
          phone: this.formData.phone,
          totalprice: this.formData.totalprice,
          dishes: this.cart.map(item => ({ dish_id: item.id, quantity: item.quantity }))
        };

        console.log('Contenuto di orderData:', orderData);

        const response = await axios.post('http://localhost:8000/api/orders', orderData);

        console.log('Ordine inviato con successo', response.data);
       
      }  catch (error) {
        console.error('Errore durante l\'invio dell\'ordine:', error);
        
      }
    }
  },
  computed: {
    cart() {
      return this.$store.getters.cartItems;
    },
    cartIsEmpty() {
      return this.cart.length === 0;
    }
  }
}
</script>

<template>
  <div class="d-flex justify-content-center">

     <!-- Visualizzazione dei piatti nel carrello -->
     <div v-if="!cartIsEmpty">
        <h3>Carrello:</h3>
        <div v-for="item in cart" :key="item.id">
          <p>{{ item.name }} - Quantità: {{ item.quantity }}</p>
        </div>
      </div>
    <form @submit.prevent="submitOrder" class="d-flex flex-column w-25">
      <label>Name</label>
      <input type="text" id="name" name="name" v-model="formData.name">
      <label>Lastname</label>
      <input type="text" id="lastname" name="lastname" v-model="formData.lastname">
      <label>Address</label>
      <input type="text" id="address" name="address" v-model="formData.address">
      <label>Phone</label>
      <input type="text" id="phone" name="phone" v-model="formData.phone">
      <label>Totalprice</label>
      <input type="text" id="totalprice" name="totalprice" v-model="formData.totalprice">

      <button type="submit" class="mt-2">invia</button>
    </form>
  </div>
</template>

<style>

</style>