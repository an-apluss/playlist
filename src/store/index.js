import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: 'Craigh Blast', price: 30 },
      { name: 'Craigh Blast', price: 30 },
      { name: 'Craigh Blast', price: 30 },
      { name: 'Craigh Blast', price: 30 },
      { name: 'Craigh Blast', price: 30 },
      { name: 'Craigh Blast', price: 30 },
    ]
  },

  getters: {
    salesProducts: state => {
      const salesProducts = state.products.map(product => {
        return {
          name: `**${product.name}**`,
          price: product.price / 2
        }
      });

      return salesProducts;
    }
  },

  mutations: {
    reducePrices: (state, payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      });
    }
  },

  actions: {
    reducePrices: (context, payload) => {
      setTimeout(() => {
        context.commit('reducePrices', payload);
      }, 2000);
    }
  }
});
