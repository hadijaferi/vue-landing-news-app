<template>
  <v-main class="grey lighten-3">
    <v-container>
      <BaseBreadcrumb :items="bcItems" />
      <v-row>
        <v-col>
          <v-sheet rounded="lg" class="py-15 px-5 mb-5">
            <v-row>
              <v-col class="text-center">
                <template v-if="success == 1">
                  <v-icon class="payment-icon green--text">mdi-checkbox-marked-circle-outline</v-icon>
                  <h1 class="payment-title green--text">پرداخت با موفقیت انجام شد.</h1>
                </template>
                <template v-else-if="success == 0">
                  <v-icon class="payment-icon red--text">mdi-close-circle-outline</v-icon>
                  <h1 class="payment-title red--text">انجام عملیات پرداخت با مشکل مواجه شد.</h1>
                </template>
	              <BaseNote v-else type="loading" class="mt-0" />
                <v-btn depressed class="button mt-10">
                  <NuxtLink to="/profile">
                    <v-icon class="head-icon ml-1">mdi-redo</v-icon>
                    بازگشت به صفحه پروفایل
                  </NuxtLink>
                </v-btn>
              </v-col>
            </v-row>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    data: () => ({
      bcItems: [
        {
          text: 'پرداخت بانکی',
          disabled: false,
          href: '',
        }
      ],
      payment: '',
      success: null,
    }),
    created: function () {
      let that = this;
      this.$axios.$get('/api/services/app/OnlinePayments/GetOnlinePaymentForView', {
        params: {
          id: this.$route.params.id
        }
      })
      .then(response => {
        this.payment = response;
        this.success = 1;
      })
      .catch(function(error) {
        that.success = 0;
      });

    },
    methods: {

    },
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.payment-icon {
  font-size: 85px!important;
  font-family: $f-b!important;

  @include res(md) {
    font-size: 38px;
  }
}

.payment-title {
  font-size: 26px;
  font-family: $f-b;
  margin-top: 20px;
  margin-bottom: 20px;

  @include res(md) {
    font-size: 18px;
  }
}

.button {
  height: auto!important;
  padding: 0!important;

  span a {
    padding: 15px 25px;
    display: block;
  }
}

</style>
