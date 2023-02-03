import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faHatWizard,
  faTemperatureHalf,
  faLocationDot,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./assets/main.css";

//Font Awesome
library.add(
  faHatWizard,
  faTemperatureHalf,
  faLocationDot,
  faCircleInfo,
  faCalendar
);
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
