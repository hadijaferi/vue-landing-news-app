<template>

  <v-breadcrumbs :items="finalItems" class="q-bc">
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

<style lang="scss">

.q-bc {
	margin-top: 0!important;
	padding: 0!important;
	color: rgba(0, 0, 0, 0.54);
  
  li {
    font-size: 12px!important;
  }
}

</style>
