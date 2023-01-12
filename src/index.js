import "./styles.css";
import frontPage from "./frontPage";
import menuPage from "./menuPage";
import { pageDefaults } from "./pageDefaults.js";

// Landing Page Function
pageDefaults();

// Front Page Add Event Listener
const splashPage = document.getElementsByClassName("nav-anchor-link")[0];
splashPage.addEventListener("click", () => {
  frontPage();
});

// Menu Page Add Event Listener

