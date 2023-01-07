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
    entree: "Alaskan Salmon",
    sides: "Wild Rice and Spinach"
  },
  {
    class: "entree",
    entree: "Honey Barbecued Chicken Breast",
    sides: "Whole Wheat Couscous and Chopped Cabbage"
  },
  {
    class: "entree",
    entree: "Roasted Sweet Potato Salad",
    sides: "Kale, Avocadoes, and Crushed Pecans"
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
  const entree = document.createElement('div');
  entree.classList = menu[0].class;
  entrees.appendChild(entree)
  const entreeTitle = document.createElement('h2');
  entreeTitle.textContent = menu[0].entree;
  const entreeSide = document.createElement('div');
  entreeSide.classList = "entree-desc";
  entreeSide.textContent = menu[0].sides;
  entree.appendChild(entreeTitle);
  entree.appendChild(entreeSide)
  const content = document.getElementById('content');
  console.log('Firing.')
  content.appendChild(divMenu);
  content.appendChild(footer);
}
