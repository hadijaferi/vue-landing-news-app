<template>

  <v-row :title="title" :icon="icon" class="title-name">
    <v-col cols="9" sm="9" md="8">
      <p>{{ title }}</p>
    </v-col>
    <v-col cols="3" sm="3" md="4" class="text-left">
      <v-icon>{{ icon }}</v-icon>
    </v-col>
  </v-row>
  
</template>

<script>
  export default {
    props: ['title', 'icon'],
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';
@import '~/assets/scss/_mixins.scss';

.title-name {
  position: relative;
  margin-bottom: 0px!important;

  &:after {
    content: '';
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 22px);
    height: 1.5px;
    background: $c2;
  }

  p {
    font-family: $f-b;
    font-size: 16px;
    color: darken($c2, 3%);
  }

  i {
    font-size: 22px!important;
    color: $c2!important;
  }
}

</style>
