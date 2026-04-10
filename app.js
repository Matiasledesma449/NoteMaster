/**
 * AGENTES: datos en config.js (NotebookShop.CONFIG / stock).
 * applyConfig: brand-logo; hero-localidad, how-localidad, [data-mirror-localidad] (index).
 * initHeroCarousel: #hero-carousel (index).
 * applySocial: social-whatsapp, social-instagram, social-facebook (contacto.html). Si instagram/facebook están vacíos en CONFIG, se usan los sitios oficiales hasta que pongas tu perfil.
 * renderStock solo si existe #stock-grid (stock.html).
 */
(function () {
  "use strict";

  var shop = window.NotebookShop;
  if (!shop || !shop.CONFIG || !shop.stock) {
    return;
  }

  var CONFIG = shop.CONFIG;
  var stock = shop.stock;
  var currentFilter = null;

  function waUrl(mensaje) {
    return (
      "https://wa.me/" +
      CONFIG.whatsapp +
      "?text=" +
      encodeURIComponent(mensaje)
    );
  }

  function formatPrecio(valor) {
    return (
      "$" +
      valor.toLocaleString("es-AR", {
        maximumFractionDigits: 0,
      })
    );
  }

  function mensajeConsulta(nombreModelo) {
    return (
      "Hola! Quiero consultar por " +
      (nombreModelo.indexOf("Acer") === 0 ? "el " : "la ") +
      nombreModelo
    );
  }

  function mensajeGeneral() {
    return (
      "Hola! Vi tu página de notebooks y quiero consultar por el stock."
    );
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

function applyConfig() {
  // var brand = document.getElementById("brand-logo");
  // if (brand) {
  //   brand.textContent = "Notebooks " + CONFIG.nombreVendedor;
  // }
  setText("hero-localidad", CONFIG.localidad);
  setText("how-localidad", CONFIG.localidad);
  document.querySelectorAll("[data-mirror-localidad]").forEach(function (el) {
    el.textContent = CONFIG.localidad;
  });
}

  function applySocial() {
    var wa = document.getElementById("social-whatsapp");
    if (wa) {
      wa.href = waUrl(mensajeGeneral());
    }

    var ig = document.getElementById("social-instagram");
    if (ig) {
      var igUrl = CONFIG.instagram && String(CONFIG.instagram).trim();
      ig.href = igUrl || "https://www.instagram.com/";
    }

    var fb = document.getElementById("social-facebook");
    if (fb) {
      var fbUrl = CONFIG.facebook && String(CONFIG.facebook).trim();
      fb.href = fbUrl || "https://www.facebook.com/";
    }
  }

  // Buscá esta línea dentro de renderStock:
var filteredStock = filter ? stock.filter(function (item) {
  return item.especificaciones.toLowerCase().includes(filter.toLowerCase());
}) : stock;

// Reemplazala por:
var filteredStock = filter ? stock.filter(function (item) {
  // Si el item tiene campo 'tipo', úsalo (más preciso)
  if (item.tipo) {
    return item.tipo.toLowerCase() === filter.toLowerCase();
  }
  // Fallback: buscar en especificaciones (para datos viejos)
  return item.especificaciones.toLowerCase().includes(filter.toLowerCase());
}) : stock;

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function escapeAttr(s) {
    return escapeHtml(s).replace(/'/g, "&#39;");
  }

  function initHeroCarousel() {
    var root = document.getElementById("hero-carousel");
    if (!root) return;

    var slides = root.querySelectorAll(".hero-slide");
    var dotsWrap = root.querySelector(".hero-carousel__dots");
    var prevBtn = root.querySelector(".hero-carousel__arrow--prev");
    var nextBtn = root.querySelector(".hero-carousel__arrow--next");
    var n = slides.length;
    if (n === 0 || !dotsWrap) return;

    var i = 0;
    var timer;
    var dots = [];

    for (var d = 0; d < n; d++) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "hero-carousel__dot" + (d === 0 ? " is-active" : "");
      b.setAttribute("aria-label", "Diapositiva " + (d + 1) + " de " + n);
      if (d === 0) b.setAttribute("aria-current", "true");
      (function (index) {
        b.addEventListener("click", function () {
          go(index);
          armTimer();
        });
      })(d);
      dotsWrap.appendChild(b);
      dots.push(b);
    }

    function go(to) {
      i = (to + n) % n;
      slides.forEach(function (s, j) {
        var on = j === i;
        s.classList.toggle("is-active", on);
        s.setAttribute("aria-hidden", on ? "false" : "true");
      });
      dots.forEach(function (dot, j) {
        dot.classList.toggle("is-active", j === i);
        if (j === i) dot.setAttribute("aria-current", "true");
        else dot.removeAttribute("aria-current");
      });
    }

    function next() {
      go(i + 1);
    }

    function prev() {
      go(i - 1);
    }

    function armTimer() {
      if (timer) clearInterval(timer);
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }
      timer = setInterval(next, 6500);
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        prev();
        armTimer();
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        next();
        armTimer();
      });
    }

    go(0);
    armTimer();
  }

   // Agregar esta función antes de init()
async function cargarStockDesdeJSON() {
  try {
    const response = await fetch('/data/stock.json');
    if (!response.ok) throw new Error('No se encontró stock.json');
    const data = await response.json();
    // El JSON tiene la forma { computadoras: [...] }
    if (data.computadoras && Array.isArray(data.computadoras) && data.computadoras.length) {
      window.NotebookShop.stock = data.computadoras;
      console.log('✅ Stock cargado desde CMS (JSON)');
      return true;
    }
  } catch (error) {
    console.warn('⚠️ Usando stock local (hardcodeado) - ', error.message);
  }
  return false;
}

// Modificá la función init() para que sea async
async function init() {
  applyConfig();
  applySocial();
  
  // Cargar stock desde JSON (si existe)
  await cargarStockDesdeJSON();
  
  // Ahora renderizamos con el stock ya actualizado
  renderStock('intel');   // igual que antes
  
  initHeroCarousel();

  // Event listeners para filtros (igual que antes)
  var amdBtn = document.getElementById('filter-amd');
  var intelBtn = document.getElementById('filter-intel');
  
  if (amdBtn) {
    amdBtn.addEventListener('click', function() {
      currentFilter = 'amd';
      renderStock('amd');
      amdBtn.classList.add('is-active');
      if (intelBtn) intelBtn.classList.remove('is-active');
      amdBtn.setAttribute('aria-pressed', 'true');
      if (intelBtn) intelBtn.setAttribute('aria-pressed', 'false');
    });
  }
  
  if (intelBtn) {
    intelBtn.addEventListener('click', function() {
      currentFilter = 'intel';
      renderStock('intel');
      intelBtn.classList.add('is-active');
      if (amdBtn) amdBtn.classList.remove('is-active');
      intelBtn.setAttribute('aria-pressed', 'true');
      if (amdBtn) amdBtn.setAttribute('aria-pressed', 'false');
    });
  }
  
  // Marcar el botón Intel como activo al inicio
  if (intelBtn) {
    intelBtn.classList.add('is-active');
    intelBtn.setAttribute('aria-pressed', 'true');
  }
  if (amdBtn) {
    amdBtn.classList.remove('is-active');
    amdBtn.setAttribute('aria-pressed', 'false');
  }
}

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
