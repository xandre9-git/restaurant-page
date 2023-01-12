import Whet from "./images/whet.jpg";
import pageDefaults from "./pageDefaults";

export default function frontPage() {
  const bodyDoc = document.getElementById('body-content');
  let firstChild = bodyDoc.firstElementChild;

  const restaurantDescription = () => {  
    // if first child of div.body-content is not div.pitch, delete node and recreate
    if (firstChild != null && firstChild.className != "pitch") {
      // delete the node
      firstChild.remove();
    }
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

  return bodyDoc.appendChild(restaurantDescription());
}



