const entreeMenu = [
  {
    class: "entree",
    entree: "8 OUNCE WAGYU STEAK",
    sides: "GARLIC MASHED POTATOES AND ASPARAGUS", 
  },
  {
    class: "entree",
    entree: "ALASKAN SALMON",
    sides: "WILD RICE AND SPINACH"
  },
  {
    class: "entree",
    entree: "HONEY BARBECUED CHICKEN BREAST",
    sides: "WHOLE WHEAT COUSCOUS AND CHOPPED CABBAGE"
  },
  {
    class: "entree",
    entree: "ROASTED SWEET POTATO SALAD",
    sides: "KALE, AVOCADOES, AND CRUSHED PECANS"
  }
]


function contactPage() {
  const bodyDoc = document.getElementById('body-content');
  bodyDoc.remove();
  const footer = document.getElementById('footer');
  footer.remove();
  const bodyContentContainer = document.createElement('div');
  bodyContentContainer.id = 'body-content';
  const contactUs = document.createElement('div');
  contactUs.id = "contact-us";
  bodyContentContainer.appendChild(contactUs);

  const locationSection = document.createElement('div');
  const phoneNumberSection = document.createElement('div');
  const emailSection = document.createElement('div');

  locationSection.id = "locations";
  phoneNumberSection.id = "call-us";
  emailSection.id = "email-us"

  const locationsTitle = document.createElement('h1');
  locationsTitle.textContent = "LOCATION";
  const phoneNumTitle = document.createElement('h1');
  phoneNumTitle.textContent = "CALL US";
  const emailTitle = document.createElement('h1');
  emailTitle.textContent = "EMAIL US"


  locationSection.appendChild(locationsTitle);
  locationSection.appendChild(phoneNumTitle);
  locationSection.appendChild(emailTitle);

  contactUs.appendChild(locationSection);
  contactUs.appendChild(phoneNumberSection);
  contactUs.appendChild(emailSection);
  // const telTitle = document.createElement('h1');
  // telTitle.textContent = "CALL US";
  // locationSection.appendChild(telTitle);
  const content = document.getElementById('content');
  content.appendChild(bodyContentContainer);
  content.appendChild(footer);
  return content;
}

export { contactPage };