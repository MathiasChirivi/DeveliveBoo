<script>
export default{
    name:"AppHeader",
    data(){
        return{
            navLinks: [
                { label: "Home", name: "Home" },
                { label: "Ristoranti", name: "Ristoranti" },
            ]
        }
    }
}
</script>

<template>
<nav class="navbar navbar-expand-lg mt-3">
  <div class="container">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
        <img src="https://cdn.worldvectorlogo.com/logos/deliveroo-logo.svg" alt="" class="imgDelive"></a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> -->
      </ul>
      <form class="d-flex gap-2">
        <a class="btn btn-light" href="http://localhost:8000/login">Login</a>
        <a class="btn btn-light" href="http://localhost:8000/register">Register</a>
      </form>
    </div>
  </div>
</nav>
<section id="home">
    <h1 class="h-primary">Welcome to Deliveboo</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod.</p>
    <a class="btn btn-light">Order Now</a>
</section>
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
    background-color: black;
    opacity: 0.6;
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    top: 0px;
    left: 0px;
}

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
    opacity: 0.9;
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