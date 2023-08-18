import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'

Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.config.productionTip = false

App.get('/',(req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  const query = req.query;
  res.send({
    status: 0,
    data: query,
  });
})

new Vue({
  render: h => h(App)
}).$mount('#app')
