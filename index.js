(function(){
// Variables

var lista = document.getElementById("lista"),
  tareaInput = document.getElementById("tareaInput"),
  btnNuevaTarea = document.getElementById("btn-agregar");


// Funciones
var agregarTarea = function(){
  var tarea=tareaInput.value;
  nuevaTarea = document.createElement("li"),
  enlace = document.createElement("a"),
  contenido = document.createTextNode(tarea);
  if(tarea===""){
    tareaInput.setAttribute("placeholder", "La tarea no puede estar vacia");
    tareaInput.className = "error";
    return false;
  }
  enlace.appendChild(contenido);
  enlace.setAttribute("href", "#");
  nuevaTarea.appendChild(enlace);
  lista.appendChild(nuevaTarea);
  tareaInput.value = "";
  for (var i = 0; i <= lista.children.length -1; i++) {
    lista.children[i].addEventListener("click", function(){
      this.parentNode.removeChild(this);
    });
  }
};






var comprobarInput = function(){
  tareaInput.className = "";
tareaInput.setAttribute("placeholder", "Agrega tu tarea")};






var eliminarTarea = function(){
  this.parentNode.removeChild(this);
};

  // Eventos

  // Agregar Tarea
  btnNuevaTarea.addEventListener("click", agregarTarea);

  // Comprobar Input
  tareaInput.addEventListener("click", comprobarInput);

  // Borrando Elementos de la lista


}());
