import Vue from 'vue';
import Router from 'vue-router';
import Start from '../views/Start';
import TreeConfiguration from '../views/TreeConfiguration';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start,
    },
    {
      path: '/buyTree',
      name: 'TreeConfiguration',
      component: TreeConfiguration,
    },
  ],
});
