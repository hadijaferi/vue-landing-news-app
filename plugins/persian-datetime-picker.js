import Vue from 'vue';
import VuePersianDatetimePicker from 'vue-persian-datetime-picker';
Vue.use(VuePersianDatetimePicker, {
  name: 'date-picker',
  props: {
    inputFormat: 'YYYY-MM-DD',
    format: 'jYYYY/jMM/jDD',
    autoSubmit: true,
  },
});