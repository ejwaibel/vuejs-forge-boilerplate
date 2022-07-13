import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/base.css";
import "@progress/kendo-theme-default/dist/all.css";

// import TwicPics vue3 plugin
import TwicPics from "@twicpics/components/vue3";
import "@twicpics/components/style.css";

const app = createApp(App);

app.use(router);
// app is the application instance
app.use(TwicPics, {
  domain: "https://orange-pelicans.twic.pics",
});

app.mount("#app");
