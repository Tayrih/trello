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


  // evento click para guardar el texto ingresado
  buton.addEventListener('click', function () {
    if(newInput.value) {
        var contentTextList = document.createElement('div'); // contenedor de las nuevas tareas
        var pValue = document.createElement('p');
        var pNewTarea = document.createElement('p');

        contentTextList.setAttribute('class', 'new-form left');
        pValue.setAttribute('class', 'contenido');
        pValue.setAttribute('id', 'title');
        pNewTarea.setAttribute('class', 'add-homework');

        pNewTarea.textContent = 'Añadir tarea';
        pValue.textContent = newInput.value;

        contentTextList.appendChild(pValue);
        contentTextList.appendChild(pNewTarea);
        contentGeneral.appendChild(contentTextList);
        contentGeneral.insertBefore(contentTextList,referencia);

        newInput.value = '';

        pNewTarea.addEventListener('click', function (event) {
          // contentTareas.replaceChild(nuevo_nodo,newTarea);
        contentTextList.removeChild(pNewTarea);

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

        contentTextList.appendChild(contentForm);
        contentForm.appendChild(newInput);
        newInput.focus();
        contentForm.appendChild(buton);
        contentForm.appendChild(spanIcon);

        // evento click para guardar el texto ingresado
        buton.addEventListener('click', function () {
          console.log('Te odio js');
         if(newInput.value) {
              var pCard = document.createElement('p');
              pCard.setAttribute('class', 'content-list');
              pCard.textContent = newInput.value;
              contentTextList.insertBefore(pCard,contentForm);
              pCard.focus();
              newInput.value = '';
            }
          });
        });
    }
  });
}
