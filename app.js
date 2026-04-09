// ── Estado central de la aplicación ──
let tarjetas = [];
let idContador = 1;

// Genera un ID único
const generarId = () => idContador++;

// Leer y limpiar inputs
const leerCampo = (selector) => {
  const campo = document.querySelector(selector);
  const valor = campo.value.trim();
  campo.value = "";
  return valor;
};

// Referencia a la galería
const galeria = document.querySelector("#galeria");
// ── Crear elemento tarjeta ──
const crearElementoTarjeta = ({ id, titulo, descripcion, categoria }) => {
  // Crear contenedor
  const tarjeta = document.createElement("article");

  // Clases
  tarjeta.classList.add("tarjeta", `categoria-${categoria}`);

  // Guardar ID
  tarjeta.dataset.id = id;

  // Contenido HTML
  tarjeta.innerHTML = `
    <span class="badge">${categoria}</span>
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    <button class="btn-eliminar" data-id="${id}">Eliminar</button>
  `;

  return tarjeta;
};
