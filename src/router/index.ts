import Vue from 'vue';
import Router from 'vue-router';
import AppContentComponent from '../components/app-content/app-content.vue';
import Home from '../components/home/home.vue';
import NavComponent from '../components/nav/nav.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components: {
       'default': Home,
       'app-content-view': AppContentComponent,
       'nav-view': NavComponent,
      },
    },
  ],
});
