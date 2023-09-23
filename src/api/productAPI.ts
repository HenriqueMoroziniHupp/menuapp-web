import { API } from 'src/configs/axios';

export default {
  getAllProducts() {
    return API({
      method: 'GET',
      url: '/product',
    });
  },
};
