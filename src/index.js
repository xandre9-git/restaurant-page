import "./styles.css";
import frontPage from "./frontPage";
import menuPage from "./menuPage";
import { pageDefaults } from "./pageDefaults.js";

pageDefaults();

const splashPage = document.getElementsByClassName("nav-anchor-link")[0];
console.log(splashPage);
splashPage.addEventListener("click", () => {
  frontPage();
});