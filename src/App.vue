<script>
import AppHeader from './components/AppHeader.vue';


export default {
  name: "App",
  data(){
    return{

    }
  },
  components: {
    AppHeader,
}
}
</script>

<template>
  <header>
    <AppHeader />
  </header>
  <main>
    <RouterView />
  </main>
  
</template>

<style>

</style>
