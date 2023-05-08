<template>

  <v-row :items="items" class="featured-news">
    <v-col>
      <div class="inner pa-5">
        <v-tabs v-model="tab" fixed-tabs>
          <v-tabs-slider color="teal"></v-tabs-slider>
          <v-tab
            v-for="item in tabTitles"
            :key="item"
            class="tabs teal--text"
          >
            {{ item }}
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab" class="pa-5">
          <template v-for="n in 3">
            <v-tab-item :key="n">
              <NewsCard v-for="item in items" :info="item" :key="item.id" :type="3" size="85_48" class="half min-img" />
            </v-tab-item>
          </template>
        </v-tabs-items>
      </div>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    props: ['items'],
    data: () => ({
      tab: null,
      tabTitles: [
        'داغ',
        'دیده شده',
        'بحث برانگیز',
      ],
    }),
    created: function () {

    },
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.featured-news {

  .inner {
    padding: 20px;
    background: #f8f8f8;

    .tabs {
      font-size: 14px;
      letter-spacing: 0;
    }
  }
}


</style>
