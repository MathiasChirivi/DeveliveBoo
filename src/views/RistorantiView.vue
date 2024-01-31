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
    };
  },
  methods: {
    getRestaurants() {
      axios
        .get("http://localhost:8000/api/restaurants", {
          params: {
            page: this.page,
            q: this.searchString,
          },
        })
        .then((response) => {
          console.log("Response data:", response.data);
          this.arrRestaurants = response.data.results.data;
        })
        .catch((error) => {
          console.error("Error fetching restaurants:", error);
        });
    },
    getTypologies() {
      axios
        .get("http://localhost:8000/api/typologies", {})
        .then((response) => {
          console.log("Response data:", response.data);
          this.arrTypologies = response.data.results;
        })
        .catch((error) => {
          console.error("Error fetching typologies:", error);
        });
    },
  },
  mounted() {
    this.getRestaurants();
    this.getTypologies();
  },
};
</script>

<template>
  <main>
    <h1>sono i Ristoranti</h1>
    <div v-if="arrTypologies.length > 0">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <label for="typologySelect">Seleziona Tipologia:</label>
            <select
              v-model="selectedTypology"
              id="typologySelect"
              class="form-select mb-5"
            >
              <option value="" disabled>Seleziona una tipologia</option>
              <option
                v-for="typology in arrTypologies"
                :key="typology.id"
                :value="typology.id"
              >
                {{ typology.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row" v-if="arrRestaurants.length > 0">
        <div
          class="col-md-4 mb-4"
          v-for="restaurant in arrRestaurants"
          :key="restaurant.id"
        >
          <div class="card h-100">
            <div class="h-100">
              <img
                :src="restaurant.photo"
                class="card-img-top"
                alt="Restaurant Photo"
                style="height: 300px"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ restaurant.name }}</h5>
              <p class="card-text">{{ restaurant.address }}</p>
              <h6>Tipologie:</h6>
              <ul class="list-unstyled">
                <li
                  v-for="typology in restaurant.typologies"
                  :key="typology.id"
                >
                  {{ typology.name }}
                </li>
              </ul>
              <h6>Piatti:</h6>
              <ul class="list-unstyled">
                <li v-for="dish in restaurant.dishes" :key="dish.id">
                  {{ dish.name }} - {{ dish.description }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p v-else>Nessun ristorante trovato</p>
    </div>
  </main>
</template>
