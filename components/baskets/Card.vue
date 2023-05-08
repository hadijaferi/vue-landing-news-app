<template>

  <div :info="info" class="basket-card">
    <NuxtLink :to="'/baskets/' + info.stockBasket.id">
      <p class="basket-title">{{ info.stockBasket.name }}</p>
      <p class="basket-symbol">
        تاریخ شروع: {{ $moment(info.stockBasket.startDate.substr(0, info.stockBasket.startDate.indexOf('T')), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}
        <span v-if="info.stockBasket.stockBasketType == 1"> بلند مدت </span>
        <span v-else> کوتاه مدت </span>
        <span v-if="info.stockBasket.stockBasketRiskType == 1">پر ریسک /</span>
        <span v-else>کم ریسک /</span>
      </p>
      <p class="basket-desc" v-html="info.stockBasket.description.substr(0, 220) + ' ...'"></p>
    </NuxtLink>
    <v-row class="basket-details">  
      <v-col>
        <NuxtLink :to="'/profile/' + info.stockBasket.userId">
          <v-icon class="text-main">mdi-account-circle</v-icon>
          توسط {{ info.userName }} در {{ $moment(info.creationTime.substr(0, info.creationTime.indexOf('T')), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}
        </NuxtLink>
      </v-col>
    </v-row>
  </div>

</template>

<script>
  export default {
    props: ['info'],
    computed: {
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.basket-card {
  background: $cw;
  border: 1px solid #e0e3eb;
  border-radius: 8px;
  padding: 20px 25px;

  .basket-snapshot {
    border: 1px solid #e0e3eb;
    border-radius: 4px;
  }

  .basket-title {
    color: $c1!important;
    font-family: $f-b;
    transition: 0.3s;
    font-size: 22px!important;

    @include res(md) {
      font-size: 14px!important;
    }
  }

  .basket-symbol {
    color: $cb;
    font-size: 14px;
    display: block;
    margin: 15px 0!important;
    color: #333!important;

    span {
      float: left;
      color: #999;
      margin-right: 5px;
    }
  }

  .basket-desc {
    margin-top: 10px!important;
    display: block;
    font-size: 14px;
    line-height: 27px;
    min-height: 55px;

    p {
      display: inline-block!important;
    }
  }

  .basket-details {
    font-size: 13px;
    margin-top: 10px;
    color: #666;

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
}

</style>
