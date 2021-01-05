import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue';
import DocView from '@/components/DocView.vue';
import PatientView from '@/components/PatientView.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/docView',
      name: 'docView',
      component: DocView,
    },
    {
      path: '/patientView',
      name: 'patientView',
      component: PatientView,
    },
    {
      path: '*',
      component: Home,
    },
  ]
});

export default router;