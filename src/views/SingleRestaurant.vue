<script>
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      restaurant: null,
      typology: null,
      cartTotal: 0,
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
            this.typology =
              this.restaurant.typologies.length > 0
                ? this.restaurant.typologies[0]
                : null;
          } else {
            console.error("Invalid restaurant data:", response.data.result);
          }
        });
    },
    removeFromCart(item) {
      this.$store.dispatch("removeFromCart", item);
      this.calculateCartTotal(); // Aggiorna il totale dopo la rimozione
    },
    resetCart() {
      this.$store.dispatch("resetCart");
      this.calculateCartTotal(); // Aggiorna il totale dopo il reset
    },
    goToRestaurant() {
      this.$router.go(-1);
    },
    addToCart(dish) {
      dish.id = uuidv4();
      this.$store.dispatch("addToCart", dish);
      this.calculateCartTotal(); // Aggiorna il totale dopo l'aggiunta
    },
    addOrderToCart() {
      this.$router.push("/cart");
    },
    calculateCartTotal() {
      this.cartTotal = this.cart.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
    },
  },
  computed: {
    cart() {
      return this.$store.getters.cartItems;
    },
    cartIsEmpty() {
      return this.cart.length === 0;
    },
  },
  created() {
    this.$store.dispatch("loadCart");
    this.calculateCartTotal(); // Calcola il totale quando viene creato il componente
  },
  mounted() {
    this.getRestaurantDetails();
  },
};
</script>

<template>
  <div class="colorContainer">
    <div class="container pt-5 pb-5">
      <router-link to="/Ristoranti" class="mb-3 btn">
        <font-awesome-icon :icon="['fas', 'arrow-left']" />
        Torna indietro
      </router-link>
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
          class="col-9 d-flex flex-wrap gap-3"
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
                  <a class="btn btn-dark" @click="addToCart(dish)">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 mt-3">
          <div class="carello flex-column align-items-center">
            <div
              class="d-flex flex-column justify-content-center align-items-center"
              v-if="cartIsEmpty"
            >
              <font-awesome-icon :icon="['fas', 'basket-shopping']" />
              <p class="mt-2">Il carello è vuoto</p>
            </div>

            <div class="w-100 payFinish" v-if="!cartIsEmpty">
              <h5 class="mb-4">Il tuo ordine</h5>
              <div class="borderFinsh">
                <div
                  class="cart-item d-flex align-items-center justify-content-between"
                  v-for="dish in cart"
                  :key="dish.id"
                >
                <div class="d-flex align-items-center">
                    
                  <div class="d-flex align-items-center widthName">
                    <p class="m-0 numberColor">{{ dish.quantity }}</p>
                    <font-awesome-icon
                    class="d-flex me-2 ms-2"
                      @click="removeFromCart(dish)"
                      :icon="['fas', 'trash']"
                      style="color: #ff0000"
                    />
                    <p class="m-0 ms-2">{{ dish.name }}</p>
                  </div>
                  
                  </div>
                  <div class="d-flex ">
                    <p class="m-0">{{ dish.totalPrice }} €</p>
                  </div>
                </div>
              </div>

              <!-- <p class="mt-3">Prezzo di consegna : 10 €</p> -->
              <div
                class="d-flex align-items-center justify-content-between mt-3"
              >
                <p class="m-0"><strong>Totale:</strong></p>
                <p class="m-0">
                  <strong>{{ cartTotal }} €</strong>
                </p>
              </div>
              <!-- <div class="mt-4">
                <button class="btn btn-danger" @click="resetCart()">
                  Resetta Carrello
                </button>
              </div> -->
            </div>
            <div class="PagamentoCarello">
              <button
                type="button"
                class="btn btn-secondary"
                :disabled="cartIsEmpty"
              >
                Vai al pagamento
              </button>
            </div>
          </div>
        </div>
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

.carello .cart-item {
  height: 40px;
  overflow: auto;
  margin-bottom: 5px;
}

.borderFinsh {
  border-bottom: 1px solid black;
}

.carello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 30px;
  /*height: 400px; /*Imposta un'altezza massima */
  overflow-y: auto; /* Aggiungi uno scroll verticale se necessario */
  background-color: #f3f3f3;
  box-shadow: 0 7px 7px rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  padding: 30px;
}

.PagamentoCarello {
  margin-top: 20px;
}

.numberColor {
  align-items: center;
  background-color: #f9cb9d5c;
  border-radius: 50rem;
  display: flex;
  flex-shrink: 0;
  font-weight: 700;
  height: 24px;
  justify-content: center;
  white-space: nowrap;
  width: 24px;
}

</style>
