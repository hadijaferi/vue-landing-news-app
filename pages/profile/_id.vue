<template>
  <v-main class="grey lighten-4">
    <v-container class="profile">
      <BaseBreadcrumb :items="bcItems" />
      <client-only>
        <v-row v-if="authorized">
          <v-col cols="12" md="4" lg="3" class="side">
            <v-sheet class="py-5 px-3 mb-5 radius text-center">
              <v-row>
                <v-col class="photo-block" cols="5" sm="6" md="12">
                  <v-img
                    v-if="profilePicture"
                    :src="'data:image/jpeg;base64,' + profilePicture"
                    class="profile-photo"
                    :class="{ owner: owner }"
                    @click="owner ? updateprofilePicture = true : ''"
                  >
                  </v-img>
                  <v-icon
                    v-else
                    class="profile-avatar"
                    :class="{ owner: owner }"
                    @click="owner ? updateprofilePicture = true : ''"
                  >
                    mdi-account-circle
                  </v-icon>
                  <v-dialog v-model="updateprofilePicture" max-width="600">
                    <DialogPicture :userId="userId" />
                  </v-dialog>
                </v-col>
                <v-col v-if="userInfo" class="info-block" cols="7" sm="6" md="12">
                  <h1 class="profile-title">
                    {{ userInfo.name + " " + userInfo.surname }}
                  </h1>
                  <template v-if="owner">
                    <p class="profile-subtitle mt-3">
                      {{ userInfo.emailAddress }}
                    </p>
                    <p class="profile-subtitle mt-1">
                      {{ userInfo.phoneNumber }}
                    </p>
                  </template>
                  <v-btn
                    v-else
                    large
                    depressed
                    outlined
                    min-width="60%"
                    class="py-5 mt-3"
                    :color="$store.state.cSecondary"
                  >
                    <!-- <v-icon class="ml-1">mdi-plus-circle-outline</v-icon> -->
                    دنبال کنید
                  </v-btn>
                </v-col>
              </v-row>

              <v-divider class="mt-5"></v-divider>
              <v-list class="profile-list text-right" :class="{ fix: sideBar }">
                <v-list-item-group mandatory v-model="profileTab" :color="$store.state.cSecondary">
                  <template v-for="(item, index) in profileMenu">
                    <v-list-item
                      v-if="owner || item.public"
                      :key="index"
                      class="radius mt-1"
                      @click="sideBar = false"
                    >
                      <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-sheet>
          </v-col>
          <v-col cols="12" md="8" lg="9" class="main">
            <v-sheet class="radius">
              <v-tabs-items v-model="profileTab">
                <template v-for="(item, index) in profileMenu">
                  <v-tab-item
                    v-if="owner || item.public"
                    :key="index"
                    transition="fade-transition"
                    reverse-transition="fade-transition"
                  >
                    <BaseTitle
                      :title="item.text"
                      :icon="item.icon"
                      class="tab-title"
                    />
                    <ProfileInfo v-if="index == 0" :userId="userId" @trigger="getProfile(userId)" />
                    <ProfileComments v-else-if="index == 1" :userId="userId" />
                    <ProfileArticles v-else-if="index == 2" :userId="userId" :owner="owner" />
                    <ProfileAnalysis v-else-if="index == 3" :userId="userId" :owner="owner" />
                    <ProfileReceipts v-else-if="index == 4" :userId="userId" />
                    <ProfileGiftCards v-else-if="index == 5" :userId="userId" />
                    <ProfileWallet v-else-if="index == 6" :userId="userId" />
                  </v-tab-item>
                </template>
              </v-tabs-items>
            </v-sheet>
          </v-col>
          <v-btn depressed dark width="100%" class="profile-list-btn pa-7" @click="toggleSidebar">
            <template v-if="!sideBar">
              <v-icon class="ml-2">mdi-chevron-up</v-icon>
              نمایش منوی پروفایل
            </template>
            <template v-else>
              <v-icon class="ml-2">mdi-chevron-down</v-icon>
              بستن
            </template>
          </v-btn>
        </v-row>
        <v-row v-else-if="!authorized">
          <v-col cols="12">
            <BaseNote type="notAuthorized" class="mt-0" />
          </v-col>
        </v-row>
      </client-only>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data: () => ({
    bcItems: [
      {
        text: "پروفایل کاربری",
        disabled: false,
        href: ""
      }
    ],

    profileTab: 0,
    profileMenu: [
      {
        icon: "mdi-account-outline",
        text: "ویرایش اطلاعات شخصی",
        public: false
      },
      {
        icon: "mdi-comment-text-outline",
        text: "نظرات من",
        public: true
      },
      {
        icon: "mdi-book-open-outline",
        text: "مقالات من",
        public: true
      },
      {
        icon: "mdi-chart-line",
        text: "تحلیل‌های من",
        public: true
      },
      {
        icon: "mdi-clipboard-text-outline",
        text: "فیش‌های پرداختی",
        public: false
      },
      {
        icon: "mdi-credit-card-outline",
        text: "کارت‌های هدیه",
        public: false
      },
      {
        icon: "mdi-wallet-outline",
        text: "جزییات موجودی",
        public: false
      },
    ],

    userId: "",
    userInfo: "",
    profilePicture: "",
    updateprofilePicture: false,
    sideBar: false,
    authorized: true,
    owner: true,
  }),
  created: function() {
    if (this.$route.params.id) {
      this.userId = this.$route.params.id;
      if (this.$store.state.localStorage.userId) {
        if (this.$store.state.localStorage.userId != this.$route.params.id) {
          this.owner = false;
        }
        this.getProfile(this.userId);
        this.getProfilePic(this.userId);
      } else {
        this.authorized = false;
      }
    } else {
      if (this.$store.state.localStorage.userId) {
        this.userId = this.$store.state.localStorage.userId;
        this.getProfile(this.userId);
        this.getProfilePic(this.userId);
      } else {
        this.authorized = false;
      }
    }
  },
  methods: {
    getProfile(userId) {
      this.$axios.$get("/api/services/app/Account/GetProfile", {
        params: {
          userId: userId
        }
      })
      .then(response => {
        this.userInfo = response.result;
        this.bcItems[0].text = "پروفایل کاربری " + this.userInfo.name + " " + this.userInfo.surname;
      });
    },
    getProfilePic(userId) {
      this.$axios.$get("/api/services/app/Profile/GetProfilePictureByUser", {
        params: {
          userId: userId
        }
      })
      .then(response => {
        this.profilePicture = response.result.profilePicture;
      });
    },
    toggleSidebar() {
      this.sideBar = !this.sideBar;
      if (this.sideBar) {
        document.body.classList.add("lock-scrollbar");
      } else {
        document.body.classList.remove("lock-scrollbar");
      }
    },
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/_variables.scss";
@import "~/assets/scss/_mixins.scss";


.profile {

  .side {
    @include res(sm) {
      padding: 10px 0 0 0!important;
    }

    .profile-list {

      @include res(sm) {
        position: fixed;
        bottom: -100%;
        left: 0;
        width: 100%;
        background: #eee;
        z-index: 999;
        overflow: scroll;
        padding: 15px 15px 70px 15px!important;
        transition: 0.3s;
      }

      &.fix {
        bottom: 0;
        border-top: 1px solid $c2;
        box-shadow: 0 0 50px 10px rgba(77, 77, 119, 0.4) !important;
      }
    }

    .v-list-item__icon {
      margin-left: 15px !important;
    }

    .v-list-item__title {
      font-size: 14px !important;
    }

    .v-sheet {
      @include res(sm) {
        border-radius: 0!important;
        margin-bottom: 0!important;;
      }
    }

    .v-divider {
      @include res(sm) {
        display: none;
      }
    }

    .photo-block {
      padding-bottom: 0!important;

      @include res(sm) {
        padding-bottom: 12px!important;
      }

      .profile-photo {
        border: 5px solid $cw;
        box-shadow: 0 10px 50px 5px rgba(77, 77, 119, 0.4) !important;
        border-radius: 50%;
        margin: 7px auto 15px auto;
        width: 145px;
        height: 145px;
        transition: 0.1s;

        @include res(sm) {
          margin: 10px 0 10px 0;
          width: 120px;
          height: 120px;
          float: left;
        }

        @include res(xs) {
          width: 100px;
          height: 100px;
        }

        &.owner {
          cursor: pointer;

          &:hover {
            border: 5px solid $c2;
          }
        }
      }

      .profile-avatar {
        font-size: 140px;
        color: $c2;
        cursor: default;

        @include res(sm) {
          margin: 10px 0;
          font-size: 120px;
          float: left;
        }

        @include res(xs) {
          font-size: 100px;
        }

        &.owner {
          cursor: pointer;
        }
      }
    }

    .info-block {
      padding-top: 0!important;

      @include res(sm) {
        display: flex;
        justify-content: center;
        align-items: baseline;
        flex-direction: column;
        padding-top: 12px!important;
      }

      .profile-title {
        font-size: 25px;
        font-family: $f-b;
        color: $c2;

        @include res(xs) {
        font-size: 18px;
        }
      }

      .profile-subtitle {
        color: #666;
        font-size: 13px;
      }
    }

  }

  .main {
    @include res(sm) {
      padding: 0!important;
    }

    .tab-title {
      margin: 40px 30px 0 30px!important;

      @include res(md) {
        margin: 30px 15px 0 15px!important;
      }

      @include res(sm) {
        margin: 30px 0 0 0!important;
      }

      @include res(sm) {
        margin: 0!important;
      }
    }

    .v-sheet {
      @include res(sm) {
        border-radius: 0!important;
      }
    }

    .profile-content {
      padding: 25px 40px 60px 40px!important;

      @include res(md) {
        padding: 20px 25px 40px 25px!important;
      }

      @include res(sm) {
        padding: 20px 15px 30px 15px!important;
      }

      .cell {
        padding-top: 0 !important;
        padding-bottom: 0 !important;
      }
    }

    .profile-table {
      box-shadow: 0 10px 50px 5px rgba(77, 77, 119, 0.1) !important;
      border-radius: 8px !important;
      overflow: hidden !important;

      @include res(xs) {
        box-shadow: 0 0 0 0 !important;
      }

      tr {
        &:hover {
          background: #f6f6f6!important;
        }
      }

      th,
      td {
        text-align: center !important;
      }

      td {
        padding: 7px 15px !important;
        font-size: 13px !important;
        line-height: 22px;

        @include res(md) {
          padding: 7px 10px!important;
        }

        @include res(sm) {
          min-height: 30px!important;;
        }

        @include res(xs) {
          padding: 0!important;
        }

        .v-btn {
          font-size: 13px !important;
          background: #e0f7f7 !important;
          color: $c1;

          @include res(xs) {
            padding: 0 !important;
            background: $cw !important;

              &:before {

                background: $cw !important;
              }
          }
        }
      }

      thead {
        @include res(xs) {
          display: none;
        }

        tr {
          th {
            background: $c1;
            color: $cw !important;
            font-size: 14px !important;
            height: 50px !important;
          }
        }
      }
    }
  }

  .profile-list-btn {
    display: none;
    background: $c2!important;

    @include res(sm) {
      display: flex;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border-radius: 0!important;
      z-index: 999;
    }
  }
}


</style>
