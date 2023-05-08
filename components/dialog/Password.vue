<template>
	<v-card>
		<v-card-text class="dialog-form">
			<div class="dialog-text">
				<h1 class="d-block text-center">
					تغییر رمز عبور
				</h1>
				<p class="text-center">
					لطفا به منظور تغییر رمز عبور، اطلاعات زیر را وارد کنید.
				</p>
			</div>
			<v-row class="form pb-5">
				<v-col cols="12" md="8 offset-md-2" class="cell">
					<v-text-field
						ref="currentPass"
						v-model="currentPass"
						outlined
						label="رمز عبور فعلی"
						:color="$store.state.cPrimary"
						:append-icon="showCurrentPass ? 'mdi-eye' : 'mdi-eye-off'"
						:type="showCurrentPass ? 'text' : 'password'"
						@click:append="showCurrentPass = !showCurrentPass"
						:rules="[rules.required]"
					></v-text-field>
				</v-col>
				<v-col cols="12" md="8 offset-md-2" class="cell">
					<v-text-field
						ref="newPassOne"
						v-model="newPassOne"
						outlined
						label="رمز عبور جدید"
						:color="$store.state.cPrimary"
						:append-icon="showNewPassOne ? 'mdi-eye' : 'mdi-eye-off'"
						:type="showNewPassOne ? 'text' : 'password'"
						@click:append="showNewPassOne = !showNewPassOne"
						:rules="[rules.required, rules.complex, passConfirm]"
					></v-text-field>
				</v-col>
				<v-col cols="12" md="8 offset-md-2" class="cell">
					<v-text-field
						ref="newPassTwo"
						v-model="newPassTwo"
						outlined
						label="تکرار رمز عبور جدید"
						:color="$store.state.cPrimary"
						:append-icon="showNewPassTwo ? 'mdi-eye' : 'mdi-eye-off'"
						:type="showNewPassTwo ? 'text' : 'password'"
						@click:append="showNewPassTwo = !showNewPassTwo"
						:rules="[rules.required, rules.complex, passConfirm]"
					></v-text-field>
				</v-col>
				<v-col v-if="success != 1" cols="12" md="8 offset-md-2 text-center cell">
					<v-btn
						large
						depressed
						width="100%"
						class="py-7 submit bg-main white--text"
						:loading="loading"
						@click="changePass()"
					>
						تغییر رمز عبور
					</v-btn>
				</v-col>
				<v-col cols="12" md="8 offset-md-2" class="dialog-part">
					<v-alert
						v-if="success == 1"
						color="green"
						text
						type="success"
						class="py-4 mb-0"
					>
						رمز عبور با موفقیت تغییر کرد.
					</v-alert>
					<v-alert
						v-else-if="success == 0"
						color="red"
						text
						type="warning"
						class="py-4 mt-7 mb-0"
					>
						رمز عبور فعلی اشتباه است.
					</v-alert>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script>
  export default {
    props: ['userId'],
    data: () => ({  
      currentPass: "",
      newPassOne: "",
      newPassTwo: "",

			showCurrentPass: false,
			showNewPassOne: false,
			showNewPassTwo: false,

			rules: {
				required: value => !!value || 'وارد کردن این فیلد الزامی است.',
				complex: value => value.length >= 6 || 'رمز عبور باید حداقل ۶ کارکتر باشد.',
			},
			hasError: false,
			loading: false,
			success: null,

    }),
    created: function () {

    },
		methods: {
			changePass() {
				this.hasError = false;
        Object.keys(this.form).forEach(f => {
          if (!this.$refs[f].validate()) {
						this.hasError = true;
						this.$refs[f].validate(true);
					}
        })
				if (!this.hasError) {
       		this.loading = true;
					this.$axios.$post("/api/services/app/Profile/ChangePassword", {
						currentPassword: this.currentPass,
						newPassword: this.newPassOne,
					})
					.then(response => {
        		this.loading = false;
        		this.success = 1;
					})
					.catch(error => {
        		this.loading = false;
        		this.success = 0;
					});
				}
			},
		},
		computed: {
      form () {
        return {
          currentPass: this.currentPass,
          newPassOne: this.newPassOne,
          newPassTwo: this.newPassTwo,
        }
      },
			passConfirm() {
				return () => (this.newPassOne === this.newPassTwo) || 'رمز عبور و تکرار آن تطابق ندارند.'
			}
    },
  }
</script>

<style lang="scss" >
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.form {
  .cell {
    padding-top: 0 !important;
    padding-bottom: 0 !important;
  }
}

</style>
