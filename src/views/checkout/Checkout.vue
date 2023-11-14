<template>
    <!-- <div>
        Hello world
      <stripe-checkout
        ref="checkoutRef"
        mode="subscription"
        :pk="publishableKey"
        :line-items="lineItems"
        :success-url="successURL"
        :cancel-url="cancelURL"
        @loading="v => loading = v"
      />
      <vs-button @click="submit">Subscribe!</vs-button>
    </div> -->
    <div class="shopping-cart">
    <vs-row vs-type="flex" vs-justify="space-around">
      <vs-col vs-w="4" v-for="product in products" :key="product.id">
       
          <div class="card-header">
            <h2>{{ product.title }}</h2>
            <p>{{ product.price | currency }}</p>
          </div>
          <div class="card-body">
            <ul>
              <li v-for="bullet in product.bullets" :key="bullet">{{ bullet }}</li>
            </ul>
          </div>
          <div class="card-footer">
            <vs-button color="primary" @click="submit">Buy</vs-button>
          </div>
        
      </vs-col>
    </vs-row>
  </div>


</template>
  
  <script>
  import { StripeCheckout } from '@vue-stripe/vue-stripe';


  export default {
    components: {
      StripeCheckout,

    },
    data () {
      this.publishableKey = 'pk_live_51MP3OfJUFs9Ue9lHg7rZSSAcncQ9OPAev8M1cE5voGYjOUD7UsRJN6z0ihSlWafs0BDGwJi9BfbaCSgMok0TneKB003we5Sen9';
      return {
        loading: false,
        products: [
        { id: 1, title: 'Building A', price: 1000, bullets: ['Feature 1', 'Feature 2', 'Feature 3'] },
        { id: 2, title: 'Building B', price: 2000, bullets: ['Feature 1', 'Feature 2', 'Feature 3'] },
        { id: 3, title: 'Building C', price: 3000, bullets: ['Feature 1', 'Feature 2', 'Feature 3'] },
        ],
        customerEmail: 'nuttapol.kpn@gmail.com',
        lineItems: [
          {
            price: 'price_1NcBa3JUFs9Ue9lHk4Y9PNBl', // The id of the recurring price you created in your Stripe dashboard
            quantity: 1,
          },
        ],
        successURL: 'https://tansamai.tech',
        cancelURL: 'https://tansamai.tech/contact-us',
      };
    },
    methods: {
      submit () {
        // You will be redirected to Stripe's secure checkout page
         this.$refs.checkoutRef.redirectToCheckout();
      },
    },
  };
  </script>


<style>
.product-card {
  margin: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.card-header, .card-body, .card-footer {
  margin-bottom: 10px;
}
</style>