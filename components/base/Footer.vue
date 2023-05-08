<template>
  <v-footer>
    <v-container class="top">
      <v-row>
        <v-col cols="12" sm="12" md="12" lg="6" class="footer-about">
          <BaseLogo class="logo" />
          <p>
            <b>شرکت مشاور سرمایه‌گذاری آوای آگاه</b>
           (سهامی خاص) در تاریخ 1389/9/17 تأسیس شده و طی شماره 391930 در اداره ثبت شرکت‌های تهران به ثبت رسیده است.
          </p>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="2">
          <h5>منوی اصلی</h5>
          <ul class="footer-default-list">
            <li v-for="link in $store.state.menu" :key="link.name">
              <NuxtLink :to="link.route">
                <v-icon class="delete_underLine"  >mdi-minus</v-icon>
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="4">
          <h5>ارتباط با ما</h5>
          <ul class="footer-default-list">
            <li>
              <v-icon>mdi-map-marker-outline</v-icon>
              تهران، خیابان نلسون ماندلا، بالاتر از میرداماد، بن‌بست پیروز، پلاک 13، طبقه اول
            </li>
            <li>
              <v-icon>mdi-phone-outline</v-icon>
              آوای آگاه: 91004004
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="bottom">
      <v-row>
        <v-col cols="12" sm="9" md="7">
          <p>©کلیه حقوق متعلق به شرکت مشاور سرمایه گذاری آوای آگاه است.</p>
        </v-col>
        <v-col cols="12" sm="3" md="5" class="social">
          <ul>
            <li>
              <a href="https://t.me/AgahMoshaver">
                <v-icon>mdi-telegram</v-icon>
              </a>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({

    }),
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

footer {
  padding: 0;
  background: #191919!important;
  color: #ccc!important;
  display: flex;
  flex-direction: column;
  font-size: 14px;

  .top {
    padding: 60px 15px 45px 15px;

    @include res(md) {
      padding: 25px 15px;
      text-align: center;
    }
    .delete_underLine {
      @include res(sm) {
        display: none;
      }
    }

    .footer-about {
      padding-right: 25px;
      padding-left: 75px;

      @include res(md) {
        padding-left: 15px;
      }
      
      .logo {
        max-width: 90px;
        filter: grayscale(100%) contrast(1000%) invert(1)
      }
    }

    p {
      font-weight: lighter;
      line-height: 30px;

      b {
        font-weight: 900;
      }
    }

    h5 {
      color: #eee;
      font-size: 16px;
      font-weight: bolder;
      line-height: 3;
    }

    ul {
      li {
        line-height: 2;
        font-weight: lighter;

        i {
          color: #aaa;
        }

        a {
          &:hover {
            color: $cw!important;
          }
        }
      }
    }    
  }

  .bottom {
    position: relative;

    @include res(md) {
      padding-bottom: 25px;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 15px;
      width: calc(100% - 30px);
      height: 1px;
      background: #666;
    }

    p {
      margin-top: 20px;
      margin-bottom: 60px;
      color: #aaa;
      font-size: 14px;
    }

    & > div {
      @include res(xs) {
        text-align: center;
      }
    }

    .social {
      text-align: left;

      @include res(xs) {
        padding-top: 0;
        text-align: center;
      }
        
      ul {
        padding-left: 0;

        li {
            display: inline-block;

          a {
              position: relative;
              display: inline-block;
              margin-right: 20px;
              
              @include res(xs) {
                margin: 0 10px;
              }

            i {
              color: #aaa;
              font-size: 20px;

              &:hover {
                color: $cw!important;
              }
            }
          }
        }
      }
    }
  }
}

</style>
