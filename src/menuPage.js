import frontPage from "./frontPage";
import pageDefaults from "./pageDefaults.js";
import { footer } from "./pageDefaults.js";

const menu = [
  {
    id: "wagyu",
    entree: "8 Ounce Wagyu Steak",
    sides: "Garlic Mashed Potatoes and Asparagus", 
  },
  {
    id: "salmon",
    entree: "Alaskan Salmon",
    sides: "Wild Rice and Spinach"
  },
  {
    id: "chicken",
    entree: "Honey Barbecued Chicken Breast",
    sides: "Whole Wheat Couscous and Chopped Cabbage"
  },
  {
    id: "salad",
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
  divMenu.appendChild(entrees)
  const entree = "";
  const selectionTitle = document.createElement('h2');
  selectionTitle.textContent = menu[0].entree;
  entrees.appendChild(selectionTitle);
  const content = document.getElementById('content');
  console.log('Firing.')
  content.appendChild(divMenu);
  content.appendChild(footer);
}
