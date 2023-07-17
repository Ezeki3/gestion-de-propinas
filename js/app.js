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
    console.log('al menos un campo esta vacio');
  } else {
    console.log('todos los campos estan llenos');
  }
}