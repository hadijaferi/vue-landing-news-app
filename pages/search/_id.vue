<template>
  <v-main>
    <v-container>
      <BaseBreadcrumb :items="bcItems" />
      <v-row>
        <v-col cols="12" md="8">
          <v-row>
            <v-col cols="12" md="8 offset-md-1 mt-10" class="search-element">
              <v-text-field
				        ref="main"
                outlined
                clearable
                v-model="search.main"
                label="جستجو کنید"
                :color="$store.state.cPrimary"
                clear-icon="mdi-close"
                @keyup.enter="proSearch()"
				        :rules="[rules.required]"
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="2" class="BtnResponsive">
              <v-btn 
                depressed
                width="100%"
                class="py-7 bg-main white--text mx-auto"
                @click="proSearch()"
              >
                <v-icon class="search-icon">
                  mdi-magnify
                </v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="3 offset-md-1" class="search-element">
              <p class="">
                جستجو در:
              </p>
            </v-col>
            <v-col cols="12" md="3" class="search-element">
              <v-checkbox
                v-model="analysis.check"
                label="تحلیل‌های تکنیکال"
                :color="$store.state.cPrimary"
                class="checkbox"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" md="2" class="search-element">
              <v-checkbox
                v-model="news.check"
                label="اخبـار"
                :color="$store.state.cPrimary"
                class="checkbox"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" md="2" class="search-element">
              <v-checkbox
                v-model="baskets.check"
                disabled
                label="سبـدها"
                :color="$store.state.cPrimary"
                class="checkbox"
                hide-details
              ></v-checkbox>
            </v-col>
            <v-col cols="12" md="10 offset-md-1 mt-2">
              <v-expansion-panels>
                <v-expansion-panel>
                  <v-expansion-panel-header class="pa-4 text-center">
                    <p>
                      جستجـوی پیشرفتـه
                      <v-icon class="mr-2">
                        mdi-chevron-double-down
                      </v-icon>
                    </p>
                    <template v-slot:actions>
                      <v-icon></v-icon>
                    </template>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content class="text-center">
                    <v-text-field
                      outlined
                      clearable
                      v-model="search.main"
                      label="عنوان"
                      :color="$store.state.cPrimary"
                      class="mt-5"
                      clear-icon="mdi-close"
                      @keyup.enter="proSearch()"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      clearable
                      v-model="search.author"
                      label="نام نویسنده"
                      :color="$store.state.cPrimary"
                      clear-icon="mdi-close"
                      @keyup.enter="proSearch()"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      clearable
                      v-model="search.symbol"
                      label="نام نماد"
                      :color="$store.state.cPrimary"
                      clear-icon="mdi-close"
                      @keyup.enter="proSearch()"
                    ></v-text-field>
                    <v-btn 
                      depressed
                      width="40%"
                      class="py-7 bg-main white--text mx-auto"
                      @click="proSearch()"
                    >
                      جستجو در همتا
                    </v-btn>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-col>
          </v-row>

          <v-alert
          text
          border="left"
          :color="$store.state.cPrimary"
          class="px-7 mb-5 mt-10"
          >
            نتایج جستجو برای
            <span v-if="this.$route.params.id">عنوان "{{ this.$route.params.id }}"</span>
            <span v-if="search.author">و کارشناس "{{ search.author }}"</span>
            <span v-if="search.symbol">و نماد "{{ search.symbol }}"</span>
          </v-alert>

          <template v-if="analysis.show">
            <NewsTitle title="تحلیل‌های تکنیکال" :icons="['mdi-chart-box-outline']" class="mt-5" />
            <v-row class="mt-0">
              <template v-if="analysis.content.length != 0">
                <v-col cols="12" md="6" v-for="(item, index) in analysis.content" :key="'0'+index">
                  <ACard :info="item" />
                </v-col>
              </template>
              <v-col v-else-if="analysis.notFound">
                <BaseNote type="notFound" class="mt-0" />
              </v-col>
              <v-col v-else>
                <BaseNote type="loading" class="mt-0" />
              </v-col>
            </v-row>
          </template>

          <template v-if="news.show">
            <NewsTitle title="اخبـار" :icons="['mdi-newspaper']" class="mt-10" />
            <v-row class="mt-0">
              <template v-if="news.content.length != 0">
                <v-col cols="12" class="py-0" v-for="(item, index) in news.content" :key="'0'+index">
                  <NewsCard :info="item" :type="2" class="half compact bb" />
                </v-col>
                <v-btn
                  v-if="news.status" 
                  depressed
                  width="30%"
                  class="py-7 bg-main white--text mx-auto"
                  :loading="news.loading"
                  @click="news.page = news.page + 10, getNews()"
                >
                  مشاهده نتایج بیشتر...
                </v-btn>
              </template>
              <v-col v-else-if="news.notFound">
                <BaseNote type="notFound" class="mt-0" />
              </v-col>
              <v-col v-else>
                <BaseNote type="loading" class="mt-0" />
              </v-col>
            </v-row>
          </template>
        </v-col>
        <v-col cols="12" md="4" class="d-none d-md-block">
          <BaseBanner type="telegram" />
          <!-- <NewsTitle title="شبکه‌های اجتماعی" :icons="['mdi-share-variant']" class="mt-10" />
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
          text: 'جستجو',
          disabled: false,
          href: '',
        },
        {
          text: '',
          disabled: false,
          href: '',
        },
      ],
      
      search: {
        main: "",
        author: "",
        symbol: ""
      },

      analysis: {
        content: [],
        page: 0,
        notFound: false,
        status: false,
        loading: false,
        check: true,
        show: true,
      },

      news: {
        content: [],
        page: 0,
        notFound: false,
        status: false,
        loading: false,
        check: true,
        show: true,
      },

      baskets: {
        content: [],
        page: 0,
        notFound: false,
        status: false,
        loading: false,
        check: false,
        show: false,
      },

			rules: {
				required: value => !!value || 'وارد کردن این فیلد الزامی است.',
			},

    }),
    created: function () {
      this.search.main = this.bcItems[1].text = this.$route.params.id;
      this.getAnalysis();
      this.getNews();
    },
    methods: {
      proSearch() {
        if (this.$refs["main"].validate()) {
          this.bcItems[1].text = this.$route.params.id = this.search.main;
          if (this.analysis.check) {
            this.analysis.show = true;
            this.analysis.notFound = false;
            this.analysis.content = [];
            this.analysis.page = 0;
            this.getAnalysis();
          } else {
            this.analysis.show = false;
          }
          if (this.news.check) {
            this.news.show = true;
            this.news.notFound = false;
            this.news.content = [];
            this.news.page = 0;
            this.getNews();
          } else {
            this.news.show = false;
          }
				} else {
					this.$refs["main"].validate(true);
				}
      },
      getAnalysis() {  
        this.analysis.loading = true;
        
        // Get Default Technical Analysis
        this.$axios.$get('/api/Public/GetDefaultAnalysisCharts', {
          params: {
            Filter: this.$route.params.id,
            UserNameFilter: this.search.author,
            SymbolNameFilter: this.search.symbol,
          }
        })
        .then(response => {
          this.analysis.content = this.analysis.content.concat(response.result.items.reverse());

          if (this.analysis.content.length == 0 && this.analysis.page == 0) {
            this.analysis.notFound = true;
          } 
        })
      },
      getNews() {  
        this.news.loading = true;

        // Get News
        this.$axios.$get('/api/Public/Search', {
          params: {
            Filter: this.$route.params.id,
            AuthorFilter: this.search.author,
            SkipCount: this.news.page,
          }
        })
        .then(response => {
          this.news.content = this.news.content.concat(response.result.items);
          this.news.loading = false;

          if (this.news.content.length == 0 && this.news.page == 0) {
            this.news.notFound = true;
          } else if (this.news.content.length < this.news.page + 10) {
            this.news.status = false;
          } else {
            this.news.status = true;
          }
        })
      }
    }
  }
</script>

<style lang="scss" >
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.search-element {
  padding-top: 0;
  padding-bottom: 0;
}

.BtnResponsive{
  margin-top: 1.7rem !important;
  @include res(sm) {
    margin-top: 0px !important;
  }
}

.search-icon {
  margin: 0!important;
  font-size: 24px!important;
}

.checkbox {
  margin-top: 0;
}


.v-expansion-panel::before {
	box-shadow: 0 0 0 0 !important;
}

.v-expansion-panel-header {
	font-family: $f-m;
  border-radius: 8px;
  min-height: 30px!important;

	&:hover {
		background: #f3f3f3;
	}
}

.v-expansion-panel-header--active {
  i {
    transform: rotate(180deg);
  }
}

.v-expansion-panel-content__wrap {
  padding: 0!important;
}

.v-btn span {
  font-family: $f-m!important;
}


</style>
