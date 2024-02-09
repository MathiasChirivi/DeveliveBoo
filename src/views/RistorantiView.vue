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
      selectedTypology: "",
    };
  },
  computed: {
    filteredRestaurants() {
      if (this.selectedTypology === "") {
        return this.arrRestaurants;
      } else {
        return this.arrRestaurants.filter((restaurant) =>
          restaurant.typologies.some(
            (typology) => typology.id === this.selectedTypology
          )
        );
      }
    },
  },
  methods: {
    resetFilters() {
      this.selectedTypology = "";
    },
    getRestaurants() {
      axios
        .get("http://localhost:8000/api/restaurants", {
          params: {
            page: this.page,
            q: this.searchString,
          },
        })
        .then((response) => {
          // console.log("Response data:", response.data);
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
          // console.log("Response data:", response.data);
          this.arrTypologies = response.data.results;
        })
        .catch((error) => {
          console.error("Error fetching typologies:", error);
        });
    },
    filterByTypology(typologyId) {
      this.selectedTypology = typologyId;
    },
    showRestaurantDetails(restaurantId) {
      this.$router.push({
        name: "SingleRestaurant",
        params: { id: restaurantId },
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
    <div class="container">
      <div v-if="arrTypologies.length > 0">
        <div
          class="col-12 d-flex flex-wrap gap-1 my-2 align-center justify-content-center"
        >
          <div
            class="card"
            style="width: 120px; height: 135px"
            v-for="typology in arrTypologies"
            :key="typology.id"
            @click="filterByTypology(typology.id)"
          >
            <img
              :src="typology.image"
              class="card-img-top"
              alt="Typology Image"
              style="height: 60px"
            />
            <div class="card-body">
              <p class="card-title f-1">{{ typology.name }}</p>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row"></div>
          <div class="row mt-3" v-if="selectedTypology !== ''">
            <div class="col-12">
              <button @click="resetFilters" class="btn mb-4">
                <font-awesome-icon :icon="['fas', 'arrow-left']" />Tutti i
                ristoranti
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row" v-if="filteredRestaurants.length > 0">
        <div
          class="col-md-4 mb-4"
          v-for="restaurant in filteredRestaurants"
          :key="restaurant.id"
        >
          <div class="card h-100" @click="showRestaurantDetails(restaurant.id)">
            <div class="h-100">
              <img
                :src="
                  restaurant.photo
                    ? restaurant.photo
                    : 'https://cwdaust.com.au/wpress/wp-content/uploads/2015/04/placeholder-restaurant.png'
                "
                class="card-img-top"
                alt="Restaurant Photo"
                style="height: 300px"
              />
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ restaurant.name }}</h5>
              <p class="card-text">{{ restaurant.address }}</p>
              <!-- <h6>Tipologie:</h6>
            <ul class="list-unstyled">
              <li v-for="typology in restaurant.typologies" :key="typology.id">{{ typology.name }}</li>
            </ul> -->
              <!-- <h6>Piatti:</h6>
            <ul class="list-unstyled">
              <li v-for="dish in restaurant.dishes" :key="dish.id">{{ dish.name }} - {{ dish.description }}</li>
            </ul> -->
            </div>
          </div>
        </div>
      </div>
      <p v-else>Nessun ristorante trovato</p>
    </div>
  </main>
</template>
