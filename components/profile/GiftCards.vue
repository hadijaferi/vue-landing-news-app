<template>

	<v-row class="profile-content">
		<v-col cols="12" md="12" class="text-left">
			<v-btn
				large
				depressed
				class="py-6 bg-main white--text"
				@click.stop="openGiftCardForm()"
			>
				<v-icon class="head-icon">mdi-plus-circle-outline</v-icon>
				ثبت کارت هدیه
			</v-btn>
			<v-dialog v-model="giftCardForm.dialog" max-width="750">
				<v-card>
					<v-card-text class="dialog-form">
						<div class="dialog-text">
							<h1 class="d-block text-center">
								ثبت کارت هدیه
							</h1>
							<p class="text-center">
								لطفا به منظور ثبت کارت هدیه جدید، کد کارت هدیه را وارد کنید.
							</p>
						</div>
						<v-row class="mt-5">
							<v-col cols="12" md="6 offset-md-1" class="dialog-part">
								<v-text-field
									ref="cardNumber"
									v-model="giftCardForm.cardNumber.value"
									:label="giftCardForm.cardNumber.label"
									:color="$store.state.cPrimary"
									required
									outlined
									:prepend-inner-icon="giftCardForm.cardNumber.icon"
									:rules="[rules.required, rules.cardNumber]"
								></v-text-field>
							</v-col>
							<v-col cols="12" md="4" class="dialog-part">
								<v-btn
									elevation="0"
									width="100%"
									class="py-7 submit bg-main white--text"
									:loading="giftCardForm.loading"
									@click="registerGiftCard()"
								>
									ثبت کارت هدیه
								</v-btn>
							</v-col>
							<v-col cols="12" md="10 offset-md-1" class="dialog-part">
								<v-alert
									v-if="giftCardForm.success == true"
									color="green"
									text
									type="success"
									class="py-4 mb-0"
								>
									کارت هدیه با موفقیت ثبت شد و به کیف پول شما اضافه شد.
								</v-alert>
								<v-alert
									v-else-if="giftCardForm.success == false"
									color="red"
									text
									type="warning"
									class="py-4 mb-0"
								>
									کارت هدیه معتبر نمی‌باشد.
								</v-alert>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-dialog>
		</v-col>
		<v-col cols="12" md="12">
			<BaseNote v-if="!giftCards" type="loading" class="mt-0" />
			<BaseNote v-else-if="giftCards.length == 0" type="custom" note="هیچ کارت هدیه‌ای ثبت نشده است." class="mt-0" />
			<v-data-table
			 	v-else
				:headers="giftCardsHeaders"
				:items="giftCardsItems"
				class="profile-table"
				hide-default-footer
				:items-per-page="10"
			>
				<template v-slot:[`item.creditCard.validDate`]="{ item }">
					{{ $moment(item.creditCard.validDate.substr(0, item.creditCard.validDate.indexOf("T")), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}
				</template>
				<template v-slot:[`item.creditCard.usedDate`]="{ item }">
						<span v-if="usedDate">
							{{ $moment(item.creditCard.usedDate.substr(0, item.creditCard.usedDate.indexOf("T")), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}
						</span>
						<span v-else>
							استفاده نشده
						</span>
				</template>
				<template v-slot:[`item.creditCard.creditValue`]="{ item }">
					{{ Number(item.creditCard.creditValue).toLocaleString() }}
				</template>
			</v-data-table>
		</v-col>
	</v-row>

</template>

<script>
  export default {
    props: ['userId'],
    data: () => ({  
			giftCards: "",
			giftCardsHeaders: [
				{ text: "ردیف", value: "index", sortable: false },
				{
					text: "شماره کارت هدیه", value: "creditCard.cardNumber", sortable: false
				},
				{ text: "مقدار هدیه", value: "creditCard.creditValue", sortable: false },
				{
					text: "تاریخ اعتبار", value: "creditCard.validDate", sortable: false
				},
				{
					text: "تاریخ استفاده", value: "creditCard.usedDate", sortable: false
				},
				{ text: "توضیحات", value: "creditCard.description", sortable: false }
			],
			giftCardForm: {
				dialog: false,
				loading: false,
				success: null,
				cardNumber: { value: "", label: "کد کارت", icon: "mdi-numeric" },
			},
			rules: {
				required: value => !!value || 'وارد کردن این فیلد الزامی است.',
        cardNumber: value => {
					const pattern = /^([A-Za-z0-9])+$/;
					return pattern.test(value) || 'لطفا کد کارت را صحیح وارد کنید'
        },
			},
			notFound: false,
    }),
    created: function () {
    	this.getGiftCards(this.userId);
    },
		methods: {
			getGiftCards(userId) {
				this.$axios
					.$get("/api/services/app/CreditCards/GetAll", {
						params: {
							UserIdFilter: userId
						}
					})
					.then(response => {
						this.giftCards = response.result.items;
						if (this.giftCards.length == 0) {
							this.notFound = true;
						}
					});
			},
			openGiftCardForm() {
				this.giftCardForm.cardNumber.value = "";
				this.giftCardForm.success = null;
				this.giftCardForm.dialog = true;
			},
			registerGiftCard() {
				if (this.$refs["cardNumber"].validate()) {
					this.giftCardForm.loading = true;
					this.$axios.$post("/api/services/app/CreditCards/SubmitCreditCard", {
						cardNumber: this.giftCardForm.cardNumber.value
					})
					.then(response => {
						if (response.result == true) {
							this.giftCardForm.success = true;
							this.getGiftCards(this.$store.state.localStorage.userId);
						} else {
							this.giftCardForm.success = false;
						}
						this.giftCardForm.loading = false;
					})
				} else {
					this.$refs["cardNumber"].validate(true);
				}
			},
		},
		computed: {
			giftCardsItems() {
				return this.giftCards.map((items, index) => ({
					...items,
					index: index + 1
				}));
			}
		}
  }
</script>

<style lang="scss" >
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

</style>
