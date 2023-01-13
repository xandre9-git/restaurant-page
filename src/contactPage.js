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

  const content = document.getElementById('content');
  content.appendChild(bodyContentContainer);
  content.appendChild(footer);
  
  return content;
}

export { contactPage };