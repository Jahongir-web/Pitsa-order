var elForm = document.querySelector(`.js-order-form`);


var typesOfBread = [`yupqa`, `qalin`, `buxonkali`];

var typesOfSize = [`25sm`, `30sm`, `35sm`];

var ingredients = [`pamidor`, `kurka go'shti`, `zaytun`, `bodring`, `qo'ziqorin`, `qazi`];

var addedIngredients = [];
var pizzaAddls = [];


if (elForm) {
  var elSelect = elForm.querySelector(`.js-order-select`);
  var elNonTuri = elForm.querySelector(`.non-turi`);
  var elKattaligi = elForm.querySelector(`.kattalik-turi`);
  var elUstida = elForm.querySelector(`.ustida`);
  var elSizeDiv = elForm.querySelector(`.kattaligi`);

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
