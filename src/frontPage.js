import Whet from "./images/whet.jpg";
import pageDefaults from "./pageDefaults";

export default function frontPage() {
  const bodyDoc = document.getElementById('body-content');
  let firstChild = bodyDoc.firstElementChild;
  console.log(`The first child of bodyDoc is: ${firstChild}`);
  console.log(typeof(bodyDoc));
  let keys = Object.keys(bodyDoc);
  console.log(keys);
  console.log(bodyDoc);
  // console.log(`Currently showing: ${bodyDoc[0].children}`);
  // console.log(content);

  // if first child of div.body-content does not have a class name of "pitch" delete the first child
  // if (bodyDoc[0].classList != "pitch") {
  //   // console.log("First child is not pitch.")
  //   // console.log(bodyDoc.firstChild.nodeName);
  // }
  // bodyDoc[0].remove();
  const restaurantDescription = () => {   
    console.log(`bodyDoc value in frontPage(): ${bodyDoc.childNodes}`) 

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
  console.log(`bodyDoc at the moment: ${bodyDoc}`);
  return bodyDoc.appendChild(restaurantDescription());
}



