<template>

  <v-breadcrumbs :items="finalItems" class="breadcrumb">
    <template v-slot:divider>
      <v-icon>mdi-chevron-left</v-icon>
    </template>
  </v-breadcrumbs>

</template>

<script>
  export default {
    props: ['items'],
    data: () => ({
      finalItems: [
        {
          text: 'خانه',
          disabled: false,
          href: '/',
        }
      ]
    }),
    created: function () {
      Array.prototype.push.apply(this.finalItems, this.items);
    }
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.breadcrumb {
  margin-top: 75px;
  padding: 0 0 20px 0!important;

  @include res(sm) {
    margin-top: 60px;
  }
}

</style>
