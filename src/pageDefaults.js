import frontPage from "./frontPage";
import menuPage from "./menuPage";

function footer() {
  const footer = document.createElement("footer");
  footer.id = "footer";
  footer.textContent = "Designed by Xandre9";
  return footer;
}

function pageDefaults() {
  const content = document.getElementById("content");
  const bodyContent = document.createElement("div");
  bodyContent.id = "body-content";

  function restaurantName() {
    console.log("script executed");
    const h1 = document.createElement("h1");
    const restaurantAnchor = document.createElement("a");
    restaurantAnchor.textContent = "THE SELECTION";
    restaurantAnchor.id = "the-selection-link";
    h1.appendChild(restaurantAnchor);
    return h1;
  }

  function navBar() {
    const nav = document.createElement("nav");
    nav.classList = "nav-bar";
    const ul = document.createElement("ul");
    ul.classList = "ul-area";
    nav.appendChild(restaurantName());
    const menuListItem = document.createElement("li");
    const menuAnchor = document.createElement("a");
    menuListItem.appendChild(menuAnchor);
    menuAnchor.textContent = "MENU";
    menuAnchor.id = "menu-link";
    ul.appendChild(menuListItem);
    const contactListItem = document.createElement("li");
    const contactAnchor = document.createElement("a");
    contactListItem.appendChild(contactAnchor);
    contactAnchor.textContent = "CONTACT";
    contactAnchor.id = "contact-link";
    ul.appendChild(contactListItem);
    nav.appendChild(ul);
    return nav;
  }

  content.appendChild(navBar());
  content.appendChild(bodyContent);
  bodyContent.appendChild(frontPage());
  content.appendChild(footer());

  return { content, bodyContent};
}

export { pageDefaults, footer}