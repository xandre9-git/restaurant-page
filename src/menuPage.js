import frontPage from "./frontPage";


export default function menuPage(){
  // body.removeChild(content);
  const divMenu = document.createElement('div');
  divMenu.classList = 'food-drinks-menu';
  const foodTitle = document.createElement('p');
  foodTitle.textContent ="NAME OF ENTREE";
  divMenu.appendChild(foodTitle);
  const content = document.getElementById('content');
  console.log('Firing.')
  content.appendChild(divMenu);
}
