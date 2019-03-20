const foodButton = document.getElementById('random-food-button');
const recipeContent = document.getElementById('recipe-display');
const recipeInstructions = document.getElementById('recipe-instructions');
const recipePicture = document.getElementById('recipe-picture');
const ingredients = document.querySelector('ul');

foodButton.addEventListener('click', () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let recipeObj = JSON.parse(xhr.responseText);
      console.log(recipeObj);
      //recipe name
      let recipeName = recipeObj.meals[0].strMeal;
      recipeContent.textContent = recipeName;
      //recipe instructions
      let recipeInstructionsContent = recipeObj.meals[0].strInstructions;
      recipeInstructions.textContent = recipeInstructionsContent;
      //recipe picture
      let recipePic = recipeObj.meals[0].strMealThumb;
      recipePicture.src = recipePic;
      //recipe ingredients
      let ingGroup = recipeObj.meals[0]
      let ing = Object.entries(ingGroup).slice(9, 29);
      let mea = Object.entries(ingGroup).slice(29, 49);
      console.log(mea);

      const ingArr = [];
      const meaArr = [];
      const finArr = [];

      while (ingredients.firstChild) {
        ingredients.removeChild(ingredients.firstChild)
      };

      ing.map(x => {
        if (x[1] !== "") {
          if (x[1] !== null) {
            ingArr.push(x[1]);
          }
        }

      });

      mea.map(x => {
        if (x[1] !== "") {
          if (x[1] !== null) {
            meaArr.push(x[1]);
          }
        };
      });
      console.log(ingArr);
      console.log(meaArr);

      for (let i = 0; i < ingArr.length; i++) {
        finArr.push(ingArr[i] + ": " + meaArr[i]);
      };

      console.log(finArr);

      finArr.map(x => {
        let ingredientsLi = document.createElement('LI');
        let ingredientText = document.createTextNode(x);
        ingredientsLi.appendChild(ingredientText);
        ingredients.appendChild(ingredientsLi);
      });
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
});
