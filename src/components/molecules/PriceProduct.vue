<template>
  <div class="price-product row no-wrap items-center text-subtitle1">
    <q-badge color="primary" :label="label" class="q-mr-sm" />
    <span class="price text-body2">R$ {{ price }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps({
  price: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.price-product {
  .price {
    text-wrap: nowrap;
  }
}
</style>
