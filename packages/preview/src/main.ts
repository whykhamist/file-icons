import "./css/index.scss";
import { createApp } from "vue";

import App from "./app.vue";
import Routes from "./routes";

const init = async () => {
  const app = createApp(App);

  app.use(Routes);

  app.mount("#app");
};

init();
