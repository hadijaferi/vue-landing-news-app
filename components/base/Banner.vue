<template>

  <v-row :type="type">
		<template v-for="(banner, index) in banners">
      <v-col v-if="type == banner.type" :key="index" class="py-0">
        <a :href="banner.link">
          <img :src="banner.image"  class="banner-img">
        </a>
      </v-col>
		</template>
  </v-row>

</template>

<script>
  export default {
    props: ['type'],
    data: () => ({  
      banners: [
        {
          type: 'telegram',
          image: require('../../static/img/banners/telegram.jpg'),
          link: 'https://t.me/AgahMoshaver',
        },
        {
          type: 'telegram-h',
          image: require('../../static/img/banners/telegram-h.jpg'),
          link: 'https://t.me/AgahMoshaver',
        },
      ],
    }),
    created: function () {

    }
  }
</script>

<style lang="scss" scoped>

.banner-img {
  border-radius: 8px!important;
  overflow: hidden;
  width: 100%;
}

</style>
