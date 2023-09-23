<template>
  <q-card class="card-product shadow-5 full-width">
    <q-img :src="product.image_url" :ratio="4 / 3">
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
      <div class="card-product__price-wrapper">
        <template v-if="product.price_single">
          <PriceProduct
            :price="product.price_single"
            :label="'Tamanho Unico'"
          />
        </template>
        <template v-else>
          <PriceProduct
            v-if="product.price_small"
            :price="product.price_small"
            :label="'P'"
          />
          <PriceProduct
            v-if="product.price_medium"
            :price="product.price_medium"
            :label="'M'"
          />
          <PriceProduct
            v-if="product.price_large"
            :price="product.price_large"
            :label="'G'"
          />
        </template>
      </div>
      <div
        v-if="product.description"
        class="card-product__description text-caption text-grey"
      >
        <p>{{ product.description }}</p>
      </div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts" setup>
import type { IProduct } from 'src/interfaces/IProduct';
import PriceProduct from 'src/components/molecules/PriceProduct.vue';

const props = defineProps<{ product: IProduct }>();
</script>

<style lang="scss" scoped>
.card-product {
  // width: 300px;
  max-width: 430px;
  border-radius: 1rem;

  &__price-wrapper {
    width: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 1.5rem;
  }

  &__description {
    padding-top: 0.4rem;
    color: red;
  }
}
// }
</style>
