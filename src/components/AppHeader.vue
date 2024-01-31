<script>
import { useRoute, RouterLink } from 'vue-router';

export default {
  name: "AppHeader",
  data() {
    return {
      navLinks: [
        { label: "home", name: "home" },
        { label: "Ristoranti", name: "Ristoranti" },
      ],
      showSearchBar: false,
    };
  },
  components: { RouterLink },
  setup() {
    const route = useRoute();
    return {
      currentRoute: route.name,
    };
  },
};
</script>



<template>
    <nav class="navbar navbar-expand-lg pt-3 pb-3">
       <div class="container">
         <button
           class="navbar-toggler"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#navbarTogglerDemo03"
           aria-controls="navbarTogglerDemo03"
           aria-expanded="false"
           aria-label="Toggle navigation"
         >
           <span class="navbar-toggler-icon"></span>
         </button>
         <a class="navbar-brand" href="#">
           <img
             src="https://cdn.worldvectorlogo.com/logos/deliveroo-logo.svg"
             alt=""
             class="imgDelive"
           />
         </a>
         <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
           <ul class="navbar-nav me-auto mb-2 mb-lg-0">
             <li class="nav-item" v-for="navLink in navLinks" :key="navLink.name">
               <router-link
                 class="nav-link active text-white"
                 aria-current="page"
                 :to="{ name: navLink.name }"
               >
                 {{ navLink.label }}
               </router-link>
             </li>
           </ul>
           <div v-if="currentRoute === 'Ristoranti'" class="search-bar">
             <input type="text" placeholder="Search..">
           </div>
           <form class="d-flex gap-2">
             <a class="btn btn-light" href="http://localhost:8000/login">Login</a>
             <a class="btn btn-light" href="http://localhost:8000/register">Register</a>
           </form>
         </div>
       </div>
     </nav>
 </template>

<style>
.imgDelive{
    width: 100px;
    height: 32px;
}

/* Navigation Bar */
nav{
    position: sticky;
    display: flex;
    align-items: center;
    top: 0px;
}

.navbar::before{
    content: "";
    background-color: black !important;
    opacity: 0.6;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    top: 0px;
    left: 0px;
}

bg-white {
  background-color: white !important;
  color: black; /* Aggiungi questo se vuoi cambiare anche il colore del testo */
}
</style>