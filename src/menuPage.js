import frontPage from "./frontPage";


export default function menuPage(){
  // this needs to clear body of page
  const bodyDoc = document.getElementsByClassName('body-content');
  console.log(bodyDoc);
  bodyDoc[0].remove();

  const divMenu = document.createElement('div');
  divMenu.classList = 'food-drinks-menu';
  const foodTitle = document.createElement('p');
  foodTitle.textContent ="NAME OF ENTREE";
  divMenu.appendChild(foodTitle);
  const content = document.getElementById('content');
  console.log('Firing.')
  content.appendChild(divMenu);
}
