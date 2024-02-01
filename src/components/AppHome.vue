<script></script>
<template>
  <div class="section mt-5" id="how-it-works">
    <h2 class="secondary mb-4">How It Works</h2>

    <div class="container d-flex">
      <div class="box">
        <h3>Easy Order</h3>
        <font-awesome-icon :icon="['fas', 'clock']" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          non?
        </p>
      </div>

      <div class="box active">
        <h3>Best Quality</h3>
        <font-awesome-icon :icon="['fas', 'trophy']" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          non?
        </p>
      </div>

      <div class="box">
        <h3>Fast Delivery</h3>
        <font-awesome-icon :icon="['fas', 'check-circle']" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
          non?
        </p>
      </div>
    </div>
  </div>

  <!-- About -->
  <div class="container marginAbout p-5" id="about">
    <div class="d-flex align-items-center justify-content-center">
      <div class="w-50">
        <img class="imageRounded"
          src="https://a.cdn-hotels.com/gdcs/production0/d1513/35c1c89e-408c-4449-9abe-f109068f40c0.jpg?impolicy=fcrop&w=800&h=533&q=medium"
          alt=""
        />
      </div>
      <div class="w-50">
        <div class="secondary">About Our Restaurant</div>
        <h2 class="primary">150+</h2>

        <h3 class="tertiary">Our Delicious Food</h3>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia itaque
          saepe id hic rem doloribus quas esse voluptatibus eius sequi, possimus
          maxime dolores tempore facilis fugit porro mollitia, est consequuntur.
        </p>

        <a href="#menu" class="btn btn-info">Explore Menu</a>
      </div>
    </div>
  </div>
  <!-- End About -->
</template>

<style>
#how-it-works {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}

.box {
  border: 1px solid #b2b2b2;
  padding: 25px 5px;
  margin: 0 10px;
  border-radius: 8px;
  font-size: 18px;
  transition: 0.3s ease;
  cursor: pointer;
}

.box ion-icon {
  font-size: 35px;
  color: white;
  margin: 15px 0;
}

.box.active,
.box:hover {
  color: #fff;
  border-color: white;
  background: black;
}

.box.active ion-icon,
.box:hover ion-icon {
  color: #fff;
}

#about .visual img,
#app .visual img {
  margin-right: auto;
}

.imageRounded{
  width: 500px;
  height: 500px;
  border-radius: 50%;
  object-fit: cover;
}

.marginAbout{
  margin-top: 100px;
}

.secondary{
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 20px;
}

.primary {
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 20px;
}

.tertiary {
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
}
</style>
