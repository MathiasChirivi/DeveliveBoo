<script>
import axios from "axios";

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
          console.log("Restaurant details:", response.data);

          if (response.data.result && response.data.result.name !== null) {
            this.restaurant = response.data.result;
          } else {
            console.error("Invalid restaurant data:", response.data.result);
          }
        });
    },
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
      <ul>
        <li v-for="dish in restaurant.dishes" :key="dish.id">
          {{ dish.name }} - {{ dish.description }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>caricamento dati</p>
    </div>
  </div>
</template>
