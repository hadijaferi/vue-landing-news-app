<template>
	<v-card>
		<v-card-text class="dialog-form">
			<div class="dialog-text">
				<h1 class="d-block text-center">
					ثبت پرسش جدید
				</h1>
				<p>
					لطفا به منظور ثبت پرسش جدید، فرم زیر را پر کنید.
				</p>
			</div>
			<v-row>
				<v-col cols="12" md="6" class="dialog-part">
					<v-select
						ref="types"
						outlined
						return-object
						clearable
						required
						v-model="types.value"
						:items="types.list"
						item-text="displayName"
						item-value="id"
						:label="types.label"
						clear-icon="mdi-close"
						:prepend-inner-icon="types.icon"
						:color="$store.state.cPrimary"
						:rules="[rules.required]"
					></v-select>
				</v-col>
				<v-col cols="12" md="6" class="dialog-part">
					<v-select
						ref="urgency"
						outlined
						return-object
						clearable
						required
						v-model="urgency.value"
						:items="urgency.list"
						item-text="displayName"
						item-value="id"
						:label="urgency.label"
						clear-icon="mdi-close"
						:prepend-inner-icon="urgency.icon"
						:color="$store.state.cPrimary"
						:rules="[rules.required]"
					></v-select>
				</v-col>
				<v-col cols="12" md="6" class="dialog-part">
					<v-select
						ref="levels"
						outlined
						return-object
						clearable
						required
						v-model="levels.value"
						:items="levels.list"
						:label="levels.label"
						item-text="displayName"
						item-value="id"
						clear-icon="mdi-close"
						:prepend-inner-icon="levels.icon"
						:color="$store.state.cPrimary"
						:rules="[rules.required]"
					></v-select>
				</v-col>
				<v-col cols="12" md="6" class="dialog-part">
					<v-select
						ref="stockIndustry"
						outlined
						return-object
						clearable
						required
						v-model="stockIndustry.value"
						:items="stockIndustry.list"
						item-text="displayName"
						item-value="id"
						:label="stockIndustry.label"
						clear-icon="mdi-close"
						:prepend-inner-icon="stockIndustry.icon"
						:color="$store.state.cPrimary"
						:rules="[rules.required]"
					></v-select>
				</v-col>
				<v-col cols="12" md="6" class="dialog-part">
					<v-text-field
						ref="expireDate"
						v-model="expireDate.value"
						:label="expireDate.label"
						:color="$store.state.cPrimary"
						outlined
						dir="ltr"
						:prepend-inner-icon="expireDate.icon"
						:rules="[rules.required]"
						id="payment-date"
					></v-text-field>
					<date-picker 
						v-model="expireDate.value"
						element="payment-date"
						:color="$store.state.cPrimary"
					></date-picker>
				</v-col>
				<v-col cols="12" md="6" class="dialog-part">
					<v-select
						outlined
						return-object
						clearable
						v-model="experts.value"
						:items="experts.list"
						:label="experts.label"
						item-text="displayName"
						item-value="id"
						clear-icon="mdi-close"
						:prepend-inner-icon="experts.icon"
						:color="$store.state.cPrimary"
					></v-select>
				</v-col>
				<v-col cols="12" md="12" class="dialog-part">
					<v-textarea
						ref="question"
						v-model="question.value"
						label="پرسش شما"
						outlined
						required
						:prepend-inner-icon="question.icon"
						:color="$store.state.cPrimary"
						:rules="[rules.required, rules.farsi]"
					></v-textarea>
				</v-col>
				<v-col cols="12" md="12" class="dialog-part">
					<v-alert
						v-if="sent"
						color="green"
						text
						type="success"
						class="py-4 mb-0"
					>
						پرسش شما با موفقیت ارسال شد.
					</v-alert>
					<v-btn
						v-else
						elevation="0"
						class="py-7 px-10 submit bg-main white--text"
						:loading="loading"
						@click="submitQuestion()"
					>
						ثبت
					</v-btn>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script>
  export default {
    data: () => ({  
			sent: false,
			loading: false,
			hasError: false,
			notFound: false,
      
			rules: {
				required: value => !!value || 'وارد کردن این فیلد الزامی است.',
        farsi: value => {
					const pattern = /^([\u0600-\u06FF ‌]+\s?)+$/
					return (!value || pattern.test(value)) || 'لطفا حروف فارسی وارد کنید.'
        },
			},

			stockIndustry: {
				value: "",
				list: [],
				icon: "",
				label: "صنایع بازار"
			},
			urgency: {
				value: "",
				list: [],
				icon: "",
				label: "فوریت پرسش"
			},
			types: {
				value: "",
				list: [],
				icon: "",
				label: "جنس پرسش"
			},
			levels: {
				value: "",
				list: [],
				icon: "",
				label: "سطح پرسش"
			},
			experts: {
				value: "",
				list: [],
				icon: "mdi-account-outline",
				label: "کارشناس (اختیاری)"
			},
			expireDate: {
				value: "",
				icon: "mdi-calendar-month-outline",
				label: "تاریخ انقضا"
			},
			question: {
				value: "",
				icon: "mdi-comment-question-outline",
				label: "پرسش شما"
			},
    }),
    created: function () {
			this.getDropDowns();
    },
		methods: {
			getDropDowns() {
				this.$axios.$get("/api/services/app/QuestionAnswers/GetAllStockIndustryForTableDropdown")
				.then(response => {
					this.stockIndustry.list = response.result;
				})
				
				this.$axios.$get("/api/services/app/QuestionAnswers/GetAllQAUrgencyForTableDropdown")
				.then(response => {
					this.urgency.list = response.result;
				})
				
				this.$axios.$get("/api/services/app/QuestionAnswers/GetAllQATypeForTableDropdown")
				.then(response => {
					this.types.list = response.result;
				})
				
				this.$axios.$get("/api/services/app/QuestionAnswers/GetAllQALevelForTableDropdown")
				.then(response => {
					this.levels.list = response.result;
				})
				
				this.$axios.$get("/api/services/app/QuestionAnswers/GetAllUserForTableDropdown")
				.then(response => {
					this.experts.list = response.result;
				})
			},
			submitQuestion() {
				this.loading = true;
				this.hasError = false;
        Object.keys(this.form).forEach(f => {
          if (!this.$refs[f].validate()) {
						this.hasError = true;
						this.$refs[f].validate(true);
					}
        })
				if (!this.hasError) {
					this.$axios.$post("/api/services/app/QuestionAnswers/CreateOrEdit", {
						"question": this.question.value,
						"answer": "‌",
						"expireDate": this.$moment(this.expireDate.value, 'jYYYY/jMM/jDD').format('YYYY-MM-DD') + "T00:00:00",
						"status": 1,
						"expertId": this.experts.value.id,
						"stockIndustryId": this.stockIndustry.value.id,
						"qaUrgencyId": this.urgency.value.id,
						"qaTypeId": this.types.value.id,
						"qaLevelId": this.levels.value.id,
						"id": this.$store.state.localStorage.userId
					})
					.then(response => {
						this.sent = true;
						this.loading = false;
					})
					.catch(function(error) {
						this.loading = false;
					});
				} else {
					this.loading = false;
				}
			},
		},
		computed: {
      form () {
        return {
					"stockIndustry": this.stockIndustry.value.id,
					"urgency": this.urgency.value.id,
					"types": this.types.value.id,
					"levels": this.levels.value.id,
					"expireDate": this.expireDate.value,
          "question": this.question.value,
        }
      },
		}
  }
</script>

<style lang="scss" >
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';



</style>
