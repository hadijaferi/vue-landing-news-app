<template>
   <v-main>
    <v-container>

      <BaseBreadcrumb :items="bcItems" />

      <v-row class="mt-0">

        <v-col v-if="article" lg="8" md="12" class="pt-0">
          <!-- <v-img :src="$store.state.baseUrl + '/api/services/app/FileManager/GetFile?fileGuid=' + article.files[0].guidId" max-height="600" class="news-img" :alt="article.title"></v-img> -->
          <v-container v-swiper="swiperOption" dir="rtl">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(slide, index) in article.files.length" :key="index">
                <img :src="$store.state.baseUrl + '/api/services/app/FileManager/GetFile?fileGuid=' + article.files[index].guidId" class="news-img" :alt="article.title">
              </div>
            </div>
            <template v-if="article.files.length > 1">
              <div class="swiper-pagination" slot="pagination"></div>
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </template>
          </v-container>
          <div class="news-tags">
            <v-icon class="head-icon">mdi-folder-outline</v-icon>
            <ul>
              <li v-for="(category, index) in article.categoriesName" :key="category">
                <NuxtLink :to="'/news/category/' + article.categories[index]">
                  {{ category }}
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div class="news-spec mt-4">
            <ul>
              <li v-if="author">
                <NuxtLink :to="'/profile/' + author.id">
                  <v-icon>mdi-account-outline</v-icon>
                  {{ author.name + " " + author.surname }}
                </NuxtLink>
              </li>
              <li v-if="article.publishTime">
                <v-icon>mdi-calendar-blank</v-icon>
                {{ $moment(article.publishTime.substr(0, article.publishTime.indexOf('T')), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}
              </li>
              <li>
                <v-icon>mdi-clock-time-three-outline</v-icon>
                {{ article.publishTime.substr(11, 5) }}
              </li>
              <!-- <li>
                <v-icon>mdi-eye-outline</v-icon>
                تعداد مشاهده
              </li> -->
              <li v-if="commentsCount > 0">
                <v-icon>mdi-comment-outline</v-icon>
                {{ commentsCount }} نظر
              </li>
            </ul>
          </div>
          <div class="article-body">
            <h1 class="news-title">
              {{ article.title }}
            </h1>
            <h3 class="news-lead">
              {{ article.lead }}
            </h3>
            <div class="news-body" v-html="article.body"></div>
          </div>
          <!-- <div class="news-tags">
            <v-icon class="head-icon">mdi-tag-multiple</v-icon>
            <ul>
              <li>
                <a href="#">تغذیه</a>
              </li>
              <li>
                <a href="#">سفر</a>
              </li>
              <li>
                <a href="#">موسیقی</a>
              </li>
              <li>
                <a href="#">لایف استایل</a>
              </li>
              <li>
                <a href="#">تغذیه</a>
              </li>
              <li>
                <a href="#">سفر</a>
              </li>
              <li>
                <a href="#">موسیقی</a>
              </li>
              <li>
                <a href="#">لایف استایل</a>
              </li>
            </ul>
          </div> -->
          <div class="news-tags social">
            <v-icon class="head-icon">mdi-share-variant-outline</v-icon>
            <ul>
              <li v-for="(item, index) in shareItems" :key="index">
                <a :href="item.link" :style="'border: 1px solid' + item.color"><v-icon :color="item.color">mdi-{{ item.icon }}</v-icon></a>
              </li>
            </ul>
          </div>
          <div class="news-author" v-if="author">
            <v-row>
              <v-col cols="12"  lg="3"  md="6" class="right">
                <NuxtLink :to="'/profile/' + author.id" class="responsiveImg">
                  <v-img
                    v-if="authorPicture"
                    :src="'data:image/jpeg;base64,' + authorPicture"
                    class="author-pic"
                  >
                  </v-img>
                  <v-icon v-else class="author-icon">mdi-account-circle</v-icon>
                  <span class="author-name">{{ author.name + " " + author.surname }}</span>
                </NuxtLink>
              </v-col>
              <v-col  cols="12"  lg="9"  md="6" class="left">
                <h4 class="mb-3">درباره نویسنده</h4>
                <p>
                  تحلیلگر ارشد تکنیکال کارگزاری آگاه،
                  تحلیلگر تکنیکال سایت همفکران،
                  تحلیلگر تکنیکال شرکت سبدگردانی آگاه،
                  مشاور سایت آواگلد در حوزه تکنیکال،
                  سبدگردان و مدیر دارایی در حوزه بازار سهام و بازار آتی،
                  دارای چندین مقاله در حوزه بازار سرمایه و طلا
                </p>
                <!-- <ul>
                  <li v-for="(item, index) in shareItems" :key="index">
                    <a :href="item.link"><v-icon>mdi-{{ item.icon }}</v-icon></a>
                  </li>
                </ul> -->
              </v-col>
            </v-row>
          </div>
          
          <NewsTitle title="مطالب مرتبط" :icons="['mdi-chevron-right', 'mdi-chevron-left']" class="mt-10" />

          <v-row>
            <template v-for="item in similarArticles.slice(0, 2)">
              <v-col cols="6" :key="item.id">
                <NewsCard :info="item" :type="1" class="compact card-sm" />
              </v-col>
            </template>
          </v-row>
          
          <v-row>
            <v-col>
              <NewsTitle title="نظرات کاربران" :icons="['mdi-comment-text-outline']" class="mt-10" />
              <BaseComments :objectId="this.$route.params.id" @sendtotalCount="gettotalCount" />
            </v-col>
          </v-row>
        </v-col>
        <v-col v-else cols="8">
		      <BaseNote type="loading" class="mt-0" />
        </v-col>

        <v-col lg="4" md="12" class="pt-0">
          <BaseBanner type="telegram" class="responsiveTelegramBanner" />
          <!-- <NewsTitle title="شبکه‌های اجتماعی" :icons="['mdi-share-variant']" class="mt-10" />
          <SideSocialNetworks /> -->
          <NewsTitle title="خبرنامه" :icons="['mdi-email-open-outline']" class="mt-10" />
          <SideNewsletter />
          <NewsTitle title="اخبار برگزیده" :icons="['mdi-newspaper-variant-outline']" class="mt-10" />
          <SideFeaturedNewsTabs :items="similarArticles" />
          <!-- <NewsTitle title="به انتخاب نویسندگان" :icons="['mdi-chevron-right', 'mdi-chevron-left']" class="mt-10" /> -->
          <!-- <SideFeaturedNews :items="similarArticles" /> -->
        </v-col>

      </v-row>

    </v-container>
  </v-main>
</template>

<script>
  import { directive } from "vue-awesome-swiper";

  export default {
    directives: {
      swiper: directive,
    },
    data: () => ({
      article: "",
      tab: null,
      items: [
        'داغ',
        'دیده شده',
        'بحث برانگیز',
      ],
      bcItems: [
        {
          text: 'اخبار',
          disabled: false,
          href: '/news',
        },
        {
          text: '',
          disabled: true,
          href: '#',
        },
      ],
      shareItems: {
        facebook: {
          icon: "facebook",
          link: "",
          color: "#3b5999"
        },
        twitter: {
          icon: "twitter",
          link: "",
          color: "#55acee"
        },
        linkedin: {
          icon: "linkedin",
          link: "",
          color: "#0077B5"
        },
        telegram: {
          icon: "telegram",
          link: "",
          color: "#0088cc"
        },
        whatsapp: {
          icon: "whatsapp",
          link: "",
          color: "#1bd741"
        }
      },
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: false,	
        autoplay: {
          delay: 6000,
          disableOnInteraction: false
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
      similarArticles: "",
      author: "",
      authorPicture: "",
      commentsCount: "",
      currentUrl: "",
    }),
    created: function () {
      this.getContent();
    },
    methods: {
      getContent() {
        this.$axios.$get('/api/Public/GetContent', {
          params: {
            Id: this.$route.params.id
          }
        })
        .then(response => {
          this.article = response.result;
          this.bcItems[1].text = this.article.title;
          var categoryId = this.article.categories.slice(0, 1);
          var userId = this.article.reporterUserId;
          this.getCategories(categoryId);
          this.getProfile(userId);
          this.getProfilePic(userId);
          this.setSocials();
        })
      },
      getCategories(categoryId) {
        this.$axios.$get('/api/Public/CategoriesRecentContents', {
          params: {
            TenantId: 1,
            CategoriesFilter: categoryId,
          }
        })
        .then(response => {
          for (var i=0; i < response.result.items.length; i++) {
            if (response.result.items[i].id == categoryId) {
              this.similarArticles = response.result.items[i].contents.items;
            }
          }
        })
      },
      getProfile(userId) {
        this.$axios.$get("/api/services/app/Account/GetProfile", {
          params: {
            userId: userId
          }
        })
        .then(response => {
          this.author = response.result;
        });
      },
      getProfilePic(userId) {
        this.$axios.$get("/api/services/app/Profile/GetProfilePictureByUser", {
          params: {
            userId: userId
          }
        })
        .then(response => {
          this.authorPicture = response.result.profilePicture;
        });
      },
      setSocials() {
        if (process.client) {
          this.currentUrl = window.location.hostname + this.$route.path;
        }
        this.shareItems.facebook.link = 'https://www.facebook.com/sharer.php?u=' + this.currentUrl;
        this.shareItems.twitter.link = 'https://twitter.com/share?text=' + this.article.title + '&url=' + this.currentUrl;
        this.shareItems.linkedin.link = 'https://linkedin.com/shareArticle?mini=true&title=' + this.article.title + '&url=' + this.currentUrl ;
        this.shareItems.telegram.link = 'https://telegram.me/share/url?text=' + this.article.title + '&url=' + this.currentUrl;
        this.shareItems.whatsapp.link = 'https://api.whatsapp.com/send?&text=' + this.currentUrl;
      },
      gettotalCount(count) {
        this.commentsCount = count;
      }
    }
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.responsiveImg {
  @media screen and (max-width: 600px) {
      flex-direction: column;
      display: flex;
      align-items: center;
      justify-content: center;
  }
}
.responsiveTelegramBanner{
  @media screen and (max-width: 959px) {
    display: none !important;
  }
}
.news-tags {
  margin-top: 15px;
  color: #999;

  i.head-icon {
    color: #999!important;
  }
  
  ul {
    display: inline-block;
    margin-right: 5px;
    padding: 0;
    width: 95%;

    li {
      display: inline-block;
      margin: 3px;
      
      a {
        padding: 0px 10px 1px 10px;
        border: 1px solid #999;
        font-size: 13px;
        transition: .2s;
        border-radius: 8px;

        &:hover {
          border: 1px solid $c1;
          color: $cw!important;
          background: $c1;

          i {
            padding: 0px 10px;
          }
        }
      }
    }
  }

  &.social {
    ul {
      li {
        margin: 0 3px;

        a {
          padding: 1px 6px 4px 6px;
          cursor: pointer;

          &:hover {
            background: inherit;

            i {
              padding: 0px 10px;
            }
          }

          i {
            font-size: 18px;
          }
        }
      }
    }
  }
}

.news-spec {
  ul {
    li {
      display: inline-block;
      font-size: 14px;
      color: #999;
      margin-left: 15px;

      a {
        transition: .3s;

        &:hover {
          color: $c1!important;

          i {
            color: $c1!important;
          }
        }
      }

      i {
        color: #999!important;
        font-size: 16px!important;
      }
    }
  }
}

.news-img {
  width: 100%;;
  overflow: hidden;
  border-radius: 8px;
}

.article-body {
  line-height: 33px;

  .news-title {
    font-family: $f-b;
    margin: 10px 0;
    line-height: 55px;
  }

  .news-lead {
    font-family: $f-b;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 40px;
  }

  .news-body {
    p, span {  
      font-family: $f!important;
      font-size: 16px !important;
      line-height: 33px !important;
    }
  }

  img {
    max-width: 100%;
  }
}

.news-author {
  border: 1px solid #f2f3f5;
  margin-top: 30px;
  padding: 12px;
  border-radius: 8px;
  overflow: hidden;

  .right {
    background: #f2f3f5;
    text-align: center;

    a {
      &:hover {
        .author-pic {
          border: 5px solid $c1;
        }

        .author-name {
          color: $c1;
        }
      }
    }
    
    .author-pic {
      border: 5px solid $cw;
      border-radius: 50%;
      margin: 10px auto 0px auto;
      width: 120px;
      height: 120px;
      transition: 0.1s;
    }

    .author-icon {
      font-size: 120px;
      color: $c2;
    }

    .author-name {
      padding-top: 10px;
      padding-bottom: 7px;
      display: block;
      transition: 0.1s;
    }
  }

  .left {
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 15px 30px;

    p {
      color: #777;
      font-size: 14px;
      line-height: 30px;
    }

    ul {
      margin-top: 20px;

      li {
        display: inline-block;
        margin-left: 10px;

        i {
          color: #aaa;
          transition: 0.3s;

          &:hover {
            color: $c1;
          }
        }
      }
    }
  }
}

.swiper-container {
	min-height: 200px;
}

.swiper-button-next,
.swiper-button-prev {
	&:after {
		font-size: 28px!important;
	}
}

</style>
