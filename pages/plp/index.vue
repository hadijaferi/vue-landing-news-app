<template>
  <v-main>
    <v-container>
      <BaseBreadcrumb :items="bcItems"/>
      <NewsTitle title="فروشگاه" :icons="['mdi-domain']" class="mt-0"/>
      <v-row>
        <v-col v-for="element in products" :key="element.id" md="3">
          <v-card
              :loading="loading"
              class="mx-auto"
              max-width="374"
              min-height="500"
          >
            <template slot="progress">
              <v-progress-linear
                  color="deep-purple"
                  height="10"
                  indeterminate
              ></v-progress-linear>
            </template>
            <v-img
                height="250"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <span class="cardTitle">{{ element.title }}</span>
            <v-card-text>
              <v-row
                  align="center"
                  class="mx-0"
              >
                <v-rating
                    :value="element.productRate"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="20"
                ></v-rating>

                <div class="grey&#45;&#45;text ms-4">
                  ({{ element.productRate }})
                </div>
              </v-row>

              <div class="my-4" v-if="element.price">
                {{ element.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }} <span>ریال</span>
              </div>

              <div>{{ element.shortDescription.substr(0, 50) + '...' }}
              </div>
            </v-card-text>
            <v-card-actions class="d-flex justify-center align-center">
              <v-btn
                  @click="handleClickFactor(element)"
                  class="submitButton"
                  elevation="2"
                  large
              >ثبت خرید
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-dialog
          v-model="factor"
          transition="dialog-bottom-transition"
          max-width="1000"
      >
        <template v-slot:default="factor">
          <v-card>
            <div class="d-flex justify-space-between">

              <v-icon @click="closeFactorModal()" color="red" large class="pt-3 pr-7">mdi-close</v-icon>
              <div class="toolbarFactorModal">فاکتور خرید</div>
              <div></div>
            </div>
            <div class="d-flex pa-10">
              <div class="d-flex flex-row justify-space-around ">
                <v-img
                    max-height="185"
                    max-width="331"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                >

                </v-img>
                <div class="pr-10">
                  <span class="d-block">{{ singleProduct.title }}</span>
                  <v-card-text>
                    <p v-html="singleProduct.description"></p>
                  </v-card-text>
                  <div class="d-flex flex-row pb-5">
                    <v-rating
                        :value="singleProduct.productRate"
                        color="amber"
                        dense
                        half-increments
                        readonly
                        size="20"
                    ></v-rating>

                    <div class="grey&#45;&#45;text ms-4">
                      ({{ singleProduct.productRate }})
                    </div>
                    <!-- <div class="mr-7">
                       {{ singleProduct.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }} <span>ریال</span>
                     </div>-->
                  </div>
                  <div class="walletBalance">
                    <div>
                      <span>موجودی کیف پول : </span>
                      <span>{{ userData.wallet.balance.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") }} <span>ریال</span></span>
                    </div>
                    <div>
                      <span>قیمت : </span>

                      <span> {{
                          singleProduct.price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                        }} <span>ریال</span></span>
                    </div>
                  </div>
                  <v-row v-if="!userData.wallet.balance<singleProduct.price" class="pt-2">
                    <v-col cols="12" md="5">
                      <v-text-field
                          ref="amount"
                          outlined
                          clearable
                          v-model="amount"
                          label="مبلغ"
                          hint="لطفا مبلغ را به ریال وارد کنید."
                          :color="$store.state.cPrimary"
                          clear-icon="mdi-close"
                          :rules="[rules.required, rules.amount]"
                          @keyup.enter="payment()"
                      ></v-text-field>

                    </v-col>
                    <v-col cols="12" md="7">
                      <v-btn
                          depressed
                          width="100%"
                          class="py-7 bg-main white--text mx-auto"
                          @click="payment()"
                      >
                        <v-icon class="head-icon">mdi-plus-circle-outline</v-icon>
                        افزایش موجودی
                      </v-btn>

                    </v-col>
                  </v-row>
                  <v-row class="pt-3" v-else>
                    <v-col cols="12" md="5">
                      <v-btn
                          depressed
                          width="100%"
                          class="py-7 bg-main white--text"
                          @click="payment()"
                      >
                        پرداخت با اعتبار کیف پول
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </v-card>
        </template>
      </v-dialog>
    </v-container>


  </v-main>
</template>

<script>
export default {
  data: () => ({
    factor: false,
    loading: false,
    notFound: false,
    transporter: "",
    products: [],
    singleProduct: {},
    amount: "",
    userData: {},
    bcItems: [
      {
        text: 'فروشگاه',
        disabled: true,
        href: '#',
      },
    ],
    rules: {
      required: value => !!value || 'وارد کردن این فیلد الزامی است.',
      amount: value => {
        const pattern = /^([0-9])+$/
        return pattern.test(value) || 'لطفا مبلغ را به عدد وارد کنید.'
      },
    },
    currentUrl: ''
  }),

  created() {
    this.getUserData()
    this.GetProductList()
  },
  methods: {
    handleClickFactor(data) {
      if (false){
        console.log("hi bitch !")
        this.loginRedirect()
      }else {
        console.log(JSON.parse(JSON.stringify(data)))
        this.singleProduct = JSON.parse(JSON.stringify(data)),
            this.factor = true
      }

    },
    closeFactorModal() {
      this.factor = false
    },
    GetProductList() {
      this.loading = true;
      this.products = [];
      this.$axios.$get('/api/Public/RecentProducts')
          .then(response => {
            this.loading = false;
            this.products = response.result.items;
            if (this.products.length == 0) {
              this.notFound = true;
            }
          })
          .catch(error => {
            console.log(error, "error of  GetProductList")
            this.loading = false;
            if (error.response.status == 401) {
              this.authorized = false;
            } else {
              this.access = false;
            }
          })
    },
    getUserData() {
      this.$axios.$get("/api/services/app/Wallets/GetAll")
          .then(response => {
            console.log(response.result.items[0].wallet.balance)
            this.userData = response.result.items[0];
          })
    },
    payment() {
      if (this.$refs["amount"].validate()) {
        this.factor = false;
        this.$axios.$post("api/services/app/OnlinePayments/AddPayment", {
            amount: this.amount,
            clientCallBackUrl: "http://localhost:3000/payment/",
            verifyCallBackUrl: process.env.baseUrl + "/api/ShetabPayment/Verify?enc_auth_token=" + encodeURIComponent(this.$store.state.localStorage.encryptedAccessToken),
            clientCallBackType:1,
            gateway: 4

        })
            .then(response => {
                  window.location.href = `https://localhost:44301/api/ShetabPayment/Pay/${response.result} ?enc_auth_token=${ encodeURIComponent(this.$store.state.localStorage.encryptedAccessToken)}`
              // $router.push("https://localhost:44301/api/ShetabPayment/Pay?trackingNumber=-6024994764254103110")
                /*  console.log(response, "hi ")
              this.transporter = response.result.transporter;
              this.$axios.$post(response.result.transporter.url, {
                CommandType: response.result.transporter.form.CommandType,
                trackingNumber: response.result.transporter.form.trackingNumber,
                amount: response.result.transporter.form.amount,
                redirectUrl: response.result.transporter.form.redirectUrl
              }).then(r => {
                console.log(r, " res step Two")
              })
                  .catch(err => {
                    console.log(err, "err Step two")
                  })*/
            }
            ).catch((err=>{
          console.log(err, "err step One")}))
      } else {
        this.$refs["amount"].validate(true);
      }
    },
    loginRedirect() {
      if (process.client) {
        this.currentUrl = window.location.href;
        window.location.href = 'https://admin.hamfekran.com/account/login?ss=true&returnUrl=' + this.currentUrl;
      }
    },
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.submitButton {
  background-color: $c1 !important;
  color: #fff;
  width: 100%;
}

.cardTitle {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.07rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  word-break: break-all;
  padding: 15px;

}

.toolbarFactorModal {
  background-color: #fff !important;
  width: 100%;
  display: flex;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
  color: $c1;
  font-family: $f-bl;
  font-size: 25px;

}

.crop {
  overflow: hidden;
  height: 50px;
  line-height: 50px;
}

.walletBalance {
  justify-content: space-between;
  display: flex;
  padding: 10px;
  background-color: $c1 !important;
  color: $cw !important;
  border-radius: 5px;
  border-color: #9eaeb5;
  border-width: 1px;
}


</style>
