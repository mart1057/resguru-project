<template>
    <div>
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
         this.$refs.checkoutRef.redirectToCheckout({customerEmail});
      },
    },
  };
  </script>