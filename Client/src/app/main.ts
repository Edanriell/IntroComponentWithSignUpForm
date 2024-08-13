import "./styles/styles.less";

import { createApp } from "vue";

import { router } from "./providers/router";

import App from "./app.vue";

const app = createApp(App);

app.use(router);

app.mount("#app");
