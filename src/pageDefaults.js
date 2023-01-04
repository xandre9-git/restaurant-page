import frontPage from "./frontPage"


const content = document.getElementById("content");

function pageDefaults() {

  function restaurantName() {
    console.log("script executed");
    const h1 = document.createElement("h1");
    const restaurantAnchor = document.createElement("a");
    restaurantAnchor.textContent = "THE SELECTION";
    restaurantAnchor.classList = "nav-anchor-link";
    // restaurantAnchor.setAttribute('href', "https://www.google.com")
    restaurantAnchor.addEventListener("click", () => {
      frontPage();
    });
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
    menuAnchor.classList = "nav-anchor-link";
    menuAnchor.setAttribute("href", "https://www.google.com");
    ul.appendChild(menuListItem);
    const locationListItem = document.createElement("li");
    const locationAnchor = document.createElement("a");
    locationListItem.appendChild(locationAnchor);
    locationAnchor.textContent = "LOCATIONS";
    locationAnchor.classList = "nav-anchor-link";
    locationAnchor.setAttribute("href", "https://www.google.com");
    ul.appendChild(locationListItem);
    const contactListItem = document.createElement("li");
    const contactAnchor = document.createElement("a");
    contactListItem.appendChild(contactAnchor);
    contactAnchor.textContent = "CONTACT";
    contactAnchor.classList = "nav-anchor-link";
    contactAnchor.setAttribute("href", "https://www.google.com");
    ul.appendChild(contactListItem);
    nav.appendChild(ul);
    
    return nav;
  }

  function footer() {
    const footer = document.createElement("footer");
    footer.textContent = "Designed by Xandre9";
    return footer;
  }

  content.appendChild(navBar());

  return { navBar, footer }

}



export default pageDefaults;
