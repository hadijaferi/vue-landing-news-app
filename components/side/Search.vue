<template>

  <v-row class="side-input-section">
    <v-col>
      <div class="inner pa-5">
        <p></p>
        
        <template v-if="!searchPro">
          <v-text-field
            outlined
            clearable
            v-model="keyword"
            label="جستجو در تحلیل‌های تکنیکال"
            :color="$store.state.cPrimary"
            append-icon="mdi-magnify"
            clear-icon="mdi-close"
            @click:append="search"
            @keyup.enter="search"
          ></v-text-field>
        </template>

        <template v-else-if="searchPro">
          <v-text-field
            outlined
            clearable
            v-model="keyword"
            label="عنوان و متن تحلیل"
            :color="$store.state.cPrimary"
            clear-icon="mdi-close"
            @keyup.enter="search"
          ></v-text-field>
          <v-text-field
            outlined
            clearable
            v-model="user"
            label="نام کارشناس"
            :color="$store.state.cPrimary"
            clear-icon="mdi-close"
            @keyup.enter="search"
          ></v-text-field>
          <v-text-field
            outlined
            clearable
            v-model="symbol"
            label="نماد"
            :color="$store.state.cPrimary"
            clear-icon="mdi-close"
            @keyup.enter="search"
          ></v-text-field>
          <v-btn large depressed block class="bg-main white--text mb-5" @click="search">
            <v-icon>mdi-magnify</v-icon>
            جستجو
          </v-btn>
        </template>
        
        <v-btn depressed text class="more" @click="searchMode()">
          {{ more.text }}
          <v-icon>{{ more.icon }}</v-icon>
        </v-btn>
      </div>
    </v-col>
  </v-row>

</template>

<script>
  export default {
    data: () => ({  
      keyword: "",
      user: "",
      symbol: "",

      more: {
        text: "جستجوی پیشرفته",
        icon: "mdi-chevron-double-down"
      },

      searchPro: false
    }),
    methods: {
      search() {
        if ((this.keyword != null && this.keyword.replace(/\s/g, '').length) || (this.user != null && this.user.replace(/\s/g, '').length) || (this.symbol != null && this.symbol.replace(/\s/g, '').length)) {
          this.$emit('submitSearch', this.keyword, this.user, this.symbol);
        } 
      },
      searchMode() {
        this.searchPro = !this.searchPro;

        if (!this.searchPro) {
          this.more.text = "جستجوی پیشرفته",
          this.more.icon = "mdi-chevron-double-down"
        } else {
          this.more.text = "بستن",
          this.more.icon = "mdi-chevron-double-up"
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

.more {
  display: inline-block;
  font-size: 12px;
  min-width: 145px !important;

  i {
    font-size: 16px;
    margin-right: 5px;
  }
}

</style>
