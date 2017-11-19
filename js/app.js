var contentInput = document.getElementById('box-table');
var inputBox = document.getElementById('input-box');
var butonSave = document.getElementById('new-buton');
var newInputBox = document.getElementById('new-input');

// evento click para el cambio por un formulario
inputBox.addEventListener('click', function () {
  contentInput.removeChild(inputBox);
  createInput(event);
});

function createInput(event) {
  var contentForm = document.createElement('form');
  var newInput = document.createElement('input');
  var buton = document.createElement('button');
  var spanIcon = document.createElement('span');

  contentForm.setAttribute('class', 'new-form');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'new-input');
  newInput.setAttribute('id', 'new-input');
  newInput.setAttribute('placeholder', 'Añadir una lista...');
  buton.setAttribute('id', 'new-buton');


  buton.textContent = "Guardar";
  spanIcon.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';


  contentInput.appendChild(contentForm);
  contentForm.appendChild(newInput);
  contentForm.appendChild(buton);
  contentForm.appendChild(spanIcon);

  butonSave.addEventListener('click', createNewText);

}

function createNewText(event) {
  console.log("holi");
}
