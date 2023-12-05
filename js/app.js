let cliente = {
  mesa: '',
  hora: '',
  pedido: []

};

const btnGuardarCliente = document.querySelector('#guardar-cliente');
btnGuardarCliente.addEventListener('click',  guardarCliente);

function guardarCliente(){
  const mesa = document.querySelector('#mesa').value;
  const hora = document.querySelector('#hora').value;

  // revisamos si hay campos vacios
  const camposVacios = [mesa, hora].some( campo => campo === '');

  if(camposVacios){
    // verificar si ya hay una alerta
    const existeAlerta = document.querySelector('.invalid-feedback');

    if( !existeAlerta ){
      const alerta = document.createElement('DIV');
      alerta.classList.add('.invalid-feedback','d-block','text-center', 'text-danger');
      alerta.textContent = "Todos los campos son obligatorios";
      document.querySelector('.modal-body form').appendChild(alerta);

      // Eliminar la alerta
      setTimeout(()=>{
        alerta.remove();
      }, 2000);
    }

    return;
  } 

  // Asignar datos del formulario a cliente
  cliente = {...cliente, mesa, hora};

  // Ocultar el modal
  const modalFormulario = document.querySelector('#formulario');
  const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
  modalBootstrap.hide();

  // Mostrar las secciones 
  mostrarSecciones();

  // Obtenemos platillos de la API de JSON-Server
  obtenerPlatillos();
}

function mostrarSecciones(){
  const seccionesOcultas = document.querySelectorAll('.d-none');
  seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));
}

function obtenerPlatillos(){
  const url = 'http://localhost:4000/platillos';

  fetch(url)
    .then( respuesta => respuesta.json() )
    .then( resultado => mostrarPlatillos(resultado) )
    .catch( error => console.log(error) );
}

function mostrarPlatillos(platillos){
  const contenido = document.querySelector('#platillos .contenido');

  platillos.forEach( platillo => {
    const row = document.createElement('DIV');
    row.classList.add('row');

    const nombre = document.createElement('DIV');
    nombre.classList.add('col-md-4');
    nombre.textContent = platillo.nombre;

    row.append(nombre);

    contenido.appendChild(row);
  })
}
