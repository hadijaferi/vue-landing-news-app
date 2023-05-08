<template>
  <v-main class="grey lighten-3">
    <v-container>
      <BaseBreadcrumb :items="bcItems" />
      <v-row v-if="$store.state.localStorage.accessToken">
        <v-col>
          <v-sheet rounded="lg" class="pa-5 mb-5">
            <v-row>
              <v-col>
                <h1 class="analyse-title mt-2">ایجاد تحلیل جدید</h1>
              </v-col>
            </v-row>
          </v-sheet>
          <v-sheet rounded="lg" class="pa-10 mb-5">
            <div class="mb-10">
              <v-text-field
                v-model="title"
                class="analyse-input"
                outlined
                label=" نام "
                :color="$store.state.cPrimary"
              ></v-text-field>
              <v-textarea
                v-model="description"
                class="analyse-input"
                outlined
                label=" توضیحات "
                :color="$store.state.cPrimary"
              ></v-textarea>
            </div>
            <TVChartContainer @submitAnalyse="submitAnalyse" />
          </v-sheet>
        </v-col>
      </v-row>
      <BaseNote v-else type="notAuthorized" class="mt-0" />
    </v-container>
  </v-main>
</template>

<script>
  import generateKey from "../../utils/generateKey";

  export default {
    data: () => ({
      bcItems: [
        {
          text: 'تحلیل تکنیکال',
          disabled: false,
          href: '/analysis',
        },
        {
          text: 'ایجاد تحلیل جدید',
          disabled: false,
          href: '',
        },
      ],
      title: '',
      description: '',
    }),
    created: function () {

    },
    methods: {
      submitAnalyse(data, symbolName, symbol, interval, snapShot) {

        var content = {
          name: this.title,
          layout: data.layout,
          charts: data.charts
        }

        this.$axios.$post('/api/services/app/AnalysisChart/CreateOrEdit', {
          "name": this.title,
          "content": JSON.stringify(content),
          "client": "Hamta",
          "userId": this.$store.state.localStorage.userId,
          "description": this.description,

          "symbol": symbol,
          "symbolName": symbolName,
          "resolution": interval,
          "snapShot": snapShot,
        })
        .then(response => {
          if (response.success) {
            this.$router.push({path: "/analysis"});
            this.showAlert("success", "با موفقیت وارد شدید.");
          } else {
            console.log(response);
          }
        })

      },
    },
    head(){
      return{
        title:"همتا | ایجاد تحلیل تکمیکال",
        meta: [
          {
            hid: generateKey("analysSingle"),
            name: 'description',
            content: "description"     // this.analyse.analysisChart.description
          },
          {
            hid: generateKey("analysSingle"),
            name: 'url',
            content: 'https://hamta.agah.com/analysis'
          },

        ],
        link:[
          {
            rel: 'canonical',
            href: 'https://hamta.agah.com' + this.$route.path
          }
        ]
      }
    },
  }
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_variables.scss';

.analyse-title {
  font-size: 28px;
  font-family: $f-b;
  margin-bottom: 10px;
  color: $c1;
}

.analyse-input {
	font-size: 14px!important;
}

</style>
