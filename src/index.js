import "./styles.css";

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


function footer() {
  const footer = document.createElement('footer');
  footer.textContent = 'xandre9';
  return footer
}



const content = document.getElementById('content');
console.log(content);

// divContent();
// content.appendChild(restaurantName());
content.appendChild(navBar());
content.appendChild(footer());


// DOM

/* <h1>The Selection</h1>
<nav>
  <ul>
    <li>Reservations</li>
    <li>Menu</li>
    <li>About Us</li>
  </ul>
</nav>


<p>The finest foods in the world, at your selection.</p>

<div id="pitch">At The Selection you gain access to the creme de la creme. <p>Our chefs are world renowned and are
  passionate about providing our guests with the best dining experience in the world. <p>Indulge yourself at our
  lovely locations that are culturally inspired with exclusive art.</p></div>
<br>
<img src="../src/images/whet.jpg"> */


// console.log(body);
// console.log(content);
