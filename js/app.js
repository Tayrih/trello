var contentGeneral = document.getElementById('box-table');
var inputBox = document.getElementById('input-box');
var referencia = document.getElementById('referencia');

// evento click para el cambio por un formulario
inputBox.addEventListener('click', function () {
  contentGeneral.removeChild(inputBox);
  createInput(event);
});

// funcion para guardar texto ingresado al input
function createInput(event) {
  var contentForm = document.createElement('div');
  var newInput = document.createElement('input');
  var buton = document.createElement('button');
  var spanIcon = document.createElement('span');

  contentForm.setAttribute('class', 'new-form left');
  contentForm.setAttribute('id', 'first-form');
  newInput.setAttribute('type', 'text');
  newInput.setAttribute('name', 'new-input');
  newInput.setAttribute('id', 'new-input');
  newInput.setAttribute('placeholder', 'Añadir una lista...');
  buton.setAttribute('id', 'new-buton');

  buton.textContent = "Guardar";
  spanIcon.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

  contentForm.appendChild(newInput);
  contentForm.appendChild(buton);
  contentForm.appendChild(spanIcon);

  contentGeneral.appendChild(contentForm);

  var butonSave = document.getElementById('new-buton'); // variable para obtener el boton inicial: GUARDAR
  // evento click para guardar el texto ingresado
  butonSave.addEventListener('click', newTareaBox);
}

function newTareaBox(event) {
  var form = document.getElementById('first-form'); //primer div que almacena el formulario para agregar tareas
  var newInputBox = document.getElementById('new-input');

  if(newInputBox.value) {
      var contentTextList = document.createElement('div'); // contenedor de las nuevas tareas
      var pValue = document.createElement('p');
      var pNewTarea = document.createElement('p');

      contentTextList.setAttribute('class', 'new-form left');
      pValue.setAttribute('class', 'contenido');
      pValue.setAttribute('id', 'title');
      pNewTarea.setAttribute('class', 'add-homework');

      pNewTarea.textContent = 'Añadir tarea';
      pValue.textContent = newInputBox.value;

      contentTextList.appendChild(pValue);
      contentTextList.appendChild(pNewTarea);
      contentGeneral.appendChild(contentTextList);
      contentGeneral.insertBefore(contentTextList,referencia);

      newInputBox.value = '';

      var contentTareas = document.getElementsByClassName('new-form left')[0];  // selecciona a los contenedores de tareas con ese nombre de clase
      var newTarea = document.getElementsByClassName('add-homework')[0]; // añadir tarea...
      newTarea.addEventListener('click', function (event) {
        // contentTareas.replaceChild(nuevo_nodo,newTarea);
        contentTareas.removeChild(newTarea);
        createNewCard(event);
      });
  }
}


function createNewCard() {
  var contentTareas = document.getElementsByClassName('new-form left')[0];

  var contentForm = document.createElement('div');
  var newInput = document.createElement('textarea');
  var buton = document.createElement('button');
  var spanIcon = document.createElement('span');

  contentForm.setAttribute('class', 'new-form card');
  newInput.setAttribute('id', 'new-input-card');
  newInput.setAttribute('placeholder', 'Añadir una tarea...');
  buton.setAttribute('id', 'new-buton-card');

  buton.textContent = "Añadir";
  spanIcon.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';

  contentTareas.appendChild(contentForm);
  contentForm.appendChild(newInput);
  newInput.focus();
  contentForm.appendChild(buton);
  contentForm.appendChild(spanIcon);


  var butonSave = document.getElementById('new-buton-card'); // boton para añadir una lista de tareas
  // evento click para guardar el texto ingresado
  butonSave.addEventListener('click', function () {
    var form = document.getElementsByClassName('new-form card')[0];
    var newInputBox = document.getElementById('new-input-card');
    var parentTitle = document.getElementById('title').parentNode;
    console.log('Te odio js');
   if(newInputBox.value) {
        var pCard = document.createElement('p');
        pCard.setAttribute('class', 'content-list');
        pCard.textContent = newInputBox.value;
        parentTitle.insertBefore(pCard,form);
        pCard.focus();
        newInputBox.value = '';
      }
    });
}
