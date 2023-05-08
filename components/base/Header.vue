<template>
  <div>
    <client-only>
      <BaseAlert :msg="alert.msg" :type="alert.type" v-show="alert.show" />
    </client-only>
    <v-app-bar app :class="{ 'no-color': ($nuxt.$route.name == 'index') && !scrolled }">
      <v-container class="py-0 fill-height d-md-none">
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-avatar size="40">
          <BaseLogo class="logo" />
        </v-avatar>
      </v-container>
      <v-container class="py-0 fill-height d-none d-md-flex">
        <v-avatar class="ml-5" size="45">
          <BaseLogo class="logo" />
        </v-avatar>
        <v-btn v-for="link in $store.state.menu" :key="link.name" class="header-link" text>
          <NuxtLink :to="link.route">{{ link.name }}</NuxtLink>
        </v-btn>
        <v-spacer></v-spacer>
        <v-responsive class="search-section">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
            v-model="searchWord"
            placeholder="جستجو..."
            class="search-input ml-5"
            @keyup.enter="search"
          ></v-text-field>
        </v-responsive>
        <client-only>
          <v-btn
            v-if="!authorized"
            @click="loginRedirect"
            outlined
            color="grey lighten-3"
            class="pa-5"
            min-width="100px"
          >
            <v-icon>mdi-account-outline</v-icon>
            ورود
          </v-btn>
          <v-btn
            v-if="!authorized"
            @click.stop="loginDialog = true"
            outlined
            color="grey lighten-3"
            class="pa-5"
            min-width="100px"
          >
            <v-icon>mdi-account-outline</v-icon>
            ورود
          </v-btn>
          <div v-else class="user-menu-area">
            <v-menu transition="fade-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  outlined
                  color="grey lighten-3"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon>mdi-chevron-down</v-icon>
                  <v-icon>mdi-account-circle</v-icon>
                </v-btn>
              </template>
              <v-list nav flat class="user-menu">
                <v-subheader>منوی کاربری</v-subheader>
                <v-list-item-group>
                  <v-list-item v-for="(item, i) in userMenu.items" :key="i">
                    <v-list-item-content>
                      <v-list-item-title>
                        <NuxtLink :to="item.route">
                          <v-icon>{{ item.icon }}</v-icon>
                          {{ item.text }}
                        </NuxtLink>
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                  <v-list-item @click="logout()">
                    <v-list-item-content>
                      <v-list-item-title>
                        <v-icon>mdi-exit-to-app</v-icon>
                        خروج از سیستم
                      </v-list-item-title>
                    </v-list-item-content>
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-menu>
          </div>
          <v-dialog v-model="loginDialog" max-width="1100">
				    <DialogLogin />
          </v-dialog>
        </client-only>
      </v-container>
    </v-app-bar>
    <v-navigation-drawer
      class="drawer"
      v-model="drawer"
      absolute
      temporary
      right
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          :color="$store.state.cPrimary"
        >
          <v-list-item v-for="link in $store.state.menu" :key="link.name" class="pa-0" :class="{ 'v-list-item--active': $nuxt.$route.path == link.route }">
            <NuxtLink :to="link.route" class="d-flex py-2 pr-8 list-link">
              <v-list-item-icon class="ml-5">
                <v-icon>{{ link.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ link.name }}</v-list-item-title>
            </NuxtLink>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <v-spacer></v-spacer>
      <div class="mt-6 px-3 text-right">
        <client-only>
          <v-btn
            v-if="!authorized"
            @click="loginRedirect"
            outlined
            depressed
            :color="$store.state.cPrimary"
            class="py-6 pr-8"
            width="100%"
          >
            <v-icon class="ml-5">mdi-account-outline</v-icon>
            ورود
          </v-btn>
          <!-- <v-btn
            v-if="!authorized"
            @click.stop="loginDialog = true"
            outlined
            depressed
            :color="$store.state.cPrimary"
            class="py-6 pr-8"
            width="100%"
          >
            <v-icon class="ml-5">mdi-account-outline</v-icon>
            ورود
          </v-btn> -->
          <template v-else>
            <div v-for="(item, i) in userMenu.items" :key="i">
              <NuxtLink :to="item.route">
                <v-btn
                  outlined
                  depressed
                  :color="$store.state.cPrimary"
                  class="py-6 pr-8"
                  width="100%"
                >
                  <v-icon class="ml-5">{{ item.icon }}</v-icon>
                  {{ item.text }}
                </v-btn>
              </NuxtLink>
            </div>
            <v-btn
              @click="logout()" 
              outlined
              depressed
              color="red lighten-2"
              class="py-6 mt-5 pr-8"
              width="100%"
            >
              <v-icon class="ml-5">mdi-exit-to-app</v-icon>
              خروج از سایت
            </v-btn>
          </template>
        </client-only>
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
          v-model="searchWord"
          placeholder="جستجو..."
          class="search-input res mt-6"
          @keyup.enter="search"
        ></v-text-field>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    data: () => ({
      userMenu: {
        status: false,
        items: [
          {
            text: 'مشاهده پروفایل',
            icon: 'mdi-account-outline',
            route: '/profile',
          },
        ],
      },

      loginDialog: false,
      authorized: false,

      alert: {
        msg: "ورود موفقیت آمیز نبود",
        type: "error",
        show: false
      },

      scrolled: false,
      drawer: false,
      group: null,

      searchWord: '',
      currentUrl: ''
    }),
    created: function () {

      if (process.client && this.$store.state.localStorage.accessToken != null) {
        this.$axios.setToken(this.$store.state.localStorage.accessToken, 'Bearer');
        this.authorized = true;
        // if (this.$moment().isAfter(this.$store.state.localStorage.expireInSeconds, "YYYY-MM-DDThh:mm:ss")) {
        //   this.refreshToken();
        // }
        // if (this.$moment().isAfter(this.$store.state.localStorage.refreshTokenExpireInSeconds, "YYYY-MM-DDThh:mm:ss")) {
        //   this.logout();
        // }
      }

      if (this.$store.state.localStorage.afterLogin) {
        this.showAlert("success", "با موفقیت وارد شدید.");
        this.$store.commit('localStorage/afterLogin', false);
        this.$route.query.accessToken = null;
      }

      // if (process.client && this.$route.query.accessToken) {
      //   this.login(this.$route.query.accessToken, this.$route.query.userId, this.$route.query.tenantId);
      // }

    },
    beforeMount () {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      refreshToken() {
        this.$axios.$post('/api/TokenAuth/RefreshToken?refreshToken=' + this.$store.state.localStorage.refreshToken)
        .then(response => {
          this.$store.commit('localStorage/accessToken', response.result.accessToken);
          this.$store.commit('localStorage/expireInSeconds', response.result.expireInSeconds);
          this.$store.commit('localStorage/encryptedAccessToken', response.result.encryptedAccessToken);
        })
      },
      loginRedirect() {
        if (process.client) {
          this.currentUrl = window.location.href;
          window.location.href = 'https://admin.hamfekran.com/account/login?ss=true&returnUrl=' + this.currentUrl;
        }
      },
      // login(accessToken, userId, tenantId) {
      //   this.$axios.$post('/api/TokenAuth/GetCurrentUserTokens?AccessToken=' + accessToken + '&UserId=' + userId + '&TenantId=' + tenantId)
      //   .then(response => {
      //     if(process.client) {
      //       userId = window.atob(userId)
      //     } 
      //     this.$store.commit('localStorage/userId', userId);
      //     this.$store.commit('localStorage/accessToken', response.result.accessToken);
      //     this.$store.commit('localStorage/afterLogin', true);
      //     if(process.client) {
      //       location.reload();
      //     } 
      //   })
      //   .catch(error => {
      //     if (error) {
      //       this.showAlert("error", "ورود موفقیت آمیز نبود!");
      //     }
      //   })
      // },
      // logout() {
      //   this.$axios.$get('/api/TokenAuth/LogOut')
      //   .then(response => {
      //     this.$store.commit('localStorage/accessToken', null);
      //     this.$store.commit('localStorage/refreshToken', null);
      //     this.$store.commit('localStorage/expireInSeconds', null);
      //     this.$store.commit('localStorage/refreshTokenExpireInSeconds', null);
      //     this.$store.commit('localStorage/userId', null);
      //     this.$store.commit('localStorage/afterLogin', null);
      //     this.$axios.setToken(false);
      //     if(process.client) {
      //       location.reload(); 
      //     }
      //   })
      // },
      search() {
        if (this.searchWord != null && this.searchWord.replace(/\s/g, '').length > 1) {
          this.$router.push("/search/" + this.searchWord);
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
      handleScroll() {
        if (process.client) {
          if (document.documentElement.scrollTop >= 50) {
            this.scrolled = true;
          } else {
            this.scrolled = false;
          }
        }
      },
    }
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

header {
  background: rgba($c1, 0.95)!important;
  z-index: 999!important;
  transition: .5s!important;
  transition-delay: 0s!important;

  .nuxt-link-exact-active {
    background: darken($c1, 3%);
    color: $cw!important;
  }
  
  .logo {
    filter: grayscale(100%) brightness(0%) invert(1);
  }

  &.no-color {
    background-color: transparent!important;
    box-shadow: none!important;
    transition: .5s!important;
    transition-delay: .5s!important;

    @include res(sm) {
      background: rgba($c1, 0.95)!important;
    }
  }

  .mdi-menu {
    color: $cw!important;
  }

  .header-link {
    padding: 0!important;
    height: auto!important;
    margin-left: 2px;
    overflow: hidden;

    a {
      padding: 10px 15px!important;
      min-width: 100px;
      color: $cw!important;
      font-family: $f-m;

      @include res(md) {
        padding: 10px!important;
        min-width: auto;
      }
    }
  }
}

.search-section {
  max-width: 260px;

  @include res(md) {
    max-width: 150px;
  }
}

.search-input {
  font-size: 14px!important;

  input {
    min-height: 42px!important;
    max-height: 42px!important;
    padding: 0!important;
    color: $cw!important;
  }

  &.res {
    font-size: 16px!important;

    input {
      min-height: 50px!important;
      max-height: 50px!important;
    }
  }
}

.user-menu-area {
  position: relative;

  .v-btn {
    padding: 20px!important;
  }

  .v-icon {
    font-size: 32px!important;
  }
}

.v-menu__content {
  margin-top: 60px;
  box-shadow: 0 10px 50px 5px rgba(77,77,119,.3) !important;
  border-radius: 8px;
}

.user-menu {
  min-width: 270px;
  direction: ltr;
  border-radius: 8px!important;

  .v-list-item {
    padding: 0!important;
    border-radius: 8px!important;
    min-height: 40px!important;
    margin-bottom: 0!important;

    &:hover {
      background: #eee;
    }

    &:before {
      border-radius: 8px;
    }

    .v-list-item__content {
      padding: 0!important;

      .v-list-item__title {
        min-height: 30px!important;
        line-height: 3.3!important;
        font-size: 14px!important;

        a {
          width: 100%;
          display: block;
          border-radius: 8px!important;
        }
      }

      i {
        margin-left: 12px!important;
        margin-right: 15px!important;
        font-size: 28px;
        color: #333!important;
      }
    }
  }
}

.drawer {
  position: fixed;
	margin-top: 56px;
	background: rgba(255, 255, 255, 0.95) none repeat scroll 0% 0% !important;
  z-index: 99;

  .v-btn__content {
    justify-content: right;
  }

  .list-link {
    width: 100%;
  }

  .v-list {
    padding: 12px!important;
  }

  .v-list--nav .v-list-item,
  .v-list--nav .v-list-item {
    &:before {
      border-radius: 8px !important;
    }
  }
}

</style>
