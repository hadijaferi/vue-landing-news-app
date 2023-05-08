<template>
  <div :info="info" :type="type" class="news-card">
    <template>
      <div class="news-main">
        <NuxtLink :to="'/news/' + info.id">
          <v-img v-if="info.files.length > 0"
            :lazy-src="getThumb"
            :src="getPhoto" 
            class="article-img"
            :alt="info.title"
            :min-height="imgSize.substr(4, 7)"
          >
            <!-- <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="teal lighten-4"
                ></v-progress-circular>
              </v-row>
            </template> -->
          </v-img>
          <!-- <v-img v-else :src="require('../../static/img/noimage.png')"></v-img> -->
          <div v-show="type == 1 || type == 4 || type == 5" class="news-text">
            <ul>
              <!-- <li>نویسنده</li> -->
              <li v-if="info.publishTime">{{ $moment(info.publishTime.substr(0, info.publishTime.indexOf('T')), "YYYY-MM-DD").format('jYYYY/jMM/jDD') }}</li>
            </ul>
            <p class="news-title">{{ info.title }}</p>
          </div>
        </NuxtLink>
        <!-- <a v-show="type == 1 || type == 2 || type == 4" href="##" class="news-details section">
          دسته
        </a>
        <a v-show="type == 1 || type == 2 || type == 4" href="##" class="news-details icon">
          <v-icon>{{ icons[index-1] }}</v-icon>
        </a> -->
      </div>
      <div v-show="type == 1 || type == 2 || type == 3" class="news-more">
        <ul v-show="type != 1">
          <li>نویسنده</li>
          <li v-if="info.publishTime">{{ $moment(info.publishTime.substr(0, info.publishTime.indexOf('T')), "YYYY-MM-DD").format('jYYYY/jMM/jDD') }}</li>
        </ul>
        <NuxtLink :to="'/news/' + info.id" v-show="type != 1" class="news-title">
          {{ info.title }}
        </NuxtLink>
        <p v-show="type != 3" class="news-desc">
          {{ info.lead.substr(0, 125) + '...' }}
        </p>
        <NuxtLink :to="'/news/' + info.id" v-show="type != 3" class="read-more">
          بیشتر بخوانید...
        </NuxtLink>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    props: ['info', 'type', 'size'],
    data: () => ({
      index: "",
      tags: ["سمینار", "سبک زندگی", "حرفه‌ای", "آشپزی", "سفر"],
      icons: ["mdi-star", "mdi-briefcase", "mdi-pen", "mdi-food", "mdi-bus"],
      category: "",

      imgSize: "",

      loading: true
    }),
    created: function () {
      this.index = Math.floor(Math.random() * 5 + 1);

      if (this.info.categories) {

        // Get Category
        // this.$axios.$get('/api/Public/GetCategory', {
        //   params: {
        //     input: parseInt(this.info.categories.slice(0, 1)),
        //   }
        // })
        // .then(response => {
        //   this.category = response.result.displayName;
        // })

      }

      if (this.size != null) {
        this.imgSize =  this.size;
      } else {
        this.imgSize =  '373_160';
      }


    },
    mounted() {
      
    },
    computed: {
      getThumb() {
        let url = this.$store.state.baseUrl + '/api/services/app/FileManager/GetFile?fileGuid=' + this.info.files[0].guidId + '&size=50_20';
        return url;
      },
      getPhoto() {
        let url = this.$store.state.baseUrl + '/api/services/app/FileManager/GetFile?fileGuid=' + this.info.files[0].guidId + '&size=' + this.imgSize;
        return url;
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

/*////////////////////// NEWS //////////////////////*/

.news-card {
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
  margin-bottom: 15px;

  &.bb {
    border-bottom: 1px solid #eee!important;
    padding-bottom: 15px!important;
    margin-bottom: 15px!important;
  }

  &:last-child {
    border: none;
    padding-bottom: 0px;
    margin-bottom: 0px;
  }

  .news-main {
    position: relative;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    transition: 0.3s;
    display: block;
    width: 100%;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background-image: -webkit-linear-gradient(top, transparent 0%, $cb 100%);
      background-image: -moz-linear-gradient(top, transparent 0%, $cb 100%);
      background-image: linear-gradient(to bottom, transparent 20%, $cb 100%);
      opacity: .7;
      transition: opacity 0.3s ease-in-out;
      transition: 0.3s;
    }

    &:hover {
      &::after {
        opacity: 1;
      }
    }

    .news-text {
      position: absolute;
      bottom: 0;
      right: 0;
      color: $cw;
      padding: 15px 20px;
      font-size: 22px;
      z-index: 9;
      transition: 0.3s;

      ul {
        li {
          color: $cw;
        }
      }

      @include res(md) {
        padding: 15px 10px;
      }
    }

    .news-details {
      position: absolute;
      top: 15px;
      color: $cw;
      border-radius: 5px;
      z-index: 9;
      transition: 0.3s;

      a {
        display: inline-block;
      }

      &.section {
        right: 15px;
        background: #212121;
        color: $cw!important;
        font-size: 12px;
        padding: 3px 10px 5px 10px;

        &:hover {
          background: $c1;
        }
      }

      &.icon {
        left: 15px;
        background: rgba($c1, 0.7);
        padding: 3px 9px 5px 9px;

        i {
          color: $cw;
          font-size: 20px;
        }

        &:hover {
          background: #212121;
        }
      }
    }
  }

  .news-more {

    .news-desc {
      margin-top: 10px!important;
      color: #777;
      font-size: 14px;
      line-height: 27px;
      min-height: 81px;
    }

    .read-more {
      display: inline-block;
      margin-top: 7px;
      transition: 0.3s;
      font-size: 14px;

      &:hover {
        color: $c1!important;
      }
    }

    @include res(sm) {
      // whay ??
      //display: none!important;
    }
  }

  ul {
    li {
      display: inline-block;
      font-size: 13px!important;
      color: #999;
      margin-left: 5px;

      @include res(md) {
        font-size: 12px!important;
      }
    }
  }

  .news-title {
    font-family: $f-b;
    transition: 0.3s;
    font-size: 16px!important;

    &:hover {
      color: $c1!important;
    }

    @include res(md) {
      font-size: 14px!important;
    }
  }

  &.card {
    border: none;
    padding-bottom: 0px;
    margin-bottom: 0px;

    .article-img {
      @include res(sm) {
        height: 180px!important;
        min-height: 180px!important;
      }
    }
  }
  
  &.card-sm {
    .article-img {
      height: 200px;
    }
  }

  &.card-md {

    .article-img {
      height: 420px;
    }

    @include res(sm) {
      padding: 0px!important;
    }
  }

  &.card-lg {
    padding: 0 20px;
      
    .article-img {
      height: 540px;
    }

    @include res(sm) {
      padding: 0;
      margin: 20px 0;
    }
  }

  &.half {
    display: flex;
    align-items: center;
    @include res(sm){
      flex-direction: column;
    }


    .news-main {
      flex: 1;


      &::after {
        display: none;
      }
    }

    .news-more {
      flex: 1;
      padding-right: 20px;
    }

    &.half-img {
      @include res(sm){
        flex-direction: row;
      }
      .news-main {
        flex: 0.4;
      }
    }

    &.min-img {
      @include res(sm){
        flex-direction: row;
      }
      .news-main {
        max-width: 85px;

        .article-img {
          min-height: 48px;
        }
      }
      
      .news-more {
        ul {
          li {
            font-size: 12px;
          }
        }

        .news-title {
          font-size: 14px;
        }
      }
    }
  }

  &.compact {
    .v-image {
      max-height: 200px;
    }
  }

  &.half-compact {
    .v-image {
      max-height: 400px;
    }
  }
}

</style>
