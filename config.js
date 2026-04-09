/**
 * AGENTES: editá solo CONFIG y el array stock. Este archivo debe cargarse antes de app.js.
 * No dupliques estos datos en HTML u otros scripts.
 */
window.NotebookShop = window.NotebookShop || {};

window.NotebookShop = window.NotebookShop || {};
window.NotebookShop.CONFIG = {
  nombreVendedor: "NoteMaster",
  localidad: "Chaco",
  whatsapp: "543625339969",
  facebook: "https://www.facebook.com/"
};

window.NotebookShop.stock = window.NotebookShop.stock || [];

window.NotebookShop.stock = [
    {
    id: 1,
    nombre: "Dell Latitude 5420",
    especificaciones: "Intel Core i7 vPro 11va, 16GB DDR4, SSD M.2 500GB, Pantalla 14\" táctil",
    estado: "Usado - Impecable, totalmente funcional",
    precio: 625000,
    imagen: "imagenes/intel/Dell-i7.png",
  },
  {
    id: 2,
    nombre: "Acer - Nueva en caja",
    especificaciones: "Intel Core i3 N305 11va Gen, 8GB DDR5, SSD M.2 500GB, Pantalla 15.6\"",
    estado: "Nueva en caja - Con cargador y papeles",
    precio: 400000,
    imagen: "imagenes/intel/Acer-i3.png",  // CAMBIAR POR TU IMAGEN
  },
  {
    id: 3,
    nombre: "Acer - Nueva en caja",
    especificaciones: "Intel Core i3 N305 11va Gen, 8GB DDR5, SSD M.2 500GB, Pantalla 15.6\"",
    estado: "Nueva en caja - Con cargador y papeles",
    precio: 400000,
    imagen: "imagenes/intel/Acer-i3-2.png",  // CAMBIAR POR TU IMAGEN
  },
  {
    id: 4,
    nombre: "Lenovo - i7 10ma Gen",
    especificaciones: "Intel Core i7 10ma Gen, 12GB DDR4, SSD M.2 1TB, Pantalla 15.6\"",
    estado: "Usado - Impecable, con caja y cargador original",
    precio: 600000,
    imagen: "imagenes/intel/Lenovo-i7.png",  // CAMBIAR POR TU IMAGEN
  },
  {
    id: 5,
    nombre: "Asus - i3 11va",
    especificaciones: "Intel Core i3 11va, 20GB DDR4, SSD M.2 256GB, Pantalla 15.6\"",
    estado: "Usado - Impecable, ideal estudio/trabajo",
    precio: 625000,
    imagen: "imagenes/intel/Asus-i3.png",  // CAMBIAR POR TU IMAGEN
  },
  {
    id: 6,
    nombre: "Lenovo - AMD Ryzen 5",
    especificaciones: "AMD Ryzen 5 7520U, Radeon 2GB, 8GB DDR5, SSD M.2 500GB, Pantalla 15.6\"",
    estado: "Usado - Impecable, ideal para juegos y programas pesados",
    precio: 625000,
    imagen: "imagenes/amd/Lenovo-r5.png",  // CAMBIAR POR TU IMAGEN
  }
];
