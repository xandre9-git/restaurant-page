import Whet from "./images/whet.jpg";
import pageDefaults from "./pageDefaults";

export default function frontPage() {
  const restaurantDescription = () => {    
    const pitchDiv = document.createElement("div");
    pitchDiv.classList = "pitch";
    const whet = new Image();
    whet.src = Whet;
    whet.classList = "splash-image";
    pitchDiv.appendChild(whet);
    const br = document.createElement("br");
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
  return content.appendChild(restaurantDescription());
}



