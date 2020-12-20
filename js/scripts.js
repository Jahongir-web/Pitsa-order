var elForm = document.querySelector(`.js-order-form`);


var typesOfBread = [`yupqa`, `qalin`, `buxonkali`];

var typesOfSize = [`25sm`, `30sm`, `35sm`];

var ingredients = [`pamidor`, `kurka go'shti`, `zaytun`, `bodring`, `qo'ziqorin`, `qazi`];

var addedIngredients = [];
var pizzaAddls = [];


if (elForm) {
  var elSelect = elForm.querySelector(`.js-order-select`);
  var elKattaligi = elForm.querySelector(`.kattalik-turi`);
  var elIngredientsBox = elForm.querySelector(`.massalliqlar`);  // inputlar
  var elNonTuri = elForm.querySelector(`.non-turi`);
  var elSizeDiv = elForm.querySelector(`.kattaligi`);
  var elUstida = elForm.querySelector(`.ustida`);

}

for (var type of typesOfBread){
  var elOption = document.createElement(`option`);

  elOption.value = type;
  elOption.textContent = type;
  elSelect.appendChild(elOption);
}

elSelect.addEventListener(`change`, function(){
  elNonTuri.textContent = elSelect.value;
});

// non turi tanlanishi ishladi.


// pitsa o'lchamini tanlash qismi boshlandi.

for (let size of typesOfSize) {
  var elLabel = document.createElement(`label`);
  var elRadio = document.createElement(`input`);
  var elLabelSpan = document.createElement(`span`);

  elLabelSpan.textContent = size;
  elLabelSpan.classList.add(`circle`);
  elRadio.classList.add(`sr-only`, `radio-input`);
  elRadio.type = "radio";
  elRadio.name = `radio`;

  elLabel.appendChild(elRadio);
  elLabel.appendChild(elLabelSpan);
  elSizeDiv.appendChild(elLabel);

  elRadio.addEventListener(`change`, function(){
    elKattaligi.textContent = size;
  });
}

// pitsa o'lchamini tanlash qismi ishladi.


// pitsa qo'shimchalarini tanlash qismi boshlandi.


var updateOrderIngredients = function () {

  elUstida.innerHTML = '';

  for (var addedIngredient of addedIngredients) {
    var elIngredientItem = document.createElement('li'); // li yasaymiz
    elIngredientItem.textContent = addedIngredient;
    elUstida.appendChild(elIngredientItem); // li ni ul ga joylab qo'yamiz.
  }
};


for (let ingredient of ingredients) {
  var ingredientsLabel = document.createElement(`label`);
  var ingredientsInput = document.createElement(`input`);
  var ingredientsSpan = document.createElement(`span`);

  ingredientsLabel.classList.add(`label-ingredient`);
  ingredientsLabel.textContent = ingredient;
  ingredientsInput.type = `checkbox`;
  ingredientsInput.name = ingredient;
  ingredientsInput.value = ingredient;
  ingredientsInput.classList.add(`ingredient-checkbox`);
  ingredientsInput.classList.add(`sr-only`);
  ingredientsSpan.classList.add(`ingredient-span`);

  ingredientsLabel.appendChild(ingredientsInput);
  ingredientsLabel.appendChild(ingredientsSpan);

  elIngredientsBox.appendChild(ingredientsLabel);


  ingredientsInput.addEventListener (`click`, function () {


    if (addedIngredients.includes(this.name)) {
      var itemIndex = addedIngredients.indexOf(this.name);
      addedIngredients.splice(itemIndex, 1);
    } else {
      addedIngredients.push(this.name);
    }

    updateOrderIngredients ();
    console.log(addedIngredients);
  });
}

// pitsa qo'shimchalarini tanlash qismi tugadi.
