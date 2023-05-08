<template>
   <v-main>
    <v-container>

      <BaseBreadcrumb :items="bcItems" />
      
      <v-sheet rounded="lg" class="py-5 px-10 mb-5 grey lighten-4">
        <v-row>
          <v-col>
            <h1 class="page-title mt-2">
              {{this.bcItems[1].text}}
            </h1>
          </v-col>
        </v-row>
      </v-sheet>
      
      <v-row class="spotlight">
        <v-col cols="3">
          <NewsCard v-for="item in CategoriesNews.slice(1, 2)" :info="item" :key="item.id" :type="4" size="273_200" class="card card-sm mb-5" />
          <NewsCard v-for="item in CategoriesNews.slice(2, 3)" :info="item" :key="item.id" :type="4" size="273_200" class="card card-sm" />
        </v-col>
        <v-col cols="6" class="px-2">
          <NewsCard v-for="item in CategoriesNews.slice(0, 1)" :info="item" :key="item.id" :type="4" size="577_420" class="card card-md" />
        </v-col>
        <v-col sm="3">
          <NewsCard v-for="item in CategoriesNews.slice(3, 4)" :info="item" :key="item.id" :type="4" size="273_200" class="card card-sm mb-5" />
          <NewsCard v-for="item in CategoriesNews.slice(4, 5)" :info="item" :key="item.id" :type="4" size="273_200" class="card card-sm" />
        </v-col>
      </v-row>

      <v-row>

        <v-col cols="8">
          <v-row class="mt-10">
            <v-col class="pb-0" cols="12">
              <NewsTitle :title="'آخرین مطالب ' + CategoriesName" :icons="['mdi-chevron-right', 'mdi-chevron-left']" />
              <NewsCard v-for="item in CategoriesNews" :info="item" :key="item.id" :type="2" class="half compact bb" />
            </v-col>
          </v-row>
          <v-row>
            <v-btn
              depressed
              class="py-6 px-10 bg-main white--text mt-10 mx-auto"
              :loading="loading"
              @click="count = count+10, getNews()"
            >
              مشاهده بیشتر...
            </v-btn>
          </v-row>
        </v-col>

        <v-col cols="4">
          <BaseBanner type="telegram" class="mt-10" />
          <!-- <NewsTitle title="شبکه‌های اجتماعی" :icons="['mdi-share-variant']"  class="mt-10" />
          <SideSocialNetworks /> -->
          <NewsTitle title="خبرنامه" :icons="['mdi-email-open-outline']" class="mt-10" />
          <SideNewsletter />
          <NewsTitle title="اخبار برگزیده" :icons="['mdi-newspaper-variant-outline']" class="mt-10" />
          <SideFeaturedNewsTabs :items="positions.hot" />
          <NewsTitle title="به انتخاب نویسندگان" :icons="['mdi-chevron-right', 'mdi-chevron-left']" class="mt-10" />
          <SideFeaturedNews :items="positions.featured" />
        </v-col>
        
      </v-row>
    </v-container>
  </v-main>
</template> 

<script>
  export default {
    data: () => ({
      page: 1,
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

      CategoriesName: "",
      CategoriesNews: [],

      positions: {
        spotlight: "",
        featured: "",
        hot: "",
      },

			loading: false,
			total: '',
			count: 0,
    }),
    created: function () {

      this.getNews();

    },
		methods: {
			getNews() {
        this.loading = true;
        this.$axios.$get('/api/Public/CategoriesRecentContents', {
          params: {
            TenantId: 1,
            CategoriesFilter: this.$route.params.id,
            SkipCount: this.count,
          }
        })
        .then(response => {
          this.bcItems[1].text = response.result.items[0].displayName;
          this.CategoriesName = response.result.items[0].displayName;
          this.CategoriesNews = this.CategoriesNews.concat(response.result.items[0].contents.items);
          this.total = response.result.items[0].totalCount;
          this.loading = false;
        })
      }
    }
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';

.page-title {
  font-size: 28px;
  font-family: $f-b;
  margin-bottom: 10px;
  color: $c1;
}

</style>
