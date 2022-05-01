import "./styles.css";
import Whet from "./images/whet.jpg"

function restaurantName() {
  console.log("script executed");
  const h1 = document.createElement("h1");
  h1.textContent = "The Selection";
  return h1;
}

function navBar() {
  const nav = document.createElement('nav');
  nav.classList = "nav-bar";
  const ul = document.createElement('ul');
  ul.classList = 'ul-area';
  nav.appendChild(restaurantName());
  const menuListItem = document.createElement('li');
  const menuAnchor = document.createElement('a');
  menuListItem.appendChild(menuAnchor);
  menuAnchor.textContent = "MENU";
  menuAnchor.classList = "nav-anchor-link";
  menuAnchor.setAttribute('href', 'https://www.google.com')
  ul.appendChild(menuListItem);
  const locationListItem = document.createElement('li');
  const locationAnchor = document.createElement('a');
  locationListItem.appendChild(locationAnchor);
  locationAnchor.textContent = "LOCATIONS";
  locationAnchor.classList = "nav-anchor-link";
  locationAnchor.setAttribute('href', 'https://www.google.com')
  ul.appendChild(locationListItem);
  nav.appendChild(ul);
  return nav;
}

const whet = new Image();
whet.src = Whet;
whet.classList = 'splash-image';
console.log(whet);

const restaurantDescription = () => {
  const br = document.createElement('br');
  const pitchDiv = document.createElement('div');
  const strong = document.createElement('strong');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const p4 = document.createElement('p');
  strong.textContent = 'The Finest Foods in the World At Your Selection.';
  p2.textContent = 'At The Selection you gain access to the creme de la creme.';
  p3.textContent = 'Our chefs are world renowned and are passionate about providing our guests with the best dining experience in the world.';
  p4.textContent = 'Indulge yourself at our lovely locations that are culturally inspired with exclusive art.';
  pitchDiv.appendChild(strong);
  pitchDiv.appendChild(br);
  pitchDiv.appendChild(p2);
  pitchDiv.appendChild(p3);
  pitchDiv.appendChild(p4);
  return pitchDiv;
}

function footer() {
  const footer = document.createElement('footer');
  footer.textContent = 'Designed by Xandre9';
  return footer
}

const content = document.getElementById('content');
content.appendChild(navBar());
content.appendChild(whet);
content.appendChild(restaurantDescription());
content.appendChild(footer());




