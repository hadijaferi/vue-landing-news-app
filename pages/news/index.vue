<template>
   <v-main>
    <v-container>

      <BaseBreadcrumb :items="bcItems" />
      
      <v-row class="spotlight" v-if="positions.spotlight">
        <v-col cols="12" md="3" class="part">
          <NewsCard :info="positions.spotlight.items[1]" :type="4" size="273_200" class="card card-sm mb-5" />
          <NewsCard :info="positions.spotlight.items[2]" :type="4" size="273_200" class="card card-sm" />
        </v-col>
        <v-col cols="12" md="6" class="part">
          <NewsCard :info="positions.spotlight.items[0]" :type="4" size="577_420" class="card card-md" />
        </v-col>
        <v-col cols="12" md="3" class="part">
          <NewsCard :info="positions.spotlight.items[3]" :type="4" size="273_200" class="card card-sm mb-5" />
          <NewsCard :info="positions.spotlight.items[4]" :type="4" size="273_200" class="card card-sm" />
        </v-col>
      </v-row>

      <v-row>

        <v-col cols="12" md="8">
          <v-row class="mt-10">
            <v-col cols="12" md="6">

              <NewsTitle title="پربازدید" :icons="['mdi-chevron-right', 'mdi-chevron-left']" />
              <!-- <template v-for="category in positions.hot">
                <NewsCard v-for="item in category.contents.items.slice(0, 2)" :info="item" :key="item.id" :type="1" class="compact" />
              </template> -->
              <template v-for="category in getCategory(10)">
                <NewsCard v-for="item in category.contents.items.slice(0, 2)" :info="item" :key="item.id" :type="1" class="compact" />
              </template>
            </v-col>
            <v-col cols="12" md="6">
              <NewsTitle title="بحث برانگیز" :icons="['mdi-chevron-right', 'mdi-chevron-left']" />
              <template v-for="category in getCategory(6)">
                <NewsCard v-for="item in category.contents.items.slice(0, 1)" :info="item" :key="item.id" :type="4" class="compact bb" />
              </template>
              <template v-for="category in getCategory(6)">
                <NewsCard v-for="item in category.contents.items.slice(1, 6)" :info="item" :key="item.id" :type="3" size="102_45" class="half half-img" />
              </template>
            </v-col>
          </v-row>
          <v-row class="mt-10">
            <v-col class="pb-0" cols="12" md="12">
              <NewsTitle title="گزارشات روزانه" :icons="['mdi-chevron-right', 'mdi-chevron-left']" />
              <template v-for="category in getCategory(16)">
                <NewsCard v-for="item in category.contents.items.slice(0, 1)" :info="item" :key="item.id" :type="2" class="half compact bb" />
              </template>
            </v-col>
            <v-col class="pt-0" cols="12" md="6">
              <template v-for="category in getCategory(16)">
                <NewsCard v-for="item in category.contents.items.slice(1, 3)" :info="item" :key="item.id" size="102_45" :type="3" class="half half-img" />
              </template>
            </v-col>
            <v-col class="pt-0" cols="12" md="6">
              <template v-for="category in getCategory(16)">
                <NewsCard v-for="item in category.contents.items.slice(3, 5)" :info="item" :key="item.id" size="102_45" :type="3" class="half half-img" />
              </template>
            </v-col>
          </v-row>
          <v-row class="mt-10">
            <v-col cols="12" md="6">
              <NewsTitle title="پیش بینی بازار بورس" :icons="['mdi-chevron-right', 'mdi-chevron-left']" />
              <template v-for="category in getCategory(17)">
                <NewsCard v-for="item in category.contents.items.slice(0, 2)" :info="item" :key="item.id" :type="1" class="compact" />
              </template>
            </v-col>
            <v-col cols="12" md="6">
              <NewsTitle title="سبدگردانان" :icons="['mdi-chevron-right', 'mdi-chevron-left']" />
              <template v-for="category in getCategory(18)">
                <NewsCard v-for="item in category.contents.items.slice(0, 2)" :info="item" :key="item.id" :type="1" class="compact" />
              </template>
            </v-col>
          </v-row>
        </v-col>

        <v-col cols="12" md="4">

          <NewsTitle v-if="categories.length > 0" title="دسته‌بندی اخبار" :icons="['mdi-newspaper-variant-multiple']" class="mt-10" />

          <!-- <v-treeview :items="allCategories">
            <template v-slot:prepend="{ item }">
              <NuxtLink :to="'news/category/' + item.id">
                <v-icon>mdi-minus</v-icon>
                {{ item.id }} {{ item.displayName}}
              </NuxtLink>
            </template>
          </v-treeview> -->

          <v-list class="categories">
            <v-list-item
              v-for="(item, index) in categories"
              :key="index"
              class="radius mt-1"
            >
              <NuxtLink :to="'news/category/' + item.id">
                <v-list-item-content>
                  <v-list-item-title v-text="item.displayName"></v-list-item-title>
                </v-list-item-content>
              </NuxtLink>
            </v-list-item>
          </v-list>
          <div  class="newsCard">
            <BaseBanner type="telegram" />

          </div>
          <!-- <NewsTitle title="شبکه‌های اجتماعی" :icons="['mdi-share-variant']"  class="mt-10" />
          <SideSocialNetworks /> -->
          <NewsTitle title="اخبار برگزیده" :icons="['mdi-newspaper-variant-outline']" class="mt-10" />
          <SideFeaturedNewsTabs :items="positions.hot" />
        </v-col>

        <v-col cols="12">
          <BaseBanner type="telegram-h" class="baseBannerTelegram" />
        </v-col>

        <v-col cols="12" md="8">
          
          <NewsTitle title="پیشنهاد سرمایه گذاری" :icons="['mdi-chevron-right', 'mdi-chevron-left']" class="mt-5" />
          <v-row>
            <template v-for="category in getCategory(2)">
              <template v-for="item in category.contents.items.slice(0, 3)">
                <v-col cols="12" md="4" :key="item.id">
                  <NewsCard :info="item" :type="5" size="240_140" class="mb-5" />
                </v-col>
              </template>
            </template>
          </v-row>
          
          <NewsTitle title="اخبار ویژه و مصاحبه" :icons="['mdi-chevron-right', 'mdi-chevron-left']" class="mt-10" />
          <v-row>
            <v-col cols="12">
              <template v-for="category in getCategory(21)">
                <NewsCard v-for="item in category.contents.items.slice(0, 3)" :info="item" :key="item.id" :type="2" class="half compact" />
              </template>
            </v-col>
          </v-row>
          
          <NewsTitle title="هفته نامه تخصصی" :icons="['mdi-chevron-right', 'mdi-chevron-left']" class="mt-10" />

          <v-row>
            <v-col cols="12" md="12">
              <template v-for="category in getCategory(26)">
                <NewsCard v-for="item in category.contents.items.slice(0, 1)" :info="item" :key="item.id" :type="5" size="766_400" class="card half-compact" />
              </template>
            </v-col>
            <template v-for="category in getCategory(26)">
              <template v-for="item in category.contents.items.slice(1, 4)">
                <v-col cols="12" md="4" :key="item.id">
                  <NewsCard :info="item" :type="5" size="240_140" class="card mb-5" />
                </v-col>
              </template>
            </template>
          </v-row>
          <!-- <v-row>
            <v-col>
              <v-pagination
                v-model="page"
                :length="6"
                :color="$store.state.cPrimary"
              ></v-pagination>
            </v-col>
          </v-row> -->
        </v-col>

        <v-col cols="12" md="4">
          <NewsTitle title="خبرنامه" :icons="['mdi-email-open-outline']" class="mt-5" />
          <SideNewsletter />
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
      treeItems: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],
      
      page: 1,
      bcItems: [
        {
          text: 'اخبار',
          disabled: true,
          href: '#',
        },
      ],
      
      newsData: {
        id: "",
        author: "",
        publishTime: "",
        title: "",
        lead: "",
        guidId: "",
        files: [
          {
            guidId: "",
          }
        ]
      },

      CategoriesNewsData: [],

      positions: {
        spotlight: "",
        featured: "",
        hot: "",
      },

      allCategories: [],
      categories: []
    }),
    created: function () {

      this.getCategories();

      // Get Recent Contents
      this.$axios.$get('/api/Public/RecentContents', {
        params: {
          TenantId: 1
        }
      })
      .then(response => {
        this.newsData = response.result.items;
      })

      // Get Contents by Categories
      this.$axios.$get('/api/Public/CategoriesRecentContents', {
        params: {
          TenantId: 1,
          CategoriesFilter: [1, 16]
        }
      })
      .then(response => {
        this.CategoriesNewsData = response.result.items;
      })

      // Get Contents by Positions
      this.$axios.$get('/api/Public/PositionContents', {
        params: {
          TenantId: 1,
          WebPageId: 1,
          PagePositionId: 1,
          CategoryTypeId: 1
        }
      })
      .then(response => {
        this.positions.spotlight = response.result;
      })

      this.$axios.$get('/api/Public/PositionContents', {
        params: {
          TenantId: 1,
          WebPageId: 1,
          PagePositionId: 6,
          CategoryTypeId: 1
        }
      })
      .then(response => {
        this.positions.featured = response.result.items;
      })

      this.$axios.$get('/api/Public/PositionContents', {
        params: {
          TenantId: 1,
          WebPageId: 1,
          PagePositionId: 7,
          CategoryTypeId: 1
        }
      })
      .then(response => {
        this.positions.hot = response.result.items;
      })

    },
    methods: {
      getCategory: function(id) {
        return this.CategoriesNewsData.filter(function(category) {
          return category.id == id;
        })
      },
      getCategories() {
        this.$axios.$get('/api/services/app/Category/GetCategories')
        .then(response => {
          this.allCategories = response.result.items;
					for (var i=0; i <= this.allCategories.length-1; i++) {
						if (this.allCategories[i].parentId == null) {
              this.categories.push(this.allCategories[i]); 
						} 
        	}
        })
      },
      getSubCategories(item) {
        for (var i=0; i <= this.allCategories.length-1; i++) {
          if (this.allCategories[i].parentId == 1) {
            item.parentId.push(...this.allCategories[i])
          } 
        }
      },
    }
  }
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.spotlight {
  .part {

		@include res(sm) {
      padding-top: 10px!important;
      padding-bottom: 10px!important;
		}

  }
}

.baseBannerTelegram{
  margin-top: 5px;
  @media screen and (max-width: 959px) {
    margin-top: 0px;
    display: none !important;
  }
}
.newsCard {
  margin-top: 5px;
  @media screen and (max-width: 959px) {
    display: none !important;
  }

}

.categories {
  .v-list-item {
    background: #f1f1f1;
    transition: 0.1s;
    min-height: 40px!important;

    a {
      display: block;
      width: 100%;
    }

    .v-list-item__title {
      font-size: 14px!important;
    }

    &:hover {
      background: $c1;

      .v-list-item__title {
        color: $cw!important;
        font-size: 14px!important;
      }
    }
  }
}

</style>
