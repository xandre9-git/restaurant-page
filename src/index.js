import "./styles.css";
import frontPage from "./frontPage";
import menuPage from "./menuPage";
import { contactPage } from "./contactPage";
import { pageDefaults } from "./pageDefaults.js";

// Landing Page Function
pageDefaults();

// Front Page Add Event Listener
const splashPage = document.getElementById("the-selection-link");
splashPage.addEventListener("click", () => {
  frontPage();
});

// Menu Page Add Event Listener
const menuList = document.getElementById("menu-link");
menuList.addEventListener("click", menuPage);

// Contact Page Add Event Listener
const contactInfo = document.getElementById("contact-link");
console.log(contactInfo);
contactInfo.addEventListener("click", contactPage);