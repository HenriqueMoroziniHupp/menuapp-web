import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import productAPI from 'src/api/productAPI';

import type { IProduct } from 'src/interfaces/IProduct';

export const useProductsStore = defineStore('products', () => {
  const products = ref<IProduct[]>([]);

  const productData = computed(() => products.value);

  async function getProducts() {
    try {
      const response = await productAPI.getAllProducts();

      products.value = response.data;
    } catch (error) {
      console.log(
        '%cerror: ',
        'color: MidnightBlue; background: Aquamarine;',
        error
      );
    }
  }

  return {
    productData,
    getProducts,
  };
});
