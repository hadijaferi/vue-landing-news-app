<template>
	<v-row class="profile-content">
		<v-col cols="12" md="12" class="text-left">
			<v-btn
				large
				depressed
				class="py-6 bg-main white--text"
				@click.stop="openReceiptForm()"
			>
				<v-icon class="head-icon">mdi-plus-circle-outline</v-icon>
				ثبت فیش جدید
			</v-btn>
			<v-dialog v-model="receiptForm.dialog" max-width="750">
				<v-card>
					<v-card-text class="dialog-form">
						<div class="dialog-text">
							<h1 class="d-block text-center">
								ثبت فیش جدید
							</h1>
							<p>
								لطفا به منظور ثبت فیش جدید، فرم زیر را کامل پر کنید.
							</p>
						</div>
						<v-row>
							<v-col cols="12" md="6" class="dialog-part">
								<v-text-field
									ref="receiptNumber"
									v-model="receiptForm.receiptNumber.value"
									:label="receiptForm.receiptNumber.label"
									:color="$store.state.cPrimary"
									required
									outlined
									:prepend-inner-icon="receiptForm.receiptNumber.icon"
									:rules="[rules.required, rules.number]"
								></v-text-field>
							</v-col>
							<v-col cols="12" md="6" class="dialog-part">
								<v-text-field
									ref="bankName"
									v-model="receiptForm.bankName.value"
									:label="receiptForm.bankName.label"
									:color="$store.state.cPrimary"
									required
									outlined
									:prepend-inner-icon="receiptForm.bankName.icon"
									:rules="[rules.required, rules.farsi]"
								></v-text-field>
							</v-col>
							<v-col cols="12" md="6" class="dialog-part">
								<v-text-field
									v-model="receiptForm.paymentDate.value"
									:label="receiptForm.paymentDate.label"
									:color="$store.state.cPrimary"
									required
									outlined
									dir="ltr"
									:prepend-inner-icon="receiptForm.paymentDate.icon"
									id="payment-date"
								></v-text-field>
								<date-picker 
									v-model="receiptForm.paymentDate.value"
									element="payment-date"
									:color="$store.state.cPrimary"
								></date-picker>
							</v-col>
							<v-col cols="12" md="6" class="dialog-part">
								<v-text-field
									ref="paidAmount"
									v-model="receiptForm.paidAmount.value"
									:label="receiptForm.paidAmount.label"
									:color="$store.state.cPrimary"
									required
									outlined
									:prepend-inner-icon="receiptForm.paidAmount.icon"
									:rules="[rules.required, rules.number]"
								></v-text-field>
							</v-col>
							<v-col cols="12" md="12" class="dialog-part">
								<v-textarea
									v-model="receiptForm.description.value"
									:label="receiptForm.description.label"
									:color="$store.state.cPrimary"
									required
									outlined
									:prepend-inner-icon="receiptForm.description.icon"
								></v-textarea>
							</v-col>
							<v-col cols="12" md="12" class="dialog-part">
								<v-alert
									v-if="receiptForm.sent"
									color="green"
									text
									type="success"
									class="py-4 mb-0"
								>
									درخواست شما با موفقیت ارسال شد.
								</v-alert>
								<v-btn
									v-else
									elevation="0"
									class="py-7 px-10 submit bg-main white--text"
									:loading="receiptForm.loading"
									@click="registerReceipt()"
								>
									ثبت
								</v-btn>
							</v-col>
						</v-row>
					</v-card-text>
				</v-card>
			</v-dialog>
		</v-col>
		<v-col cols="12" md="12">
			<BaseNote v-if="!receipts" type="loading" class="mt-0" />
			<BaseNote v-else-if="receipts.length == 0" type="custom" note="هیچ فیشی ثبت نشده است." class="mt-0" />
			<v-data-table
				v-else
				:headers="receiptsHeaders"
				:items="receiptsItems"
				class="profile-table"
				hide-default-footer
				:items-per-page="10"
			>
				<template v-slot:[`item.cashReceipt.paymentDate`]="{ item }">
					{{ $moment(item.cashReceipt.paymentDate.substr(0, item.cashReceipt.paymentDate.indexOf("T")), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}
				</template>
				<template v-slot:[`item.cashReceipt.paidAmount`]="{ item }">
					{{ Number(item.cashReceipt.paidAmount).toLocaleString() }}
				</template>
				<!-- <template v-slot:[`item.receipts.id`]="{ item }">
					<v-btn depressed>
						<NuxtLink :to="'/news/' + item.receipts.id" target="_blank">مشاهده خبر</NuxtLink>
					</v-btn>
				</template> -->
			</v-data-table>
		</v-col>
	</v-row>

</template>

<script>
  export default {
    props: ['userId'],
    data: () => ({  
      receipts: "",
			receiptsHeaders: [
				{ text: "ردیف", value: "index", sortable: false },
				{
					text: "شماره فیش",
					value: "cashReceipt.receiptNumber",
					sortable: false
				},
				{ text: "نام بانک", value: "cashReceipt.bankName", sortable: false },
				{
					text: "مبلغ پرداختی",
					value: "cashReceipt.paidAmount",
					sortable: false
				},
				{
					text: "تاریخ پرداخت",
					value: "cashReceipt.paymentDate",
					sortable: false
				},
				{ text: "توضیحات", value: "cashReceipt.description", sortable: false }
			],
			receiptForm: {
				dialog: false,
				loading: false,
				sent: false,
				receiptNumber: { value: "", label: "شماره فیش", icon: "mdi-numeric" },
				bankName: { value: "", label: "نام بانک", icon: "mdi-bank" },
				paymentDate: { value: "", label: "تاریخ پرداخت", icon: "mdi-calendar-month-outline" },
				paidAmount: { value: "", label: "مبلغ پرداختی", icon: "mdi-cash" },
				description: { value: "", label: "توضیحات", icon: "mdi-comment-text-outline" }
			},
			rules: {
				required: value => !!value || 'وارد کردن این فیلد الزامی است.',
        farsi: value => {
					const pattern = /^([\u0600-\u06FF ]+\s?)+$/
					return (!value || pattern.test(value)) || 'لطفا حروف فارسی وارد کنید.'
        },
				number: value => {
					const pattern = /^([0-9])+$/
					return (!value || pattern.test(value)) || 'لطفا عدد وارد کنید.'
        },
			},
			hasError: false,
			notFound: false,
    }),
    created: function () {
    	this.getReceipts(this.userId);
    },
		methods: {
			getReceipts(userId) {
				this.$axios.$get("/api/services/app/CashReceipts/GetAll", {
					params: {
						UserIdFilter: userId
					}
				})
				.then(response => {
					this.receipts = response.result.items;
					if (this.receipts.length == 0) {
						this.notFound = true;
					}
				});
			},
			openReceiptForm() {
				this.receiptForm.receiptNumber.value = "";
				this.receiptForm.description.value = "";
				this.receiptForm.sent = false;
				this.receiptForm.dialog = true;
			},
			registerReceipt() {
				this.receiptForm.loading = true;
				this.hasError = false;
        Object.keys(this.form).forEach(f => {
          if (!this.$refs[f].validate()) {
						this.hasError = true;
						this.$refs[f].validate(true);
					}
        })
				if (!this.hasError) {
					this.$axios.$post("/api/services/app/CashReceipts/CreateOrEdit", {
						receiptNumber: this.receiptForm.receiptNumber.value,
						bankName: this.receiptForm.bankName.value,
						paymentDate: this.$moment(this.receiptForm.paymentDate.value, 'jYYYY/jMM/jDD').format('jYYYY-jMM-jDD') + "T00:00:00",
						paidAmount: parseInt(this.receiptForm.paidAmount.value),
						description: this.receiptForm.description.value,
						userId: this.$store.state.localStorage.userId
					})
					.then(response => {
						this.receiptForm.sent = true;
						this.receiptForm.loading = false;
						this.getReceipts(this.$store.state.localStorage.userId);
					})
					.catch(function(error) {
						this.receiptForm.loading = false;
					});
				} else {
					this.receiptForm.loading = false;
				}
			},
		},
		computed: {
			receiptsItems() {
				return this.receipts.map((items, index) => ({
					...items,
					index: index + 1
				}));
			},
      form () {
        return {
          receiptNumber: this.receiptForm.receiptNumber.value,
          bankName: this.receiptForm.bankName.value,
          paidAmount: this.receiptForm.paidAmount.value,
        }
      },
		}
  }
</script>

<style lang="scss" >
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

</style>
