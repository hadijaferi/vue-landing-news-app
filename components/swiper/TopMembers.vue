<template>

  <v-row class="top-members">
    <v-col>
      <div class="inner">
        <div v-swiper="swiperOption" dir="rtl">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(slide, index) in 6" :key="index">
              <div class="member">
                <NuxtLink to="/profile/3">
                  <div md="4" class="photo-block">
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
                  </div>
                  <div md="8" class="info-block">
                    <span class="name mt-1">{{ userInfo.name + " " + userInfo.surname }}</span>
                    <span class="status mt-1">پاسخ صحیح: <small>58</small></span>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </div>
      </div>
    </v-col>
  </v-row>

</template>

<script>
import { directive } from "vue-awesome-swiper";
export default {
  directives: {
    swiper: directive,
  },
  data: () => ({
		swiperOption: {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: false,	
			autoplay: {
				delay: 4000,
				disableOnInteraction: true
			},
			pagination: {
			  el: ".swiper-pagination",
			  clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		},

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
    padding: 10px 10px 0 10px;
    background: #f8f8f8;

    .member {
      border-radius: 8px;
      margin-bottom: 42px;

      &:hover {
        background: $cw;
      }

      a {
        display: block;
        padding: 7px 10px 15px 10px;
      }
    }

    .photo-block {
      text-align: center;

      .profile-photo {
        border: 5px solid $cw;
        box-shadow: 0 7px 25px 3px rgba(77, 77, 119, 0.4) !important;
        border-radius: 50%;
        margin: 7px auto 15px auto;
        width: 100px;
        height: 100px;
        transition: 0.1s;
      }

      .profile-avatar {
        font-size: 50px;
        color: $c2;
        cursor: default;
      }
    }

    .info-block {
      text-align: center;

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

  .swiper-button-next,
  .swiper-button-prev {

    &:after {
      font-size: 20px!important;
    }
  }
}

</style>
