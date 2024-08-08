import "./css/index.scss";
import { createApp } from "vue";

import Components from "./components";
import App from "./app.vue";
import Routes from "./routes";

const init = async () => {
  const app = createApp(App);
  app.use(Routes);
  for (const component in Components) {
    app.component(component, Components[component]);
  }
  app.mount("#app");
};

init();
