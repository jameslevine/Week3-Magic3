const foodButton = document.getElementById('random-food-button');
const recipeContent = document.getElementById('recipe-display');
const recipeInstructions = document.getElementById('recipe-instructions');

foodButton.addEventListener('click', () => {
  const url = 'https://www.themealdb.com/api/json/v1/1/random.php';
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let recipeObj = JSON.parse(xhr.responseText);
      let recipeName = recipeObj.meals[0].strMeal;
      recipeContent.textContent = recipeName;
      console.log(recipeObj);
      let recipeInstructionsContent = recipeObj.meals[0].strInstructions;
      recipeInstructions.textContent = recipeInstructionsContent;
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
});
