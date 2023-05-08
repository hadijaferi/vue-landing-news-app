<template>
	<v-card>
		<v-card-text class="dialog-form">
			<div class="dialog-text">
				<h1 class="d-block text-center">
					تغییر عکس پروفایل
				</h1>
				<p class="text-center">
					لطفا به منظور تغییر رمز عبور، اطلاعات زیر را وارد کنید.
				</p>
			</div>
			<v-row class="form pb-5">
				<v-col cols="12" md="8 offset-md-2" class="cell text-left">
					<v-file-input
						ref="profilePicture"
						v-model="profilePicture"
						outlined
						chips
						show-size
						:color="color"
						:rules="[rules.required]"
						dir="ltr"
						accept="image/png, image/jpeg, image/jpg"
					></v-file-input>
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
						تغییر عکس پروفایل
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
						عکس پروفایل با موفقیت تغییر کرد.
					</v-alert>
					<v-alert
						v-else-if="success == 0"
						color="red"
						text
						type="warning"
						class="py-4 mt-7 mb-0"
					>
						خطا در تغییر عکس پروفایل.
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
      profilePicture: "",

			rules: {
				required: value => !!value || 'وارد کردن این فیلد الزامی است.',
        size: value => value.size < 2000000 || 'Avatar size should be less than 2 MB!',
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
					this.$axios.$put("/api/services/app/Profile/UpdateProfilePicture", {
						"fileToken": this.profilePicture,
						"x": 0,
						"y": 0,
						"width": 0,
						"height": 0,
						"useGravatarProfilePicture": true
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
          profilePicture: this.profilePicture,
        }
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
