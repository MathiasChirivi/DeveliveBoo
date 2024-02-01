<script>
import AppHome from '../components/AppHome.vue';

export default {
    name: "AppView",
    data() {
        return {
        
        }
    },
    components: {
        AppHome,
    },
}
</script>

<template>
    <section id="home">
        <h1 class="h-primary">Welcome to Deliveboo</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
        <a class="btn btn-light">Order Now</a>
    </section>
    <AppHome></AppHome>
</template>

<style>
/* Home Section */
#home{
    display: flex;
    flex-direction: column;
    padding: 3px 200px;
    justify-content: center;
    align-items: center;
    height: 500px;
    position: relative;
}

#home::before{
    content: "";
    background: linear-gradient(rgba(0, 0, 0, 0.9),
    rgba(0, 0, 0, 0.6)), url("https://media.istockphoto.com/id/1191080960/photo/traditional-turkish-breakfast-and-people-taking-various-food-wide-composition.jpg?s=612x612&w=0&k=20&c=PP5ejMisEwzcLWrNmJ8iPPm_u-4P6rOWHEDpBPL2n7Q=") no-repeat center center/cover;
    opacity: 1;
    position: absolute;
    height: 600px;
    width: 100%;
    z-index: -1;
    top: -85px;
    left: 0px;
}

#home h1{
    color: floralwhite;
    text-align: center;
    font-family: 'Baloo Bhai 2', cursive;
}

#home p{
    color: floralwhite;
    text-align: center;
    font-size: 1.5rem;
    font-family: 'Baloo Bhai 2', cursive;
}

/* Services Section */
#services{
    margin: 34px;
    display: flex;
}

#services .box{
    border: 2px solid black;
    padding: 10px;
    margin: 3px 10px;
    border-radius: 40px;
    background-color: rgb(235, 227, 227);
}

#services .box img{
    height: 160px;
    margin: auto;
    display: block;
}

#services .box p{
    font-family: 'Baloo Bhai 2', cursive;
    text-align: justify;
}
</style>
