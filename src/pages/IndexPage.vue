<template>
  <template v-if="loading">
    <div class="card-container q-pa-md row items-start justify-center">
      <!-- <span class="loader" /> -->
      <q-card v-for="index in 3" :key="index" class="card-product full-width">
        <q-skeleton height="200px" square />

        <q-item>
          <q-item-section>
            <q-item-label>
              <q-skeleton type="text" />
            </q-item-label>
            <q-item-label caption>
              <q-skeleton type="text" />
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </template>
  <template v-else>
    <div class="card-container q-pa-md row items-start justify-center">
      <CardProduct
        v-for="product in productData"
        :key="product.id"
        :product="product"
      />

      <!-- <router-link :to="{ name: 'item' }"> suhas </router-link> -->
    </div>
  </template>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { useProductsStore } from 'src/stores/productsStore';
import { storeToRefs } from 'pinia';
import CardProduct from 'src/components/Card/CardProduct.vue';

const products = useProductsStore();
const { productData } = storeToRefs(products);
const loading = ref<boolean>(true);

onMounted(async () => {
  try {
    await products.getProducts();
  } catch (error) {
    console.warn(error);
  } finally {
    loading.value = false;
  }
});
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  gap: 1rem;
  // flex-direction: row;
}
.card-product {
  // min-width: 300px;
  max-width: 430px;
  border-radius: 1rem;
}
.center {
  height: 100vh;
  display: flex;
  place-items: center;
}

//

/* HTML: <div class="loader"></div> */
.loader2 {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 8px solid #d1914b;
  box-sizing: border-box;
  --c: no-repeat radial-gradient(farthest-side, #d64123 94%, #0000);
  --b: no-repeat radial-gradient(farthest-side, #000 94%, #0000);
  background: var(--c) 11px 15px, var(--b) 6px 15px, var(--c) 35px 23px,
    var(--b) 29px 15px, var(--c) 11px 46px, var(--b) 11px 34px,
    var(--c) 36px 0px, var(--b) 50px 31px, var(--c) 47px 43px,
    var(--b) 31px 48px, #f6d353;
  background-size: 15px 15px, 6px 6px;
  animation: l4 3s infinite;
}
@keyframes l4 {
  0% {
    -webkit-mask: conic-gradient(#0000 0, #000 0);
  }
  16.67% {
    -webkit-mask: conic-gradient(#0000 60deg, #000 0);
  }
  33.33% {
    -webkit-mask: conic-gradient(#0000 120deg, #000 0);
  }
  50% {
    -webkit-mask: conic-gradient(#0000 180deg, #000 0);
  }
  66.67% {
    -webkit-mask: conic-gradient(#0000 240deg, #000 0);
  }
  83.33% {
    -webkit-mask: conic-gradient(#0000 300deg, #000 0);
  }
  100% {
    -webkit-mask: conic-gradient(#0000 360deg, #000 0);
  }
}
//
.loader {
  position: relative;
  width: 120px;
  height: 14px;
  border-radius: 0 0 15px 15px;
  background-color: #3e494d;
  box-shadow: 0 -1px 4px #5d6063 inset;
  animation: panex 0.5s linear alternate infinite;
  transform-origin: 170px 0;
  z-index: 10;
  perspective: 300px;
  right: 2rem;
}
.loader::before {
  content: '';
  position: absolute;
  left: calc(100% - 2px);
  top: 0;
  z-index: -2;
  height: 10px;
  width: 70px;
  border-radius: 0 4px 4px 0;
  background-repeat: no-repeat;
  background-image: linear-gradient(#6c4924, #4b2d21),
    linear-gradient(#4d5457 24px, transparent 0),
    linear-gradient(#9f9e9e 24px, transparent 0);
  background-size: 50px 10px, 4px 8px, 24px 4px;
  background-position: right center, 17px center, 0px center;
}
.loader::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  z-index: -2;
  transform: translate(-50%, -20px) rotate3d(75, -2, 3, 78deg);
  width: 55px;
  height: 53px;
  background: #fff;
  background-image: radial-gradient(circle 3px, #fff6 90%, transparent 10%),
    radial-gradient(circle 12px, #ffc400 90%, transparent 10%),
    radial-gradient(circle 12px, #ffae00 100%, transparent 0);
  background-repeat: no-repeat;
  background-position: -4px -6px, -2px -2px, -1px -1px;
  box-shadow: -2px -3px #0002 inset, 0 0 4px #0003 inset;
  border-radius: 47% 36% 50% 50% / 49% 45% 42% 44%;
  animation: eggRst 1s ease-out infinite;
}

@keyframes eggRst {
  0%,
  100% {
    transform: translate(-50%, -20px) rotate3d(90, 0, 0, 90deg);
    opacity: 0;
  }
  10%,
  90% {
    transform: translate(-50%, -30px) rotate3d(90, 0, 0, 90deg);
    opacity: 1;
  }
  25% {
    transform: translate(-50%, -40px) rotate3d(85, 17, 2, 70deg);
  }
  75% {
    transform: translate(-50%, -40px) rotate3d(75, -3, 2, 70deg);
  }
  50% {
    transform: translate(-55%, -50px) rotate3d(75, -8, 3, 50deg);
  }
}
@keyframes panex {
  0% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(10deg);
  }
}
</style>
