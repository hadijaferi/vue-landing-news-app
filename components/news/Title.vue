<template>

  <v-row :title="title" :icons="icons" class="title-name">
    <v-col cols="9" sm="9" md="8">
      <p>{{ title }}</p>
    </v-col>
    <v-col cols="3" sm="3" md="4" class="text-left">
      <template v-if="icons.length > 1">
          <a><v-icon>{{ icons[0] }}</v-icon></a>
        <a><v-icon>{{ icons[1] }}</v-icon></a>
      </template>
      <template v-else>
        <v-icon>{{ icons[0] }}</v-icon>
      </template>
    </v-col>
  </v-row>
  
</template>

<script>
  export default {
    props: ['title', 'icons'],
    data: () => ({

    }),
    created: function () {
      
    },
    methods: {

    }
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
    background: $c1;
  }

  p {
    font-family: $f-b;
    font-size: 16px;
    color: darken($c1, 3%);
  }

  a {
    i {
      &:hover {
        color: $c1!important;
      }
    }
  }

  i {
    font-size: 20px!important;
    color: #999999!important;
  }
}

</style>
