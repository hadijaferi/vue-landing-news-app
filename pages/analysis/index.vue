<template>
   <v-main>
    <v-container>
      <BaseBreadcrumb :items="bcItems" />
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12">
              <v-alert
              v-if="searchAlert"
              text
              border="left"
              :color="$store.state.cPrimary"
              class="px-7 mb-5">
                <v-row>
                  <v-col cols="9" class="mt-1">
                    نتایج جستجو برای
                    <span v-if="searchWord">عنوان "{{ searchWord }}"</span>
                    <span v-if="searchWord && searchUser">|</span>
                    <span v-if="searchUser">کارشناس "{{ searchUser }}"</span>
                    <span v-if="(searchWord || searchUser) && searchSymbol">|</span>
                    <span v-if="searchSymbol">نماد "{{ searchSymbol }}"</span>
                  </v-col>
                  <v-col cols="3" class="text-left">
                    <v-btn
                    outlined
                    elevation="0"
                    :color="$store.state.cPrimary"
                    @click="getAnalysis()">
                      <v-icon class="head-icon">mdi-close</v-icon>
                      حذف فیلتر
                    </v-btn>
                  </v-col>
                </v-row>
              </v-alert>
              <NewsTitle title="آخرین تحلیل‌های سایت" :icons="['mdi-chart-line']" class="mt-0" />
            </v-col>
            <template v-if="defaultAnalysis">
              <v-col  cols="12" lg="6" md="6" v-for="(analyseItem, index) in defaultAnalysis" :key="'0'+index">
                <ACard :info="analyseItem" />
              </v-col>
            </template>
            <v-col v-else>
              <BaseNote type="loading" class="mt-0" />
            </v-col>
            <v-col cols="12">
              <NewsTitle title="آخرین تحلیل‌های کاربران" :icons="['mdi-chart-line']" class="mt-5" />
              <NuxtLink to="/analysis/create">
                <v-btn large elevation="0" class="bg-main white--text mt-5">
                  <v-icon class="head-icon">mdi-comment-edit</v-icon>
                  ثبت تحلیل جدید
                </v-btn>
              </NuxtLink>
            </v-col>
            <template v-if="analysis">
              <v-col cols="12" lg="6" md="6" v-for="(analyseItem, index) in analysis" :key="'1'+index">
                <ACard :info="analyseItem" />
              </v-col>
            </template>
            <v-col v-else>
              <BaseNote type="loading" class="mt-0" />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" md="4">
          <NewsTitle title="جستجو" :icons="['mdi-feature-search-outline']" class="mt-0" />
          <SideSearch @submitSearch="getAnalysis" />
          <NewsTitle title="اخبار تحلیل تکنیکال" :icons="['mdi-newspaper-variant-outline']" class="mt-10" />
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

  import generateKey from '../../utils/generateKey'
  export default {
    data: () => ({
      bcItems: [
        {
          text: 'تحلیل تکنیکال',
          disabled: true,
          href: '#',
        },
      ],
      defaultAnalysis: "",
      analysis: "",
      searchAlert: false,
      searchWord: "",

      featuredNews: ""
    }),
    created: function () {
      // Get Analysis
      this.getAnalysis();

      // Get Featured News
      this.$axios.$get('/api/Public/CategoriesRecentContents', {
        params: {
          TenantId: 1,
          CategoriesFilter: 12
        }
      })
      .then(response => {
        this.featuredNews = response.result.items[0].contents.items;
      })

    },
    methods: {
      getAnalysis(keyword, user, symbol) {

        if (keyword || user || symbol) {
          this.searchAlert = true;
        } else {
          this.searchAlert = false;
        }

        this.searchWord = keyword;
        this.searchUser = user;
        this.searchSymbol = symbol;

        // Get Default Technical Analysis
        this.$axios.$get('/api/Public/GetDefaultAnalysisCharts', {
          params: {
            Filter: keyword,
            UserNameFilter: user,
            SymbolNameFilter: symbol
          }
        })
        .then(response => {
          this.defaultAnalysis = response.result.items.reverse();
        })

        // Get Technical Analysis
        this.$axios.$get('/api/Public/GetAnalysisCharts', {
          params: {
            Filter: keyword,
            UserNameFilter: user,
            SymbolNameFilter: symbol
          }
        })
        .then(response => {
          this.analysis = response.result.items.reverse();
        })

      }
    },
    head(){
      return{
        title:"همتا | تحلیل تکمیکال",
        meta: [
          {
            hid: generateKey("analys"),
            name: 'description',
            content: 'تحلیل . تحلیل تکنیکال'
          },
          {
            hid: generateKey("analys"),
            name: 'url',
            content: 'https://hamta.agah.com/analysis'
          },

        ],
        link:[
          {
            rel: 'canonical',
            href: 'https://hamta.agah.com' + this.$route.path
          }
        ]
      }
    },
  }
</script>

<style>

</style>
