<template>

  <div :info="info" class="analyse-card">
    <NuxtLink :to="'/analysis/' + info.analysisChart.id">
      <p class="analyse-title">{{ info.analysisChart.name }}</p>
    </NuxtLink>
    <p class="analyse-symbol">
      {{ info.analysisChart.symbolName.substr(0, info.analysisChart.symbolName.indexOf(':')) }}
      <span>{{ getResolution }}</span>
    </p>
    <NuxtLink :to="'/analysis/' + info.analysisChart.id">
      <v-img
      :lazy-src="getThumb"
      :src="getPhoto"
      :aspect-ratio="16/8"
      class="analyse-snapshot"
      >
      </v-img>
    </NuxtLink>
    <v-row class="analyse-details">
      <v-col>
        <NuxtLink :to="'/profile/' + info.analysisChart.userId">
          <v-icon class="text-main">mdi-account-circle</v-icon>
          {{ info.userName }}
        </NuxtLink>
      </v-col>
      <v-col class="text-left date">
        {{ $moment(info.creationTime.substr(0, info.creationTime.indexOf('T')), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}
      </v-col>
    </v-row>
    <NuxtLink :to="'/analysis/' + info.analysisChart.id" class="analyse-desc" v-html="info.analysisChart.description.substr(0, 140) + '...'">
    </NuxtLink>
    <ul class="analyse-icons">
      <li>
        <v-icon>mdi-comment-text-outline</v-icon>
      </li>
      <li>
        <v-icon>mdi-bullhorn-outline</v-icon>
      </li>
      <li>
        <v-icon>mdi-bookmark-outline</v-icon>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    props: ['info'],
    computed: {
      getResolution() {
        let res;
        switch (this.info.analysisChart.resolution) {
          case 'D':
          case '1D':
            res = "۱ روز";
            break;
          case '1W':
            res = "۱ هفته";
            break;
          case '1M':
            res = "۱ ماه";
            break;
          case '6M':
            res = "۶ ماه";
            break;
          case '12M':
            res = "۱۲ ماه";
            break;
          case '60':
            res = "۱ ساعت";
            break;
          default:
            if (this.info.analysisChart.resolution > 60) {
              res = this.$moment.duration(this.info.analysisChart.resolution, "minutes").humanize(); ;
            } else {
              res = this.info.analysisChart.resolution + " دقیقه";
            }
        }

        return res;
      },
      getThumb() {
        let url = this.$store.state.baseUrl + '/api/services/app/TradingView/GetFile?fileId=' + this.info.analysisChart.fileGuid + '&size=33_21';
        return url;
      },
      getPhoto() {
        let url = this.$store.state.baseUrl + '/api/services/app/TradingView/GetFile?fileId=' + this.info.analysisChart.fileGuid + '&size=330_210';
        return url;
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.analyse-card {
  background: $cw;
  border: 1px solid #e0e3eb;
  border-radius: 8px;
  padding: 20px 25px;

  .analyse-snapshot {
    border: 1px solid #e0e3eb;
    border-radius: 4px;
  }

  .analyse-title {
    color: $c1!important;
    font-family: $f-b;
    transition: 0.3s;
    font-size: 22px!important;

    &:hover {
      color: $c1!important;
    }

    @include res(md) {
      font-size: 14px!important;
    }
  }

  .analyse-symbol {
    color: $cb;
    font-size: 14px;
    display: block;
    margin: 10px 0!important;

    span {
      float: left;
      color: #999;
    }
  }

  .analyse-details {
    font-size: 14px;
    margin-top: 10px;

    a {
      transition: 0.1s;

      &:hover {
        color: $c1!important;
      }
    }

    img {
      width: 25px;
      border-radius: 50%;
      vertical-align: text-top;
      margin-left: 7px;
    }

    .date {
      color: #999;
    }
  }

  .analyse-desc {
    margin-top: 10px!important;
    display: inline-block;
    color: #333!important;;
    font-size: 14px;
    line-height: 27px;
    min-height: 82px;

    p {
      display: inline-block;
    }
  }

  .analyse-icons {
    margin-top: 15px;

    li {
      display: inline-block;
      margin-left: 5px;
      padding: 10px;
      cursor: pointer;
      border-radius: 50%;
      transition: 0.3s;

      i {
        color: #aaa;
      }

      &:hover {
        background: #eee;

        i {
            color: #666;
        }
      }
    }
  }
}

</style>
