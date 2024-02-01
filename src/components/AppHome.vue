<script></script>
<template>
    <div class="section mt-5" id="how-it-works">
      <h2 class="secondary mb-4">How It Works</h2>

      <div class="container d-flex">
        <div class="box">
          <h3>Easy Order</h3>
          <font-awesome-icon :icon="['fa', 'hourglass-end']" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            non?
          </p>
        </div>

        <div class="box active">
          <h3>Best Quality</h3>
          <ion-icon name="trophy-outline"></ion-icon>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            non?
          </p>
        </div>

        <div class="box">
          <h3>Fast Delivery</h3>
          <ion-icon name="checkmark-done-circle-outline"></ion-icon>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            non?
          </p>
        </div>
      </div>
    </div>
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
</style>