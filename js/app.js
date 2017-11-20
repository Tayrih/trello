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
  buton.setAttribute('class', 'btn-on');

  buton.textContent = "Guardar";
  spanIcon.innerHTML = '<i class="fa fa-times" aria-hidden="true" onclick="resetBtnTareas()"></i>';

  contentForm.appendChild(newInput);
  contentForm.appendChild(buton);
  contentForm.appendChild(spanIcon);
  buton.disabled = true;
  buton.className = "btn-off";

  //CONTROLA ESPACIOS VACIOS Y ACTIVACIÓN DEL BOTON
  newInput.addEventListener('keyup', function(){
    if(newInput.value.substr(0,1)==" "){
      newInput.value = newInput.value.substr(1);
    }
    if(newInput.value) {
      buton.setAttribute('class', 'btn-on');
      buton.disabled = false;
    } else{
      buton.setAttribute('class', 'btn-off');
      buton.disabled = true;
    }
  })

  contentGeneral.appendChild(contentForm);
  document.getElementById('new-buton').parentNode.firstChild.focus();

  // evento click para guardar el texto ingresado
  buton.addEventListener('click', function () {
    buton.disabled = true;
    buton.className = "btn-off";
    newlist(contentGeneral, newInput);
    });
}


//FUNCION AL HACER CLICK AL BOTON QUE CREA LISTAS
function newlist(contentGeneral, newInput){
  if(newInput.value) {
      var contentTextList = document.createElement('div'); // contenedor de las nuevas tareas
      var pValue = document.createElement('p');
      var pNewTarea = document.createElement('p');

      contentTextList.setAttribute('class', 'new-form left');
      pValue.setAttribute('class', 'contenido');
      pValue.setAttribute('id', 'title');
      pNewTarea.setAttribute('class', 'add-homework');

      pNewTarea.textContent = 'Añadir una tarea';
      pValue.textContent = newInput.value;

      contentTextList.appendChild(pValue);
      contentTextList.appendChild(pNewTarea);
      contentGeneral.appendChild(contentTextList);
      contentGeneral.insertBefore(contentTextList,referencia);

      newInput.value = '';

      /********************* IMPORTANTE *********************/

      pNewTarea.addEventListener('click', function () { 
        newtareas(contentTextList, pNewTarea); //REEMPLACE LA FUNCION ANIDADA PARA PODER USAR RECURSIVIDAD
      });
      resetBtnListas();
      document.getElementById('new-buton').parentNode.firstChild.focus();
    }
}


//FUNCION AL HACER CLICK AL BOTON QUE CREA TAREAS
function newtareas(contentTextList, pNewTarea){

        contentTextList.removeChild(pNewTarea);

        resetBtnListas();

        var contentForm = document.createElement('div');
        var newInput = document.createElement('textarea');
        var butonTarea = document.createElement('button');
        var spanIcon = document.createElement('span');

        contentForm.setAttribute('class', 'new-form-tarea card');
        newInput.setAttribute('id', 'new-input-card');
        newInput.setAttribute('placeholder', 'Añadir una tarea...');
        butonTarea.setAttribute('id', 'new-buton-card');

        butonTarea.textContent = "Añadir";

        spanIcon.innerHTML = '<i class="fa fa-times" aria-hidden="true" onclick="resetBtnListas()"></i>';

        contentTextList.appendChild(contentForm);
        contentForm.appendChild(newInput);
        newInput.focus();
        contentForm.appendChild(butonTarea);
        contentForm.appendChild(spanIcon);

        butonTarea.disabled = true;
        butonTarea.className = "btn-off";
        
        //CONTROLA ESPACIOS VACIOS Y ACTIVACIÓN DEL BOTON PARA LAS TAREA
        newInput.addEventListener('keyup', function(){
          if(newInput.value.substr(0,1)==" "){
            newInput.value = newInput.value.substr(1);
          }
          if(newInput.value) {
            butonTarea.setAttribute('class', 'btn-on');
            butonTarea.disabled = false;
          }
          else{
            butonTarea.setAttribute('class', 'btn-off');
            butonTarea.disabled = true;
          }
        })

        // evento click para guardar el texto ingresado
        butonTarea.addEventListener('click', function () {
          console.log('Te odio js');
          if(newInput.value) {
              var pCard = document.createElement('p');
              pCard.setAttribute('class', 'content-list');
              pCard.textContent = newInput.value;
              contentTextList.insertBefore(pCard,contentForm);
              newInput.focus();
              newInput.value = '';
          }
          butonTarea.disabled = true;
          butonTarea.className = "btn-off";
        });
}



function resetBtnListas(){

  var tareaOLD = document.getElementsByClassName('new-form-tarea');
  var oldContextList = null;
  if (tareaOLD[0] != null){
    var pOldTarea = document.createElement('p');
    pOldTarea.setAttribute('class', 'add-homework');
    pOldTarea.textContent = 'Añadir tarea';
    oldContextList = tareaOLD[0].parentNode;
    oldContextList.appendChild(pOldTarea);
    tareaOLD[0].remove();  
    pOldTarea.addEventListener('click', function () {
      newtareas(oldContextList, pOldTarea); //AQUI ESTA LA RECURSIVIDAD RECURSIVIDAD
    });
  };

}

function resetBtnTareas(){

  var ListOLD = document.getElementById('first-form');
  var parentList = ListOLD.parentNode;
  var btnLista = document.getElementById('new-buton');
  
  if (ListOLD != null){
    var createList = document.createElement('div');
    createList.setAttribute('class', 'input-box left');
    createList.setAttribute('id', 'input-box');
    createList.textContent = 'Añadir una lista...';

    parentList.removeChild(ListOLD);
    parentList.insertBefore(createList, referencia);
    ListOLD.removeChild(ListOLD.firstChild);

    createList.addEventListener('click', function () {
      parentList.removeChild(createList);
      createInput(event);
    });
  }
}
