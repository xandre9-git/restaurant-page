import frontPage from "./frontPage";
import pageDefaults from "./pageDefaults.js";
import { footer } from "./pageDefaults.js";

const menu = [
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
  

export default function menuPage(){



  const bodyDoc = document.getElementsByClassName('body-content');
  console.log(bodyDoc);
  bodyDoc[0].remove();
  const footer = document.getElementById('footer');
  footer.remove();
  const divMenu = document.createElement('div');
  divMenu.classList = 'food-drinks-menu';
  const entrees = document.createElement('div');
  entrees.classList = "entrees";
  const entreesTitle = document.createElement('h1');
  entreesTitle.textContent = "ENTREES"
  entrees.appendChild(entreesTitle);
  divMenu.appendChild(entrees)
  let i = 0;
  for (;i < menu.length; i++) {
    const entree = document.createElement('div');
    entree.classList = menu[i].class;
    entrees.appendChild(entree)
    const entreeTitle = document.createElement('h2');
    entreeTitle.textContent = menu[i].entree;
    const entreeSide = document.createElement('div');
    entreeSide.classList = "entree-desc";
    entreeSide.textContent = menu[i].sides;
    entree.appendChild(entreeTitle);
    entree.appendChild(entreeSide)
  }

  
  const content = document.getElementById('content');
  console.log('Firing.')
  content.appendChild(divMenu);
  content.appendChild(footer);
}
