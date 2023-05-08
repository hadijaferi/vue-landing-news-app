<template>

  <v-row :items="items" class="featured-news">
    <v-col>
      <div class="inner">
        <NewsCard v-for="item in items" :info="item" :key="item.id" :type="3" size="85_48" class="half min-img" />
      </div>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    props: ['items'],
    data: () => ({
      
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
  }
}

</style>
