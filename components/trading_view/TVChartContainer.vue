<template>
  <div>

    <div class="TVChartContainer" :id="containerId" />

    <v-btn v-if="!this.info" large elevation="0" class="bg-main white--text mt-10" @click="registerAnalyse">
      <v-icon class="head-icon">mdi-comment-edit</v-icon>
      ثبت تحلیل
    </v-btn>

    <!-- <v-dialog
      v-if="this.$route.params.id"
      v-model="dialog"
      persistent
      max-width="290"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          large elevation="0" class="red white--text mt-10"
          v-bind="attrs"
          v-on="on"
        >
          <v-icon class="head-icon">mdi-delete-forever</v-icon>
          حذف این تحلیل
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          آیا مطمئن هستید؟
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="deleteAnalyse"
          >
            بلی
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
          انصراف
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog> -->

  </div>
</template> 

<script>
// import Datafeed from "../services/charting_api/index";

export default {
  name: "TradingViewContainer",
  head() {
    return {
      title: this.title,
    };
  },
  data() {
    return {
      dialog: false,
      myWidget: null,
      title: "تحلیل تکنیکال",
      disabledFeatures: ["header_symbol_search", "header_saveload", "header_settings", "header_screenshot", "left_toolbar"],
      // enabledFeatures: ["same_data_requery", "charting_library_single_symbol_request", "use_localstorage_for_settings", "show_dialog_on_snapshot_ready", "narrow_chart_enabled", "trading_options", "side_toolbar_in_fullscreen_mode", "keep_left_toolbar_visible_on_small_screens"],
    };
  },
  props: {
    
    info: "",

    symbol: {
      default: "",
      type: String
    },
    containerId: {
      default: "tv_chart_container",
      type: String
    },
    interval: {
      default: "D",
      type: String
    },
    libraryPath: {
      default: "/vendor/charting_library/",
      type: String
    },
    chartsStorageUrl: {
      // default: 'https://saveload.tradingview.com',
      default: process.env.baseUrl + '/saveload',
      type: String
    },
    chartsStorageApiVersion: {
      default: "1.1",
      type: String
    },
    clientId: {
      default: "hamta.com",
      type: String
    },
    userId: {
      default: "",
      type: String
    },
    fullscreen: {
      default: false,
      type: Boolean
    },
    autosize: {
      default: true,
      type: Boolean
    },
    studiesOverrides: {
      type: Object
    },
    datafeedUrl: {
      // default: 'https://demo_feed.tradingview.com',
      default: process.env.baseUrl + '/api/services/app/TradingView',
      type: String
    },
    locale: {
      default: 'fa',
      type: String
    },
  },
  created: function () {

  },
  methods: {
    async registerAnalyse() {
      var symbolAddress = (document.getElementById(this.containerId).getElementsByTagName('iframe')[0].contentWindow).tradingViewApi._getDataSourceHub().mainSeries();
      var symbolName = symbolAddress.symbolInfo().name + ':' + symbolAddress.symbolInfo().full_name;
      var symbol = symbolAddress.symbolInfo().ticker;
      var interval = symbolAddress.m_interval;
      var chartData;
      var snapShot;
      var type;
      this.myWidget.save(function (data) {
        chartData = data;
      });
      snapShot = (await this.myWidget.takeClientScreenshot()).toDataURL(type);
      this.$emit('submitAnalyse', chartData, symbolName, symbol, interval, snapShot);
    },
    deleteAnalyse() {
      this.dialog = false;
      this.$axios.$delete('/api/services/app/AnalysisChart/Delete', {
        params: {
          id: this.$route.params.id
        }
      })
      .then(response => {
        this.$router.push({path: "/analysis"});
      }) 
    },
    initChartSetting() {
      const widgetOptions = {
        symbol: this.symbol,
        datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.datafeedUrl),
        interval: this.interval,
        container_id: this.containerId,
        library_path: this.libraryPath,
        locale: this.locale,
        charts_storage_url: this.chartsStorageUrl,
        charts_storage_api_version: this.chartsStorageApiVersion,
        client_id: this.clientId,
        user_id: this.$store.state.localStorage.userId,
        fullscreen: this.fullscreen,
        autosize: this.autosize,
        snapshot_url: "",
        disabled_features: this.disabledFeatures,
      };

      if (!this.info) {
        widgetOptions.disabled_features = [];
      }
      widgetOptions.snapshot_url = process.env.baseUrl + `/api/services/app/TradingView/snapshot?enc_auth_token=${encodeURIComponent(this.$store.state.localStorage.accessToken)}`;
      this.myWidget = new window.TradingView.widget(widgetOptions);
      this.myWidget.onChartReady(() => {

        if (this.info) {
          this.myWidget.load(JSON.parse(this.info.analysisChart.content));
          this.title = this.info.analysisChart.name;
        } else {
          this.title = "ثبت تحلیل جدید";
        }

        this.myWidget
        .chart()
        .onDataLoaded()
        .subscribe(
          null,
          asd => {
            // console.log("onDataLoaded");
            // listen socket here
            // Datafeed.updateSocket();
          },
          error => {
            console.log("onDataError", error);
          }
        );
      },
      error => {
        console.log("onChartReady.error", error);
      });
        
      this.myWidget.headerReady().then(() => {
        const dropdown = "<select id='adjustmentType' style='cursor: pointer; border: 0; height: 38px; font-family: &quot;IRANSansWeb_Fa&quot;'>" +
          "<option selected value='1'>افزایش سرمایه<\/option>" +
          "<option value='2'>افزایش سرمایه و سود نقدی<\/option>" +
          "<option value='3'>بدون تعدیل<\/option>" +
          "<\/select>";
        const button = this.myWidget.createButton();
        button.insertAdjacentHTML('beforeend', dropdown);
        button.setAttribute('class', 'adjustmentType');
        button.addEventListener('change', (e) => {
          var symbol = (document.getElementById('tv_chart_container').getElementsByTagName('iframe')[0].contentWindow).tradingViewApi._getDataSourceHub().mainSeries().symbolInfo().ticker.split('-')[0];
          symbol = symbol + '-' + e.target.value;
          this.myWidget.activeChart().setSymbol(symbol, undefined);
        });
      });
    }
  },
  mounted() {
    setTimeout(() => {
      this.initChartSetting();
    }, 0);
  },
};

</script>

<style lang="css" scoped>
  .TVChartContainer {
  	height: calc(65vh);
    min-height: 600px;
  }
</style>