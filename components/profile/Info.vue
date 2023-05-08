<template>
	<v-row class="profile-content">
		<BaseAlert :msg="alert.msg" :type="alert.type" v-show="alert.show" />
		<v-col v-if="user.length == 0" cols="12">
			<BaseNote type="loading" class="mt-0" />
		</v-col>
		<template v-else>
			<v-col cols="12" sm="12" md="12" lg="12" class="info-title mb-3">
				<v-icon>mdi-minus</v-icon>
				اطلاعات شخصی
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="name"
					v-model="user.name"
					outlined
					label="نام"
					:color="$store.state.cPrimary"
					:rules="[rules.required, rules.farsi]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="surname"
					v-model="user.surname"
					outlined
					label="نام خانوادگی"
					:color="$store.state.cPrimary"
					:rules="[rules.required, rules.farsi]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="nickName"
					v-model="user.nickName"
					outlined
					label="نام مستعار"
					:color="$store.state.cPrimary"
					:rules="[rules.farsi]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-select
					v-model="gender"
					:items="genderList"
					item-text="type"
					item-value="index"
					label="جنسیت"
					outlined
					return-object
					:color="$store.state.cPrimary"
				></v-select>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="phoneNumber"
					v-model="user.phoneNumber"
					outlined
					disabled
					label="تلفن همراه"
					dir="ltr"
					:color="$store.state.cPrimary"
					:rules="[rules.required, rules.mobile]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="emailAddress"
					v-model="user.emailAddress"
					outlined
					disabled
					label="پست الکترونیک"
					dir="ltr"
					:color="$store.state.cPrimary"
					:rules="[rules.email]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="12" md="12" lg="12" class="info-title mb-3">
				<v-icon>mdi-minus</v-icon>
				اطلاعات تکمیلی
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					v-model="user.birthdate"
					outlined
					readonly
					label="تاریخ تولد"
					dir="ltr"
					:color="$store.state.cPrimary"
					id="user-birthdate"
				></v-text-field>
				<date-picker 
					v-model="user.birthdate"
					element="user-birthdate"
					:color="$store.state.cPrimary"
				></date-picker>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="nationalCode"
					v-model="user.nationalCode"
					outlined
					disabled
					label="کد ملی"
					dir="ltr"
					:color="$store.state.cPrimary"
					:rules="[rules.number]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="birthCertificateNumber"
					v-model="user.birthCertificateNumber"
					outlined
					disabled
					label="شماره شناسنامه"
					dir="ltr"
					:color="$store.state.cPrimary"
					:rules="[rules.number]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-select
					v-model="graduation"
					:items="graduationList"
					item-text="type"
					item-value="index"
					label="تحصیلات"
					outlined
					return-object
					:color="$store.state.cPrimary"
				></v-select>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					v-model="user.jobTitle"
					outlined
					label="تخصص"
					:color="$store.state.cPrimary"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					v-model="user.occupation"
					outlined
					label="شغل"
					:color="$store.state.cPrimary"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="fundRange"
					v-model="user.fundRange"
					outlined
					label="حدود سرمایه درگیر"
					:color="$store.state.cPrimary"
					dir="ltr"
					:rules="[rules.number]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="bankAccount"
					v-model="user.bankAccount"
					outlined
					label="شماره حساب"
					:color="$store.state.cPrimary"
					dir="ltr"
					:rules="[rules.number]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="12" md="12" lg="12" class="info-title mb-3">
				<v-icon>mdi-minus</v-icon>
				اطلاعات تماس
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="homePhoneNumber"
					v-model="user.homePhoneNumber"
					outlined
					label="تلفن منزل"
					dir="ltr"
					:color="$store.state.cPrimary"
					:rules="[rules.number]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="workPhoneNumber"
					v-model="user.workPhoneNumber"
					outlined
					label="تلفن محل کار"
					:color="$store.state.cPrimary"
					dir="ltr"
					:rules="[rules.number]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="6" md="6" lg="4" class="cell">
				<v-text-field
					ref="postalCode"
					v-model="user.postalCode"
					outlined
					label="کد پستی"
					:color="$store.state.cPrimary"
					:rules="[rules.number]"
				></v-text-field>
			</v-col>
			<v-col cols="12" sm="12" md="12" lg="12" class="cell">
				<v-text-field
					v-model="user.address"
					outlined
					label="آدرس پستی"
					:color="$store.state.cPrimary"
				></v-text-field>
			</v-col>
			<v-col cols="3" sm="3" md="3" lg="6">
				<v-btn
					large
					depressed
					class="py-6 bg-main white--text"
					:loading="loading"
					@click="saveProfile()"
				>
					<v-icon class="head-icon">mdi-content-save</v-icon>
					ذخیره تغییرات
				</v-btn>
			</v-col>
			<v-col cols="9" sm="9" md="9" lg="6" class="text-left">
				<v-btn
					large
					depressed
					outlined
					class="py-6 format-main "
					color="#004a8a"
					@click.stop="updatePass = true"
				>
					<v-icon class="head-icon">mdi-lock</v-icon>
					تغییر رمز عبور
				</v-btn>
				<v-dialog v-model="updatePass" max-width="600">
					<DialogPassword :userId="userId" />
				</v-dialog>
				<v-btn
					large
					depressed
					outlined
					class="py-6 format-main "
					color="#004a8a"
					@click.stop="updateprofilePicture = true"
				>
					<v-icon class="head-icon">mdi-account-circle</v-icon>
					تغییر عکس پروفایل
				</v-btn>
				<v-dialog v-model="updateprofilePicture" max-width="600">
					<DialogPicture :userId="userId" />
				</v-dialog>
			</v-col>
		</template>
	</v-row>
</template>

<script>
  export default {
    props: ['userId'],
    data: () => ({  
      user: "",

      alert: {
        msg: "ورود موفقیت آمیز نبود",
        type: "error",
        show: false
      },

			gender: "",
			genderList: [
				{ index: 0, type: 'زن' },
				{ index: 1, type: 'مرد' },
			],

			graduation: "",
			graduationList: [
				{ index: 0, type: 'نامشخص' },
				{ index: 1, type: 'زیر دیپلم' },
				{ index: 2, type: 'دیپلم' },
				{ index: 3, type: 'فوق دیپلم' },
				{ index: 4, type: 'لیسانس' },
				{ index: 5, type: 'فوق لیسانس' },
				{ index: 6, type: 'دکترا' },
				{ index: 7, type: 'فوق دکترا' },
			],

			rules: {
				required: value => !!value || 'وارد کردن این فیلد الزامی است.',
				email: value => {
					const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					return (!value || pattern.test(value)) || 'ایمیل صحیح نیست.'
				},
        mobile: value => {
					const pattern = /^([0-9]{11,11})+$/
					return (!value || pattern.test(value)) || 'شماره موبایل صحیح نیست.'
        },
        phone: value => {
					const pattern = /^([0-9]{8,8})+$/
					return (!value || pattern.test(value)) || 'شماره تماس صحیح نیست.'
        },
        farsi: value => {
					const pattern = /^([\u0600-\u06FF ]+\s?)+$/
					return (!value || pattern.test(value)) || 'لطفا حروف فارسی وارد کنید.'
        },
				number: value => {
					const pattern = /^([0-9])+$/
					return (!value || pattern.test(value)) || 'لطفا عدد وارد کنید.'
        },
        latin: value => {
					const pattern = /^([A-Za-z])+$/
					return (!value || pattern.test(value)) || 'لطفا حروف انگلیسی وارد کنید.'
        },
        latinAndNum: value => {
					const pattern = /^([A-Za-z0-9])+$/;
					return (!value || pattern.test(value)) || 'لطفا حروف انگلیسی یا عدد وارد کنید.'
        },
			},
			hasError: false,
			loading: false,

    	updatePass: false,
    	updateprofilePicture: false,

			date: ''
    }),
    created: function () {
    	this.getProfile(this.userId);
    },
		methods: {
			getProfile(userId) {
				this.$axios.$get("/api/services/app/Account/GetProfile", {
					params: {
						userId: userId
					}
				})
				.then(response => {
					this.user = response.result;

					this.user.birthdate = this.$moment(this.user.birthdate.substr(0, this.user.birthdate.indexOf('T')), 'YYYY-MM-DD').format('jYYYY/jMM/jDD');

					for (var i=0; i <= this.genderList.length-1; i++) {
						if (this.genderList[i].index == response.result.genderType) {
							this.gender = this.genderList[i];
						}
        	}
					for (var i=0; i <= this.graduationList.length-1; i++) {
						if (this.graduationList[i].index == response.result.degreeType) {
							this.graduation = this.graduationList[i];
						}
        	}

				});
			},
			saveProfile() {
				this.hasError = false;
        Object.keys(this.form).forEach(f => {
          if (!this.$refs[f].validate()) {
						this.hasError = true;
						this.$refs[f].validate(true);
					}
        })
				if (!this.hasError) {
       		this.loading = true;
					this.$axios.$post("/api/services/app/Account/SaveProfile", {
						id: parseInt(this.userId),
						name: this.user.name,
						surname: this.user.surname,
						nickName: this.user.nickName,
						userName: this.user.userName,
						nationalCode: this.user.nationalCode,
						birthCertificateNumber: this.user.birthCertificateNumber,
						emailAddress: this.user.emailAddress,
						phoneNumber: this.user.phoneNumber,
						homePhoneNumber: this.user.homePhoneNumber,
						workPhoneNumber: this.user.workPhoneNumber,
						fundRange: this.user.fundRange,
						bankAccount: this.user.bankAccount,
						postalCode: this.user.postalCode,
						address: this.user.address,
						isActive: this.user.isActive,
						shouldChangePasswordOnNextLogin: this.user.shouldChangePasswordOnNextLogin,
						isTwoFactorEnabled: this.user.isTwoFactorEnabled,
						isLockoutEnabled: this.user.isLockoutEnabled,
						credit: this.user.credit,
						balance: this.user.balance,
						fundRange: this.user.fundRange,
						remainQuestionCount: this.user.remainQuestionCount,
						accessDaysCount: this.user.accessDaysCount,
						introduceType: this.user.introduceType,
						occupation: this.user.occupation,
						jobTitle: this.user.jobTitle,
						password: this.user.password,
						genderType: this.gender.index,
						degreeType: this.graduation.index,
						birthdate: this.$moment(this.user.birthdate, 'jYYYY/jMM/jDD').format('YYYY-MM-DD') + "T23:59:59.999",
					})
					.then(response => {
        		this.loading = false;
        		this.showAlert("success", "اطلاعات با موفقیت ذخیره شد.");
						this.$emit('trigger');
					})
					.catch(error => {
        		this.loading = false;
						this.showAlert("error", "اطلاعات ذخیره نشد!");
					});
				}
			},
      showAlert(type, msg) {
        this.alert = {
          type: type,
          msg: msg,
          show: true
        }
        setTimeout(() => {
          this.alert.show = false
        }, 3000)
      },
		},
		computed: {
      form () {
        return {
          name: this.user.name,
          surname: this.user.surname,
          nickName: this.user.nickName,
          nationalCode: this.user.nationalCode,
          birthCertificateNumber: this.user.birthCertificateNumber,
          emailAddress: this.user.emailAddress,
          phoneNumber: this.user.phoneNumber,
          homePhoneNumber: this.user.homePhoneNumber,
          workPhoneNumber: this.user.workPhoneNumber,
          fundRange: this.user.fundRange,
          bankAccount: this.user.bankAccount,
          postalCode: this.user.postalCode,
        }
      },
    },
  }
</script>

<style lang="scss" >
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.profile-content {

	.info-title {
		color: $c2;

		i {
			color: $c2;
		}
	}
}

</style>
