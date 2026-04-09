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
