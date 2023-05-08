<template>

  <v-alert
    :type="type"
    :msg="msg"
    transition="slide-x-reverse-transition"
    min-width="300"
  >
    {{ msg }}
  </v-alert>

</template>

<script>
  export default {
    props: ['msg', 'type'],
  }
</script>

<style lang="scss" scoped>

.v-alert {
  position: fixed!important;
  top: 80px!important;
  right: 10px!important;
  border-radius: 8px!important;
  z-index: 999;
  text-align: center;
}

</style>
