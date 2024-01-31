<script>
import axios from "axios";

export default {
  data() {
    return {
      arrRestaurants: [],
      arrTypologies: [],
      searchString: "",
      page: 1,
      totalPages: 0,
    }
  },
  methods: {
    getRestaurants(){
      axios.get("http://localhost:8000/api/restaurants",{  
      params: {
          page: this.page,
          q: this.searchString,
        }
      })
      .then(response => {
        console.log('Response data:', response.data);
        this.arrRestaurants = response.data.results.data;
      })
      .catch(error => {
        console.error('Error fetching restaurants:', error);
      });
    }
  },
  mounted() {
    this.getRestaurants();
  },
}
  
</script>

<template>
  <!-- <main>
    <h1>sono la home</h1>
    <div class="row" v-if="arrRestaurants.length > 0">
      <div class="col-md-4 mb-4" v-for="restaurant in arrRestaurants" :key="restaurant.id">
        <div class="card h-100">
          <div class="h-100">
            <img :src="restaurant.photo" class="card-img-top" alt="Restaurant Photo" style="height: 300px;">
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ restaurant.name }}</h5>
            <p class="card-text">{{ restaurant.address }}</p>
            <h6>Tipologie:</h6>
            <ul class="list-unstyled">
              <li v-for="typology in restaurant.typologies" :key="typology.id">{{ typology.name }}</li>
            </ul>
            <h6>Piatti:</h6>
            <ul class="list-unstyled">
              <li v-for="dish in restaurant.dishes" :key="dish.id">{{ dish.name }} - {{ dish.description }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <p v-else>Nessun ristorante trovato</p>
  </main> -->
</template>
