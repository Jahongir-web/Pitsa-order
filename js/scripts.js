var elForm = document.querySelector(`.js-order-form`);
var elSelect = elForm.querySelector(`.js-order-select`);
var elNonTuri = elForm.querySelector(`.non-turi`);
var elKattaligi = elForm.querySelector(`.kattalik-turi`);
var elUstida = elForm.querySelector(`.ustida`);
var elSizeDiv = elForm.querySelector(`.kattaligi`);

if (elForm) {
  var typesOfBread = [`yupqa`, `qalin`, `buxonkali`];

  for (var type of typesOfBread){
    var elOption = document.createElement(`option`);

    elOption.value = type;
    elOption.textContent = type;
    elSelect.appendChild(elOption);
  }

  elSelect.addEventListener(`change`, function(){
    elNonTuri.textContent = elSelect.value;
  });
}

if (elForm){
  var typesOfSize = [`25sm`, `30sm`, `35sm`];

  for (var size of typesOfSize) {
    var elRadio = document.createElement(`input`);
    var elLabel = document.createElement(`label`);

    elRadio.type = radio;
    elRadio.placeholder = size;
    elSizeDiv.appendChild(elRadio);
  }
}