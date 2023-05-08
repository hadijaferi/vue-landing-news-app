<template>
  <v-main class="grey lighten-3">
    <v-container v-if="basket">
      <BaseBreadcrumb :items="bcItems" />
      <v-row>
        <v-col>
          <v-sheet rounded="lg" class="pa-5 mb-5">
            <v-row>
              <v-col>
                <h1 class="basket-title">{{ basket.stockBasket.name }}</h1>
                <p class="basket-subtitle">
                  توسط {{ basket.userName }} در <span dir="ltr">{{ $moment(basket.creationTime.substr(0, basket.creationTime.indexOf('T')), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}</span>
                </p>
              </v-col>
              <v-col class="text-left mt-2">
                <p>تاریخ شروع: {{ $moment(basket.stockBasket.startDate.substr(0, basket.stockBasket.startDate.indexOf('T')), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}</p>
                <div class="basket-info mt-3">
                  <ul>
                    <li v-if="basket.stockBasket.stockBasketType == 1" class="green">بلند مدت</li>
                    <li v-else class="red">کوتاه مدت</li>
                  </ul>
                </div>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet rounded="lg" class="pt-15 pb-12 px-10 mb-5">
            <p class="basket-description" v-html="this.basket.stockBasket.description"></p>
            <v-row>
              <v-col cols="12" md="12">
                <v-data-table
                  v-if="basket.stockBasket.stockBasketDetailDtos.length > 0"
                  :headers="symbolHeaders"
                  :items="symbolItems"
                  class="basket-table mt-10"
                  hide-default-footer
                >
                  <template v-slot:[`item.basketPercent`]="{ item }">
                    {{ item.basketPercent }} %
                  </template>
                  <template v-slot:[`item.lostOrProfitPercent`]="{ item }">
                    <span
                      :class="getColor(item.lostOrProfitAmount)+'--text'"
                    >
                      {{ item.lostOrProfitPercent }} %
                    </span>
                  </template>
                  <template v-slot:[`item.lostOrProfitAmount`]="{ item }">
                    <span
                      :class="getColor(item.lostOrProfitAmount)+'--text'"
                    >
                      {{ item.lostOrProfitAmount }}
                    </span>
                  </template>
                </v-data-table>
              </v-col>
              <v-col cols="12" md="4">
                <v-simple-table class="basket-table">
                  <tbody>
                    <tr>
                      <td>تاریخ شروع سبد</td>
                      <td>{{ $moment(basket.stockBasket.startDate.substr(0, basket.stockBasket.startDate.indexOf('T')), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}</td>
                    </tr>
                    <tr>
                      <td>تاریخ روز</td>
                      <td>{{ $moment(basket.stockBasket.currentDate.substr(0, basket.stockBasket.currentDate.indexOf('T')), "YYYY-MM-DD").format("jYYYY/jMM/jDD") }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-col>
              <v-col cols="12" md="4">
                <v-simple-table class="basket-table">
                  <tbody>
                    <tr>
                      <td>موجودی اولیه</td>
                      <td>{{ basket.stockBasket.initialFund }}</td>
                    </tr>
                    <tr>
                      <td>موجودی فعلی</td>
                      <td>{{ basket.stockBasket.currentFund }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-col>
              <v-col cols="12" md="4">
                <v-simple-table class="basket-table">
                  <tbody>
                    <tr>
                      <td>درصد سود یا زیان</td>
                      <td :class="getColor(basket.stockBasket.totalLostOrProfitPercent)+'--text'">{{ basket.stockBasket.totalLostOrProfitPercent }} %</td>
                    </tr>
                    <tr>
                      <td>مبلغ سود یا زیان</td>
                      <td :class="getColor(basket.stockBasket.totalLostOrProfitPercent)+'--text'">{{ basket.stockBasket.totalLostOrProfitAmount }}</td>
                    </tr>
                  </tbody>
                </v-simple-table>
              </v-col>
            </v-row>
          </v-sheet>
     
          <!-- <v-sheet rounded="lg" class="pa-10">
            <NewsTitle title="نظرات کاربران" :icons="['mdi-comment-text-outline']" />
            <BaseComments :comments="comments" />
          </v-sheet> -->

        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
  export default {
    data: () => ({
      bcItems: [
        {
          text: 'سبدهای پیشنهادی',
          disabled: false,
          href: '/baskets',
        },
        {
          text: '',
          disabled: false,
          href: '',
        },
      ],
      basket: '',
      comments: '',
      symbolHeaders: [
        { text: 'ردیف', value: 'index', sortable: false },
        { text: 'نماد', value: 'symbolName', sortable: false },
        { text: 'تاریخ خرید', value: 'entranceDate', sortable: false },
        { text: 'قیمت ورود', value: 'entrancePrice', sortable: false },
        { text: 'حد سود', value: 'takeProfit', sortable: false },
        { text: 'درصد در سبد', value: 'basketPercent', sortable: false },
        { text: 'تعداد', value: 'number', sortable: false },
        { text: 'ارزش خرید', value: 'entranceValue', sortable: false },
        { text: 'ارزش روز', value: 'currentValue', sortable: false },
        { text: 'قیمت آخرین معامله در بازار', value: 'marketLastPrice', sortable: false },
        { text: 'درصد سود یا زیان', value: 'lostOrProfitPercent', sortable: false },
        { text: 'مبلغ سود یا زیان', value: 'lostOrProfitAmount', sortable: false },
      ],
      basketHeaders: [
        'تاریخ شروع سبد',
        'تاریخ روز',
        'موجودی اولیه',
        'موجودی فعلی',
        'درصد سود یا زیان',
        'مبلغ سود یا زیان'
      ],
    }),
    created: function () {

      this.$axios.$get('/api/services/app/StockBasket/GetStockBasketForView', {
        params: {
          Id: this.$route.params.id
        }
      })
      .then(response => {
        this.basket = response.result;
        for (var i=0; i < this.basket.stockBasket.stockBasketDetailDtos.length; i++) {
          this.basket.stockBasket.stockBasketDetailDtos[i].entranceDate = this.$moment(this.basket.stockBasket.stockBasketDetailDtos[i].entranceDate.substr(0, this.basket.stockBasket.stockBasketDetailDtos[i].entranceDate.indexOf('T')), "YYYY-MM-DD").format("jYYYY/jMM/jDD");
        }
        this.bcItems[1].text = this.basket.stockBasket.name;
      })

    },
    methods: {
      getColor (input) {
        if (input > 0) return 'green'
        else if (input < 0) return 'red'
      },
    },
    computed: {
      symbolItems() {
        return this.basket.stockBasket.stockBasketDetailDtos.map(
          (items, index, basketPercent) => ({
            ...items,
            index: index + 1
          })
        )
      },
    }
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.basket-table {
  box-shadow: 0 10px 50px 5px rgba(77,77,119,.1)!important;
  border-radius: 8px!important;
  overflow: hidden!important; 

  th,
  td {
    text-align: center!important;
    direction: ltr;

    @include res(md) {
      direction: rtl;
    }
  }
  
  thead {

    @include res(md) {
      display: none;
    }

    tr {

      th { 
        background: $c1;
        color: $cw!important;
        font-size: 14px!important;
        height: 70px!important;
      }
    }
  }
}

.basket-title {
  font-size: 28px;
  font-family: $f-b;
  margin-bottom: 10px;
  color: $c1;
  @media only screen and (max-width: 600px), only screen and (min-width: 960px) {
    font-size: 20px;
  }
}

.basket-subtitle {
  color: #666;
  font-size: 14px;
}

.basket-description {
  color: #212121;
  line-height: 33px;
}

.basket-info {
  ul {
    li {
      display: inline-block;
      font-size: 14px;

      &:first-child {
        // background: rgb(0, 150, 0);
        color: $cw;
        padding: 0 10px 2px 10px;
        border-radius: 30px!important;
      }

      span {
        direction: ltr!important;
      }
    }
  }
}

</style>
