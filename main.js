/*
const nombreInput = document.getElementById('nombreInput');
const agregarBtn = document.getElementById('agregarBtn');
const sortearBtn = document.getElementById('sortearBtn');
const nombresList = document.getElementById('nombresList');
const resultado = document.getElementById('resultado');

let nombres = [];

// Agregar nombre a la lista
agregarBtn.addEventListener('click', () => {
  const nombre = nombreInput.value.trim();
  if (nombre !== '') {
    nombres.push(nombre);
    const li = document.createElement('li');
    li.textContent = nombre;
    nombresList.appendChild(li);
    nombreInput.value = ''; // Limpiar el campo de texto
  }
});

// Sortear un nombre aleatorio
sortearBtn.addEventListener('click', () => {
  if (nombres.length > 0) {
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    resultado.textContent = `¡El ganador es: ${nombreAleatorio}!`;
  } else {
    resultado.textContent = 'No hay nombres para sortear.';
  }
});
*/

const nombreInput = document.getElementById('nombreInput');
const agregarBtn = document.getElementById('agregarBtn');
const sortearBtn = document.getElementById('sortearBtn');
const nombresList = document.getElementById('nombresList');
const resultado = document.getElementById('resultado');

let nombres = [];

// Agregar nombre a la lista
agregarBtn.addEventListener('click', () => {
  const nombre = nombreInput.value.trim();
  if (nombre !== '') {
    nombres.push(nombre);  // Agregar el nombre al array 'nombres'
    const li = document.createElement('li');
    li.textContent = nombre;

    // Crear botón de eliminar
    const eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.classList.add('eliminar-btn');

    // Agregar el evento de eliminación
    eliminarBtn.addEventListener('click', () => {
      nombres = nombres.filter(n => n !== nombre);  // Eliminar el nombre del array
      li.remove();  // Eliminar el elemento de la lista en el HTML
    });

    // Añadir el botón de eliminar a cada nombre
    li.appendChild(eliminarBtn);
    nombresList.appendChild(li);
    
    nombreInput.value = ''; // Limpiar el campo de texto
  }
});

// Sortear un nombre aleatorio
sortearBtn.addEventListener('click', () => {
  if (nombres.length > 0) {
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    resultado.textContent = `¡El ganador es: ${nombreAleatorio}!`;
  } else {
    resultado.textContent = 'No hay nombres para sortear.';
  }
});
