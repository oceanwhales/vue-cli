import { getRootCompiler } from 'awesome-typescript-loader/dist/instance';
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as Vue from 'vue';
import App from './App';
import router from './router';

require('../node_modules/semantic-ui-css/semantic.css');
const semantic = require('../node_modules/semantic-ui-css/semantic.js');
Vue.use(semantic);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
