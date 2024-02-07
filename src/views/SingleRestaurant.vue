<script>
import axios from "axios";

export default {
  data() {
    return {
      restaurant: null,
      typology: null, // Aggiunto typology
    };
  },
  methods: {
    getRestaurantDetails() {
      const restaurantId = this.$route.params.id;
      axios
        .get(`http://localhost:8000/api/restaurants/${restaurantId}`)
        .then((response) => {
          if (response.data.result !== null) {
            this.restaurant = response.data.result;
            // Aggiunto per assegnare la prima tipologia del ristorante a 'typology'
            this.typology =
              this.restaurant.typologies.length > 0
                ? this.restaurant.typologies[0]
                : null;
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
  <div class="colorContainer">
    <div class="container pt-5 pb-5">
      <div class="mb-3">Torna indietro</div>
      <div v-if="restaurant">
        <div class="d-flex container">
          <img class="imgRestaurant me-3" :src="restaurant.photo" alt="" />
          <div class="d-flex flex-column">
            <h2 class="NameRestaurant">{{ restaurant.name }}</h2>
            <p>25 - 45 min · {{ typology.name }}</p>
            <p>{{ restaurant.address }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>caricamento dati</p>
      </div>
    </div>
  </div>
  <div class="container-fluid mt-3">
    <h3>Menu ristorante</h3>
    <div class="me-4 ms-4">
      <div class="row d-flex justify-content-between">
        <div
          class="col-10 d-flex flex-wrap gap-3"
          v-if="restaurant && restaurant.dishes"
        >
          <div
            class="containerCard"
            v-for="dish in restaurant.dishes"
            :key="dish.id"
          >
            <div class="card bg-light-subtle mt-4">
              <img
                class="card-img-top"
                :src="
                  dish.photo ||
                  'https://theme-assets.getbento.com/sensei/c9f6d12.sensei/assets/images/catering-item-placeholder-704x520.png'
                "
                alt="Card image cap"
              />
              <div class="card-body">
                <div class="text-section">
                  <h5 class="card-title fw-bold">{{ dish.name }}</h5>
                  <p class="card-text textTruncate">
                    {{ dish.description }}
                  </p>
                </div>
                <div class="cta-section">
                  <div>{{ dish.price }}</div>
                  <a href="#" class="btn btn-dark">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-2">Carello</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.colorContainer {
  background-color: rgba(139, 139, 139, 0.1);
  opacity: 1;
  border-bottom: 1px solid #c9c9c9;
  border-top: 2px solid #000000;
}
.NameRestaurant {
  font-size: 30px;
}

.imgRestaurant {
  width: 500px;
  height: 300px;
  border-radius: 10px;
}

.card {
  max-width: 600px;
  flex-direction: row;
  background-color: #696969;
  border: 0;
  box-shadow: 0 7px 7px rgba(0, 0, 0, 0.18);
}
.card.dark {
  color: #fff;
}
.card.card.bg-light-subtle .card-title {
  color: dimgrey;
}

.textTruncate {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    overflow: hidden;
  }

.card img {
  max-width: 25%;
  margin: auto;
  padding: 0.5em;
  border-radius: 0.7em;
}
.card-body {
  display: flex;
  justify-content: space-between;
}
.text-section {
  max-width: 60%;
}
.cta-section {
  max-width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
}

.cta-section .btn {
  padding: 0.3em 0.5em;
  /* color: #696969; */
}
.card.bg-light-subtle .cta-section .btn {
  background-color: #898989;
  border-color: #898989;
}
</style>
