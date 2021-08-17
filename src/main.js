import {createApp} from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import elementPlus from "./plugins/element";
import './assets/sass/variables.scss'

const app = createApp(App);
app.use(store);
app.use(router);
app.use(elementPlus);
app.mount("#app");
