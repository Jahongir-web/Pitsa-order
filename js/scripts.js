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
    var elLabel = document.createElement(`label`);
    var elRadio = document.createElement(`input`);

    elLabel.textContent = size;
    elLabel.htmlFor = size;
    elRadio.type = "radio";
    elRadio.name = `radio`;
    elRadio.id = size;
    elSizeDiv.appendChild(elLabel);
    elSizeDiv.appendChild(elRadio);



    elSizeDiv.addEventListener(`change`, function(){
      var elKattaligi = elForm.querySelector(`.kattalik-turi`);
      elKattaligi.textContent = (size);
    });
  }


}