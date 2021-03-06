import Whet from "./images/whet.jpg";
import pageDefaults from "./pageDefaults";

const functionExtractionSource = pageDefaults();


function frontPage() {
  const restaurantDescription = () => {
    const whet = new Image();
    whet.src = Whet;
    whet.classList = "splash-image";
    content.appendChild(whet);
    const br = document.createElement("br");
    const pitchDiv = document.createElement("div");
    const strong = document.createElement("strong");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    strong.textContent = "The Finest Foods in the World At Your Selection.";
    p2.textContent =
      "At The Selection you gain access to the creme de la creme.";
    p3.textContent =
      "Our chefs are world renowned and are passionate about providing our guests with the best dining experience in the world.";
    p4.textContent =
      "Indulge yourself at our lovely locations that are culturally inspired with exclusive art.";
    pitchDiv.appendChild(strong);
    pitchDiv.appendChild(br);
    pitchDiv.appendChild(p2);
    pitchDiv.appendChild(p3);
    pitchDiv.appendChild(p4);
    return pitchDiv;
  };
  content.appendChild(restaurantDescription());
  content.appendChild(functionExtractionSource.footer());
}

frontPage();

export default frontPage;
