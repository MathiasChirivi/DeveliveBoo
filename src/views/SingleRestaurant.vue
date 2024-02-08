<script>
  import axios from "axios";
  import { v4 as uuidv4 } from 'uuid';

  export default {
    data() {
      return {
        restaurant: null,
      };
    },
    methods: {
      getRestaurantDetails() {
        const restaurantId = this.$route.params.id;
        axios
          .get(`http://localhost:8000/api/restaurants/${restaurantId}`)
          .then((response) => {
            // console.log("Restaurant details:", response.data);
            if (response.data.result !== null) {
              this.restaurant = response.data.result;
            } else {
              console.error("Invalid restaurant data:", response.data.result);
            }
          });
      },
      addToCart(dish) {
        dish.id = uuidv4();
        this.$store.dispatch('addToCart', dish);
      },
      addOrderToCart() {
        this.$router.push('/cart');
      }
    },
    mounted() {
      this.getRestaurantDetails();
    },
  };
</script>
<template>
  <div class="container">
    <div v-if="restaurant">
      <h2>{{ restaurant.name }}</h2>
      <p>{{ restaurant.address }}</p>
      <h3>Tipologie:</h3>
      <ul>
        <li v-for="typology in restaurant.typologies" :key="typology.id">
          {{ typology.name }}
        </li>
      </ul>
      <h3>Piatti:</h3>
     
      <div class="row d-flex">
        <div class="col-3" v-for="dish in restaurant.dishes" :key="dish.id">
          <div class="card h-100">
            <img
              :src="dish.photo"
              class="card-img-top"
              alt="Dish Photo"
              style="height: 300px"
            />
            <div class="card-body">
              <h6>{{ dish.name }}</h6>
              <p>{{ dish.description }}</p>
            </div>
            <div class="px-3 pb-3">
              <button class="btn btn-primary" @click="addToCart(dish)">aggiungi</button> 
            </div>
            <div class="px-3 pb-3">
              <button class="btn btn-success" @click="addOrderToCart()">Conferma ordine</button>
            </div>
          </div>
        </div>
      </div>
      <a href="http://localhost:5174/Ristoranti">Torna ai ristoranti</a>

    </div>
    <div v-else>
      <p>caricamento dati</p>
    </div>
  </div>
</template>
