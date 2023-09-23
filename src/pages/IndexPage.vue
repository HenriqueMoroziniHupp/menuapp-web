<template>
  <div class="card-container q-pa-md row items-start justify-center">
    <CardProduct
      v-for="product in productData"
      :key="product.id"
      :product="product"
    />

    <!-- <router-link :to="{ name: 'item' }"> suhas </router-link> -->

    <!-- <q-card
      v-for="product in productData"
      :key="product.id"
      class="my-card shadow-5 full-width"
    >
      <q-img :src="product.image_url">
        <div class="col text-h6 ellipsis absolute-bottom">
          {{ product.name }}
        </div>
      </q-img>

      <q-card-section class="q-py-xs">
        <q-btn
          fab
          color="primary"
          icon="shopping_cart"
          class="absolute"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div v-if="product.price_small" class="text-subtitle1">
          R$ {{ product.price_small }}
        </div>
        <div v-if="product.price_medium" class="text-subtitle1">
          R$ {{ product.price_medium }}
        </div>
        <div v-if="product.price_large" class="text-subtitle1">
          R$ {{ product.price_large }}
        </div>
        <div v-if="product.price_single" class="text-subtitle1">
          R$ {{ product.price_single }}
        </div>
        <div v-if="product.description" class="text-caption text-grey">
          {{ product.description }}
        </div>
      </q-card-section>
    </q-card> -->
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

import { useProductsStore } from 'src/stores/productsStore';
import { storeToRefs } from 'pinia';
import CardProduct from 'src/components/Card/CardProduct.vue';

const products = useProductsStore();

const { productData } = storeToRefs(products);

products.getProducts();
console.log(
  '%cprocess.env: ',
  'color: MidnightBlue; background: Aquamarine;',
  process.env
);
console.log(
  '%cimport.meta: ',
  'color: MidnightBlue; background: Aquamarine;',
  import.meta
);
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  gap: 1rem;
  // flex-direction: row;

  .my-card {
    // width: 300px;
    // max-width: 300px;
    border-radius: 1rem;
  }
}
</style>
