<template>
   <v-main class="grey lighten-4">
    <v-container>
      <BaseBreadcrumb :items="bcItems" />
      <v-row>
        <v-col>
          <v-sheet rounded="lg" class="pa-10">
            <BaseNote type="construction" class="mt-0" />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>

  export default {
    data: () => ({  
      bcItems: [
        {
          text: 'مشاوره',
          disabled: true,
          href: '#',
        },
      ],
      baskets: "",
      featuredNews: "",
      notFound: false,
      authorized: true,
      access: true
    }),
    created: function () {

    },
    methods: {
      
    }
  }
</script>

<style>

</style>
