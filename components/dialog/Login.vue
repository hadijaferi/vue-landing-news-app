<template>
	<v-card>
		<client-only>
			<BaseAlert :msg="alert.msg" :type="alert.type" v-show="alert.show" />
		</client-only>
		<v-card-text class="login">
			<v-row>
				<v-col md="6" lg="5" class="login-form">
						<div class="login-text">
							<h1 class="d-block text-center">
								ورود/ثبت‌نام
							</h1>
							<p>
								جهت ورود لطفا نام کاربری و رمز عبور خود را وارد کنید.
							</p>
						</div>
						<v-text-field
							v-model="username"
							label="نام کاربری"
							:color="$store.state.cPrimary"
							required
							outlined
							prepend-inner-icon="mdi-account-outline"
							@keyup.enter="login()"
						></v-text-field>
						<v-text-field
							v-model="password"
							name="input-10-1"
							label="رمز عبور"
							:color="$store.state.cPrimary"
							required
							outlined
							prepend-inner-icon="mdi-key-outline"
							:append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
							:type="showPass ? 'text' : 'password'"
							@click:append="showPass = !showPass"
							@keyup.enter="login()"
						></v-text-field>
						<div class="op">
							<v-btn
								elevation="0"
								width="100%"
								class="py-7 submit bg-main white--text"
								:loading="loading"
								@click="login()"
							>
								<span>
									ورود به همتا
								</span>
							</v-btn>
							<!-- <v-btn
								elevation="0"
								width="100%"
								class="mt-3 py-7 submit"
								color="grey darken-2"
								outlined
							>
								<span>
									ثبت‌نام
								</span>
							</v-btn> -->
							<!-- <span class="forget-pass">
								<a href="#">فراموشی رمز عبور</a>
							</span> -->
						</div>
				</v-col>
				<v-col md="6" lg="7" class="login-photos  d-none d-md-flex">
					<v-img src="../img/sample/3.jpg" height="100%"></v-img>
					<!-- <h2>
							خوش آمدید!
					</h2> -->
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script>
  export default {
    data: () => ({  
      username: "",
      password: "",
      showPass: false,
      loading: false,

      alert: {
        msg: "ورود موفقیت آمیز نبود",
        type: "error",
        show: false
      },

    }),
		methods: {
      login() {
        this.loading = true;
        this.$axios.$post('/api/TokenAuth/Authenticate', {
          "userNameOrEmailAddress": this.username,
          "password": this.password,
          "twoFactorVerificationCode": "string",
          "rememberClient": true,
          "twoFactorRememberClientToken": "string",
          "singleSignIn": true,
          "returnUrl": "string",
          "captchaResponse": "string"
        })
        .then(response => {
          this.$store.commit('localStorage/userId', response.result.userId);
          this.$store.commit('localStorage/afterLogin', true);
          this.$store.commit('localStorage/accessToken', response.result.accessToken);
          this.$store.commit('localStorage/refreshToken', response.result.refreshToken);
          this.$store.commit('localStorage/expireInSeconds', this.$moment().add(response.result.expireInSeconds, 'seconds').format('YYYY-MM-DDThh:mm:ss'));
          this.$store.commit('localStorage/encryptedAccessToken', response.result.encryptedAccessToken);
          this.$store.commit('localStorage/refreshTokenExpireInSeconds', this.$moment().add(response.result.refreshTokenExpireInSeconds, 'seconds').format('YYYY-MM-DDThh:mm:ss'));
          if(process.client) {
            location.reload();
          } 
        })
        .catch(error => {
          this.showAlert("error", "ورود موفقیت آمیز نبود!");
          this.loading = false;
        })
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
  }
</script>

<style lang="scss" >
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.login {
  margin: 0;
  padding: 0!important;

	.login-form {
    border-left: 1px solid #eee;
    padding: 100px 112px 112px 100px!important;


    @include res(xs) {
      padding: 52px 40px 40px 40px!important;
    }

    @include res(400px) {
      padding: 50px 25px 35px 25px!important;
    }

		.login-text {
			margin-bottom: 40px;

      @include res(sm) {
        margin-bottom: 20px;
      }

			h1 {
        margin-bottom: 30px;
				color: $c1;
        font-family: $f-bl;
        font-size: 35px;

        @include res(sm) {
          font-size: 24px;
          margin-bottom: 15px;
        }
			}

      p {
        text-align: justify;
        line-height: 25px;
      }
		}
	
		.op {
			margin-top: 10px;
	
			.forget {
		
				a {
					transition: 0.3s;
					color: #aaa;
	
					&:hover {
						color: $c1;
					}
				}
			}
	
			.submit {
        font-size: 16px!important;

        span {
          font-family: $f-m!important;
        }
			}
		}

    .forget-pass {
      display: block;
      text-align: center;
      color: #aaa;
      margin-top: 20px;

      a {
        padding-bottom: 5px;
        border-bottom: 1px dashed #aaa;
      }

      &:hover {
        color: #666;

        a {
          border-bottom: 1px dashed #666;
        }
      }
    }
	}

	.login-photos {
    position: relative;
		padding: 0;
    background: #eee;
			
    h2 {
      position: absolute;
      bottom: 120px;
      right: 50px;
      color: $cw;
      font-family: $f-bl;
      font-size: 50px;
      text-shadow: 0px 0px 10px rgba(0,0,0,0.4);
    }
	}
}

</style>
