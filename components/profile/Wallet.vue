<template>
	<v-row class="profile-content">
		<template v-if="wallet">
			<v-col cols="8 offset-md-2">
				<v-card
					outlined
					color="#e0f7f7"
					class="wallet-box"
				>
				<v-row>
					<v-col cols="5" class="text-center">
						<v-icon class="wallet-icon">mdi-wallet-outline</v-icon>
					</v-col>
					<v-col v-if="wallet" cols="7">
						<h4 class="wallet-title">موجودی فعلی:</h4>
						<h2 class="wallet-value"><span>{{ wallet[0].wallet.balance.toLocaleString() }}</span> ریال</h2>
					</v-col>
				</v-row>
					<!-- <v-card-title class="text-h5">
						Unlimited music now
					</v-card-title>
					<v-card-subtitle>
						Listen to your favorite artists and albums whenever and wherever, online and offline.
					</v-card-subtitle>
					<v-card-actions>
						<v-btn text>
							Listen Now
						</v-btn>
					</v-card-actions> -->
				</v-card>
			</v-col>
			<v-col cols="12" md="5 offset-md-2" class="search-element">
				<v-text-field
					ref="amount"
					outlined
					clearable
					v-model="paymentConfirm.amount"
					label="مبلغ"
					hint="لطفا مبلغ را به ریال وارد کنید."
					:color="$store.state.cPrimary"
					clear-icon="mdi-close"
					:rules="[rules.required, rules.amount]"
					@keyup.enter="payment()"
				></v-text-field>
			</v-col>
			<v-col cols="12" md="3">
				<v-btn
					depressed
					width="100%"
					class="py-7 bg-main white--text mx-auto"
					@click="payment()"
				>
					<v-icon class="head-icon">mdi-plus-circle-outline</v-icon>
					افزایش موجودی
				</v-btn>
					<v-dialog v-model="paymentConfirm.dialog" max-width="650">
					<v-card>
						<v-card-text class="dialog-form">
							<div class="dialog-text">
								<h1 class="d-block text-center">
									تایید افزایش موجودی
								</h1>
								<p class="d-block text-center">
									برای پرداخت و اضافه کردن {{ paymentConfirm.amount }} ریال به موجودی خود، وارد درگاه پرداخت شوید.
								</p>
							</div>
							<v-row>
								<v-col cols="12" md="12" class="dialog-part">
									<client-only v-if="paymentConfirm.transporter">
										<form :action="paymentConfirm.transporter.url" method="post" id="myForm">
											<input
												type="hidden"
												class="d-block"
												name="CommandType"
												v-model="paymentConfirm.transporter.form.CommandType"
											/>
											<input
												type="hidden"
												class="d-block"
												name="trackingNumber"
												v-model="paymentConfirm.transporter.form.trackingNumber"
											/>
											<input
												type="hidden"
												class="d-block"
												name="amount"
												v-model="paymentConfirm.transporter.form.amount"
											/>
											<input
												type="hidden"
												class="d-block"
												name="redirectUrl"
												v-model="paymentConfirm.transporter.form.redirectUrl"
											/>
											<v-btn
												min-width="160px"
												depressed
												class="py-6 bg-main white--text"
												type="submit"
											>
												ورود به درگاه پرداخت
											</v-btn>
											<v-btn
												min-width="160px"
												depressed
												class="py-6"
												@click="paymentConfirm.dialog = false"
											>
												انصراف
											</v-btn>
										</form>
									</client-only>
								</v-col>
							</v-row>
						</v-card-text>
					</v-card>
				</v-dialog>
			</v-col>
		</template>
		<v-col v-else>
			<BaseNote type="custom" note="کیف پول موجود نیست." />
		</v-col>
	</v-row>
</template>

<script>
  export default {
    props: ['userId'],
    data: () => ({
			wallet: '',
			paymentConfirm: {
				dialog: false,
				amount: '',
				transporter: ''
			},
			rules: {
				required: value => !!value || 'وارد کردن این فیلد الزامی است.',
        amount: value => {
					const pattern = /^([0-9])+$/
					return pattern.test(value) || 'لطفا مبلغ را به عدد وارد کنید.'
        },
			},
    }),
    created: function () {
    	this.getWallet();
    },
		methods: {
			getWallet() {
				this.$axios.$get("/api/services/app/Wallets/GetAll")
				.then(response => {
					this.wallet = response.result.items;
				})
			},
			payment() {
				if (this.$refs["amount"].validate()) {
					this.paymentConfirm.dialog = true;
					this.$axios.$post("/api/ShetabPayment/Pay", {
						amount: this.paymentConfirm.amount,
						verifyCallBackUrl: process.env.baseUrl + "/api/ShetabPayment/Verify", //?enc_auth_token=" + this.$store.state.localStorage.accessToken,
						clientCallBackUrl: "http://localhost:3000/payment/",
						gateway: 4
					})
					.then(response => {
						this.paymentConfirm.transporter = response.result.transporter;
					})
				} else {
					this.$refs["amount"].validate(true);
				}
			},
		},
  }
</script>

<style lang="scss" >
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.wallet-box {
  color: $c1!important;
  padding: 20px;

  .wallet-title {
    margin-top: 20px;
    font-size: 20px;
    font-family: $f-b!important;
  }

  .wallet-value {
    margin-top: 5px;
    font-size: 18px;

    span {
      font-size: 28px;
      font-family: $f-bl!important;
    }
  }

  i {
    color: $c1!important;
    font-size: 110px!important;
  }
}

</style>
