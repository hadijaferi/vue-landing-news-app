<template>

  <v-row class="top-members">
    <v-col>
      <div class="inner">
        <div class="member" v-for="n in 5">
          <NuxtLink to="/profile/3">
            <v-row>
              <v-col md="4" class="photo-block">
                <v-img
                  v-if="profilePicture"
                  :src="'data:image/jpeg;base64,' + profilePicture"
                  class="profile-photo"
                >
                </v-img>
                <v-icon
                  v-else
                  class="profile-avatar"
                >
                  mdi-account-circle
                </v-icon>
              </v-col>
              <v-col md="8" class="info-block">
                <span class="name mt-1">{{ userInfo.name + " " + userInfo.surname }}</span>
                <span class="status mt-1">پاسخ صحیح: <small>58</small></span>
              </v-col>
            </v-row>
          </NuxtLink>
        </div>
      </div>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    props: ['items'],
    data: () => ({
      userInfo: "",
      profilePicture: "",
    }),
    created: function () {
      this.getProfile();
      this.getProfilePic();
    },
    methods: {
      getProfile() {
        this.$axios.$get("/api/services/app/Account/GetProfile", {
          params: {
            userId: 3
          }
        })
        .then(response => {
          this.userInfo = response.result;
        });
      },
      getProfilePic() {
        this.$axios.$get("/api/services/app/Profile/GetProfilePictureByUser", {
          params: {
            userId: 3
          }
        })
        .then(response => {
          this.profilePicture = response.result.profilePicture;
        });
      },
    },
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.top-members {

  .inner {
    padding: 10px 10px;
    background: #f8f8f8;

    .member {
      border-radius: 8px;

      &:hover {
        background: $cw;
      }

      a {
        display: block;
        padding: 7px 10px 10px 10px;
      }
    }

    .photo-block {
      text-align: center;

      .profile-photo {
        border: 3px solid $cw;
        box-shadow: 0 2px 15px 3px rgba(77, 77, 119, 0.4) !important;
        border-radius: 50%;
        width: 100%;
        transition: 0.1s;
      }

      .profile-avatar {
        font-size: 50px;
        color: $c2;
        cursor: default;
      }
    }

    .info-block {

      .name {
        display: block;
        font-family: $f-b;
      }

      .status {
        display: block;
        font-size: 13px;

        small {
          font-size: 13px;
          color: $c1;
        }
      }
    }

  }
}

</style>
