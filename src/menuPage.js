import frontPage from "./frontPage";
import pageDefaults from "./pageDefaults.js";
import { footer } from "./pageDefaults.js";

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

const drinkMenu = [
  {
    class: "drinks",
    drink: "LAVENDER HIBISCUS PUNCH",
    desc: "LAVENDER LEMONADE WITH A TOUCH OF HIBISCUS"
  },
  {
    class: "drinks",
    drink: "CUCUMBER PEPPERMINT TEA",
    desc: "ICED PEPPERMINT TEA WITH SLICED CUCUMBERS"
  },
  {
    class: "drinks",
    drink: "SPARKLING BLOOD ORANGE DRINK",
    desc: "CARBONATED WATER MIXED WITH BLOOD ORANGE JUICE"
  }
]
  

export default function menuPage(){

  const bodyDoc = document.getElementsByClassName('body-content');
  bodyDoc[0].remove();
  const footer = document.getElementById('footer');
  footer.remove();
  const bodyContentContainer = document.createElement('div');
  bodyContentContainer.classList = 'body-content';
  const entreesAndDrinksContainer = document.createElement('div');
  entreesAndDrinksContainer.classList = "entrees-drinks";
  bodyContentContainer.appendChild(entreesAndDrinksContainer);
  const entrees = document.createElement('div');
  entrees.classList = "entrees";
  const entreesTitle = document.createElement('h1');
  entreesTitle.textContent = "ENTREES"
  entrees.appendChild(entreesTitle);
  entreesAndDrinksContainer.appendChild(entrees)
  const drinks = document.createElement('div');
  drinks.classList = "drinks";
  const drinksTitle = document.createElement('h1');
  drinksTitle.textContent = "DRINKS";
  drinks.appendChild(drinksTitle);
  entreesAndDrinksContainer.appendChild(drinks);

  let i = 0;
  for (;i < entreeMenu.length; i++) {
    const entree = document.createElement('div');
    entree.classList = entreeMenu[i].class;
    entrees.appendChild(entree)
    const entreeTitle = document.createElement('h2');
    entreeTitle.textContent = entreeMenu[i].entree;
    const entreeSide = document.createElement('div');
    entreeSide.classList = "entree-desc";
    entreeSide.textContent = entreeMenu[i].sides;
    entree.appendChild(entreeTitle);
    entree.appendChild(entreeSide)
  }

  let j = 0;
  for (;j < drinkMenu.length; j++) {
    const drink = document.createElement('div');
    drink.classList = drinkMenu[j].class;
    drinks.appendChild(drink)
    const drinkTitle = document.createElement('h2');
    drinkTitle.textContent = drinkMenu[j].drink;
    const drinkDesc = document.createElement('div');
    drinkDesc.classList = "drink-desc";
    drinkDesc.textContent = drinkMenu[j].desc;
    drink.appendChild(drinkTitle);
    drink.appendChild(drinkDesc)
  }


  const content = document.getElementById('content');
  content.appendChild(bodyContentContainer);
  content.appendChild(footer);

  return content;
}
