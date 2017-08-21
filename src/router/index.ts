import Vue from 'vue';
import Router from 'vue-router';
import AppArticle from '../components/app-article/app-article.vue';
import AppContent from '../components/app-content/app-content.vue';
import Home from '../components/home/home.vue';
import NavComponent from '../components/nav/nav.vue';
import Tata from '../components/tata/tata.vue';
import Toto from '../components/toto/toto.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      children: [
        {
          component: AppArticle,
          name: 'app-article-view',
          path: 'app-article-view',
        },
        {
          component: Toto,
          name: 'toto',
          path: 'toto',
        },
        {
          component: Tata,
          name: 'tata',
          path: 'tata',
        },
      ],
      path: '/',
      components: {
        'default': Home,
        'app-content-view': AppContent,
        'nav-view': NavComponent,
      },
    },
  ],
});
