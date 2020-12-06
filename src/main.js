import { createApp } from "vue";
import apolloProvider from "../apollo";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(apolloProvider)
  .use(store)
  .use(router)
  .mount("#app");
