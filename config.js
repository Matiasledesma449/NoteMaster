/**
 * AGENTES: editá solo CONFIG y el array stock. Este archivo debe cargarse antes de app.js.
 * No dupliques estos datos en HTML u otros scripts.
 */
window.NotebookShop = window.NotebookShop || {};

window.NotebookShop.CONFIG = {
  nombreVendedor: "",
  localidad: "Tu localidad",
  // Número sin + ni espacios (código país + código área + número)
  whatsapp: "5491112345678",
  // URLs de tu perfil/página (opcional). Vacío = el ícono abre instagram.com / facebook.com hasta que las completes.
  instagram: "",
  facebook: "",
};

window.NotebookShop.stock = [
  {
    id: 1,
    nombre: "Lenovo ThinkPad T480",
    especificaciones: "Intel i5, 16GB RAM, 512GB SSD",
    estado: "Usado - Como nuevo",
    precio: 550,
    imagen: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=320&h=200&q=80",
  },
  {
    id: 2,
    nombre: "Dell Latitude 7490",
    especificaciones: "Intel i7, 16GB RAM, 256GB SSD",
    estado: "Usado - Buen estado",
    precio: 480,
    imagen: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=320&h=200&q=80",
  },
  {
    id: 3,
    nombre: "HP EliteBook 840 G5",
    especificaciones: "Intel i5, 8GB RAM, 256GB SSD",
    estado: "Usado - Buen estado",
    precio: 420,
    imagen: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=320&h=200&q=80",
  },
  {
    id: 4,
    nombre: "Acer Aspire 3",
    especificaciones: "AMD Ryzen 3, 8GB RAM, 128GB SSD",
    estado: "Usado - Regular (funcional)",
    precio: 320,
    imagen: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=320&h=200&q=80",
  },
];
