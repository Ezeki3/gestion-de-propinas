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

  console.log('todos los campos estan llenos');
}