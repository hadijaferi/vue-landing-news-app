<template>

  <v-row :dimensions="dimensions">
    <v-col class="pt-0">
      <v-img :src="'https://via.placeholder.com/' + dimensions[0] + 'x' + dimensions[1]"></v-img>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    props: ['dimensions']
  }
</script>

<style lang="scss" scoped>


</style>
