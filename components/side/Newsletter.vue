<template>

  <v-row class="side-input-section">
    <v-col>
      <div class="inner pa-5">
        <p>برای دریافت آخرین خبرها عضو خبرنامه ما بشوید!</p>
        <v-text-field
          class="ltr"
          label="پست الکترونیک"
          outlined
          :color="$store.state.cPrimary"
          prepend-icon="mdi-send"
        ></v-text-field>
      </div>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>
