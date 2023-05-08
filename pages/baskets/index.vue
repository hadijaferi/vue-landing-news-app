<template>
   <v-main>
    <v-container>
      <BaseBreadcrumb :items="bcItems" />
      <v-row>
        <v-col cols="12" md="8">
          <NewsTitle title="سبدهای پیشنهادی" :icons="['mdi-chart-line']" class="mt-0" />
          <v-card class="search-card">
             <v-row>
                <v-col cols="12" sm="6" md="6" lg="3" class="cell">
                  <v-select
                    outlined
                    return-object
					          clearable
                    v-model="risk"
                    :items="riskList"
                    item-text="type"
                    item-value="index"
                    label="ریسک سبد"
					          clear-icon="mdi-close"
                    :color="$store.state.cPrimary"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="3" class="cell">
                  <v-select
                    outlined
                    return-object
					          clearable
                    v-model="hold"
                    :items="holdList"
                    item-text="type"
                    item-value="index"
                    label="مدت نگهداری"
					          clear-icon="mdi-close"
                    :color="$store.state.cPrimary"
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="3" class="cell">
                  <v-text-field
                    v-model="date"
                    outlined
                    readonly
                    label="تاریخ اعتبار"
                    dir="ltr"
                    :color="$store.state.cPrimary"
                    id="basket-date"
                  ></v-text-field>
                  <date-picker 
                    v-model="date"
                    element="basket-date"
                    :color="$store.state.cPrimary"
                  ></date-picker>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="3" class="cell">
                  <v-btn
                    large
                    depressed
                    class="py-7 bg-main white--text"
                    width="100%"
                    :loading="loading"
					          @click="GetBaskets()"
                  >
                    <v-icon class="head-icon ml-2">mdi-magnify</v-icon>
                    جستجوی سبد
                  </v-btn>
                </v-col>
             </v-row>
          </v-card>
          <v-row>
            <template v-if="baskets.length > 0">
              <v-col cols="12" md="6" lg="12" v-for="(analyseItem, index) in baskets" :key="'0'+index">
                <BCard :info="analyseItem" />
              </v-col>
            </template>
            <template v-else-if="loading">
              <v-col cols="12">
                <BaseNote type="loading" class="mt-0" />
              </v-col>
            </template>
            <template v-else-if="notFound">
              <v-col cols="12">
                <BaseNote type="notFound" class="mt-0" />
              </v-col>
            </template>
            <client-only v-else-if="!access">
              <v-col cols="12">
                <BaseNote type="response" class="mt-0" />
              </v-col>
            </client-only>
            <client-only v-else-if="!authorized">
              <v-col cols="12">
                <BaseNote type="notAuthorized" class="mt-0" />
              </v-col>
            </client-only>
            <template v-else>
              <v-col cols="12">
                <BaseNote type="loading" class="mt-0" />
              </v-col>
            </template>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <NewsTitle title="سبدگردانان" :icons="['mdi-newspaper-variant-outline']" class="mt-0" />
          <SideFeaturedNews :items="featuredNews" />
          <!-- <NewsTitle title="شبکه‌های اجتماعی" :icons="['mdi-share-variant']"  class="mt-10" />
          <SideSocialNetworks /> -->
          <NewsTitle title="خبرنامه" :icons="['mdi-email-open-outline']" class="mt-10" />
          <SideNewsletter />
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
          disabled: true,
          href: '#',
        },
      ],
      baskets: "",
      featuredNews: "",
      notFound: false,
      authorized: true,
      access: true,

      loading: false,

      date: "",

      risk: "",
			riskList: [
				{ index: 1, type: 'کم' },
				{ index: 2, type: 'متوسط' },
				{ index: 3, type: 'زیاد' },
			],

      hold: "",
			holdList: [
				{ index: 1, type: 'کوتاه مدت' },
				{ index: 2, type: 'میان مدت' },
				{ index: 3, type: 'بلند مدت' },
			],

    }),
    created: function () {
      this.GetBaskets();
      this.GetRecentContents();
    },
    methods: {
      GetBaskets() {
        this.loading = true;
        this.baskets = "";
        this.$axios.$get('/api/services/app/StockBasket/GetAll')
        .then(response => {
          this.loading = false;
          this.baskets = response.result.items;
          if (this.baskets.length == 0) {
            this.notFound = true;
          }
        })
        .catch(error => {
          this.loading = false;
          if (error.response.status == 401) {
            this.authorized = false;
          } else {
            this.access = false;
          }
        })
      },
      GetRecentContents() {
        this.$axios.$get('/api/Public/CategoriesRecentContents', {
          params: {
            TenantId: 1,
            CategoriesFilter: 18
          }
        })
        .then(response => {
          this.featuredNews = response.result.items[0].contents.items;
        })
      },
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';



.search-card {
  padding: 35px 25px 7px 25px;
  margin-bottom: 25px;
  box-shadow: 0 0px 0px 0px rgba(77, 77, 119, 0.1) !important;
  background: #f8f8f8;

  @include res(xs) {
    padding: 40px 20px;
  }

  .cell {
  	padding-top: 0 !important;
  	padding-bottom: 0 !important;
  }

}

</style>
