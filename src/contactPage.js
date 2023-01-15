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

  const locationsParagraph = document.createElement('p');
  locationsParagraph.setAttribute('style', 'white-space: pre;');
  locationsParagraph.textContent = "12345 FOOD LANE \r\n"
  locationsParagraph.textContent += "HUNGRY, ST 10101";

  const phoneNumberParagraph = document.createElement('p');
  phoneNumberParagraph.textContent = "(101) 001-0010"

  const emailParagraph = document.createElement('p');
  emailParagraph.textContent = "inquiry@theselection.com";

  locationSection.appendChild(locationsTitle);
  phoneNumberSection.appendChild(phoneNumTitle);
  emailSection.appendChild(emailTitle);

  contactUs.appendChild(locationSection);
  contactUs.appendChild(locationsParagraph);
  contactUs.appendChild(phoneNumberSection);
  contactUs.appendChild(phoneNumberParagraph);
  contactUs.appendChild(emailSection);
  contactUs.appendChild(emailParagraph);

  const content = document.getElementById('content');
  content.appendChild(bodyContentContainer);
  content.appendChild(footer);
  
  return content;
}

export { contactPage };