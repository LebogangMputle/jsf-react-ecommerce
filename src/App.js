import { fetchProducts } from './api/api.js';

document.addEventListener('alpine:init', () => {
  Alpine.data('ecommerceApp', () => ({
    cartOpen: false,
    items: [],
    selectedProduct: null,

    init() {
      this.$watch('selectedProduct', value => {
        if (value) {
          // logic for when a product is selected
        }
      });
    }
  }));

  Alpine.data('header', () => ({
    cartOpen: false,
    items: []
  }));

  Alpine.data('productList', () => ({
    products: [],
    async fetchProducts() {
      this.products = await fetchProducts();
    },
    addToCart(product) {
      this.$root.items.push(product);
    }
  }));
});

