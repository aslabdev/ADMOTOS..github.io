

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

fetch('CuellosyBalaclavas.json')
  .then(res => res.json())
  .then(async CuellosyBalaclavas => {
    const contenedor = document.getElementById('contenedor-CuellosyBalaclavas');

    for (let i = 0; i < CuellosyBalaclavas.length; i++) {
      const p = CuellosyBalaclavas[i];
      const id = `carousel-CuellosyBalaclavas-${i}`;
      let carouselItems = [];
      
      // ✅ Verificar imagen 1
      if (p.imagen1 && p.imagen1.trim() !== '') {
        try {
          const resp = await fetch(p.imagen1, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item active">
                <img src="${p.imagen1}" class="d-block w-100 img-ajustada" alt="Vista 1">
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar la imagen: ${p.imagen1}`);
        }
      }

      // ✅ Verificar imagen 2
      if (p.imagen2 && p.imagen2.trim() !== '') {
        try {
          const resp = await fetch(p.imagen2, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item ${carouselItems.length === 0 ? 'active' : ''}">
                <img src="${p.imagen2}" class="d-block w-100 img-ajustada" alt="Vista 2">
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar la imagen: ${p.imagen2}`);
        }
      }

      // ✅ Verificar video
      if (p.video && p.video.trim() !== '') {
        try {
          const resp = await fetch(p.video, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item ${carouselItems.length === 0 ? 'active' : ''}">
                <video class="d-block w-100 img-ajustada" controls>
                  <source src="${p.video}" type="video/mp4">
                </video>
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar el video: ${p.video}`);
        }
      }

      // ❌ Si no hay nada válido, saltar el producto
      if (carouselItems.length === 0) continue;

      // Bolitas
let bolasHTML = '';
if (p.bolas) {
  for (const [color, valor] of Object.entries(p.bolas)) {
    if (valor !== null && valor !== undefined && valor !== "") {
      const esNumero = !isNaN(valor); // true si es número, false si es letra

      bolasHTML += `
        <div class="bolita ${color}" title="${color}: ${valor} ${esNumero ? 'unidades' : 'talla'}">
          ${valor}
        </div>`;
    }
  }
}


      // Tarjeta final
      contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card custom-card">
            <div id="${id}" class="carousel slide" data-bs-ride="false">
              <div class="carousel-inner">
                ${carouselItems.join('')}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">💰 Precio: $${p.precio}<br>🎨 Colores Disponibles:</p>
              <div class="contenedor-bolas d-flex justify-content-center gap-2 mt-2">
                ${bolasHTML}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 🎯 Efecto zoom
    document.querySelectorAll('.custom-card').forEach(card => {
      card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.08) rotateZ(0.5deg)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotateZ(0deg)';
        card.style.boxShadow = 'none';
      });
    });
  });

fetch('ParaAndarconEstilo.json')
  .then(res => res.json())
  .then(async ParaAndarconEstilo => {
    const contenedor = document.getElementById('contenedor-ParaAndarconEstilo');

    for (let i = 0; i < ParaAndarconEstilo.length; i++) {
      const p = ParaAndarconEstilo[i];
      const id = `carousel-ParaAndarconEstilo-${i}`;
      let carouselItems = [];
      
      // ✅ Verificar imagen 1
      if (p.imagen1 && p.imagen1.trim() !== '') {
        try {
          const resp = await fetch(p.imagen1, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item active">
                <img src="${p.imagen1}" class="d-block w-100 img-ajustada" alt="Vista 1">
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar la imagen: ${p.imagen1}`);
        }
      }

      // ✅ Verificar imagen 2
      if (p.imagen2 && p.imagen2.trim() !== '') {
        try {
          const resp = await fetch(p.imagen2, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item ${carouselItems.length === 0 ? 'active' : ''}">
                <img src="${p.imagen2}" class="d-block w-100 img-ajustada" alt="Vista 2">
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar la imagen: ${p.imagen2}`);
        }
      }

      // ✅ Verificar video
      if (p.video && p.video.trim() !== '') {
        try {
          const resp = await fetch(p.video, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item ${carouselItems.length === 0 ? 'active' : ''}">
                <video class="d-block w-100 img-ajustada" controls>
                  <source src="${p.video}" type="video/mp4">
                </video>
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar el video: ${p.video}`);
        }
      }

      // ❌ Si no hay nada válido, saltar el producto
      if (carouselItems.length === 0) continue;

// Bolitas
let bolasHTML = '';
if (p.bolas) {
  for (const [color, valor] of Object.entries(p.bolas)) {
    if (valor !== null && valor !== undefined && valor !== "") {
      const esNumero = !isNaN(valor); // true si es número, false si es letra

      bolasHTML += `
        <div class="bolita ${color}" title="${color}: ${valor} ${esNumero ? 'unidades' : 'talla'}">
          ${valor}
        </div>`;
    }
  }
}


      // Tarjeta final
      contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card custom-card">
            <div id="${id}" class="carousel slide" data-bs-ride="false">
              <div class="carousel-inner">
                ${carouselItems.join('')}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">💰 Precio: $${p.precio}<br>🎨 Colores Disponibles:</p>
              <div class="contenedor-bolas d-flex justify-content-center gap-2 mt-2">
                ${bolasHTML}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 🎯 Efecto zoom
    document.querySelectorAll('.custom-card').forEach(card => {
      card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.08) rotateZ(0.5deg)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotateZ(0deg)';
        card.style.boxShadow = 'none';
      });
    });
  });

fetch('ParalaLluvia.json')
  .then(res => res.json())
  .then(async ParalaLluvia => {
    const contenedor = document.getElementById('contenedor-ParalaLluvia');

    for (let i = 0; i < ParalaLluvia.length; i++) {
      const p = ParalaLluvia[i];
      const id = `carousel-ParalaLluvia-${i}`;
      let carouselItems = [];
      
      // ✅ Verificar imagen 1
      if (p.imagen1 && p.imagen1.trim() !== '') {
        try {
          const resp = await fetch(p.imagen1, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item active">
                <img src="${p.imagen1}" class="d-block w-100 img-ajustada" alt="Vista 1">
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar la imagen: ${p.imagen1}`);
        }
      }

      // ✅ Verificar imagen 2
      if (p.imagen2 && p.imagen2.trim() !== '') {
        try {
          const resp = await fetch(p.imagen2, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item ${carouselItems.length === 0 ? 'active' : ''}">
                <img src="${p.imagen2}" class="d-block w-100 img-ajustada" alt="Vista 2">
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar la imagen: ${p.imagen2}`);
        }
      }

      // ✅ Verificar video
      if (p.video && p.video.trim() !== '') {
        try {
          const resp = await fetch(p.video, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item ${carouselItems.length === 0 ? 'active' : ''}">
                <video class="d-block w-100 img-ajustada" controls>
                  <source src="${p.video}" type="video/mp4">
                </video>
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar el video: ${p.video}`);
        }
      }

      // ❌ Si no hay nada válido, saltar el producto
      if (carouselItems.length === 0) continue;

      // Bolitas
let bolasHTML = '';
if (p.bolas) {
  for (const [color, valor] of Object.entries(p.bolas)) {
    if (valor !== null && valor !== undefined && valor !== "") {
      const esNumero = !isNaN(valor); // true si es número, false si es letra

      bolasHTML += `
        <div class="bolita ${color}" title="${color}: ${valor} ${esNumero ? 'unidades' : 'talla'}">
          ${valor}
        </div>`;
    }
  }
}


      // Tarjeta final
      contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card custom-card">
            <div id="${id}" class="carousel slide" data-bs-ride="false">
              <div class="carousel-inner">
                ${carouselItems.join('')}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">💰 Precio: $${p.precio}<br>🎨 Colores Disponibles:</p>
              <div class="contenedor-bolas d-flex justify-content-center gap-2 mt-2">
                ${bolasHTML}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 🎯 Efecto zoom
    document.querySelectorAll('.custom-card').forEach(card => {
      card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.08) rotateZ(0.5deg)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotateZ(0deg)';
        card.style.boxShadow = 'none';
      });
    });
  });

fetch('Proteccionparamiymimoto.json')
  .then(res => res.json())
  .then(async Proteccionparamiymimoto => {
    const contenedor = document.getElementById('contenedor-Proteccionparamiymimoto');

    for (let i = 0; i < Proteccionparamiymimoto.length; i++) {
      const p = Proteccionparamiymimoto[i];
      const id = `carousel-Proteccionparamiymimoto-${i}`;
      let carouselItems = [];
      
      // ✅ Verificar imagen 1
      if (p.imagen1 && p.imagen1.trim() !== '') {
        try {
          const resp = await fetch(p.imagen1, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item active">
                <img src="${p.imagen1}" class="d-block w-100 img-ajustada" alt="Vista 1">
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar la imagen: ${p.imagen1}`);
        }
      }

      // ✅ Verificar imagen 2
      if (p.imagen2 && p.imagen2.trim() !== '') {
        try {
          const resp = await fetch(p.imagen2, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item ${carouselItems.length === 0 ? 'active' : ''}">
                <img src="${p.imagen2}" class="d-block w-100 img-ajustada" alt="Vista 2">
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar la imagen: ${p.imagen2}`);
        }
      }

      // ✅ Verificar video
      if (p.video && p.video.trim() !== '') {
        try {
          const resp = await fetch(p.video, { method: 'HEAD' });
          if (resp.ok) {
            carouselItems.push(`
              <div class="carousel-item ${carouselItems.length === 0 ? 'active' : ''}">
                <video class="d-block w-100 img-ajustada" controls>
                  <source src="${p.video}" type="video/mp4">
                </video>
              </div>
            `);
          }
        } catch (err) {
          console.warn(`⚠ No se pudo cargar el video: ${p.video}`);
        }
      }

      // ❌ Si no hay nada válido, saltar el producto
      if (carouselItems.length === 0) continue;

      // Bolitas
let bolasHTML = '';
if (p.bolas) {
  for (const [color, tallas] of Object.entries(p.bolas)) {
    if (Array.isArray(tallas)) {
      tallas.forEach(talla => {
        bolasHTML += `
          <div class="bolita ${color}" title="${color}: ${talla}">
            ${talla}
          </div>`;
      });
    }
  }
}



      // Tarjeta final
      contenedor.innerHTML += `
        <div class="col-md-4 mb-4">
          <div class="card custom-card">
            <div id="${id}" class="carousel slide" data-bs-ride="false">
              <div class="carousel-inner">
                ${carouselItems.join('')}
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#${id}" data-bs-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#${id}" data-bs-slide="next">
                <span class="carousel-control-next-icon"></span>
              </button>
            </div>
            <div class="card-body text-center">
              <h5 class="card-title">${p.nombre}</h5>
              <p class="card-text">💰 Precio: $${p.precio}<br>🎨 Colores Disponibles:</p>
              <div class="contenedor-bolas d-flex justify-content-center gap-2 mt-2">
                ${bolasHTML}
              </div>
            </div>
          </div>
        </div>
      `;
    }

    // 🎯 Efecto zoom
    document.querySelectorAll('.custom-card').forEach(card => {
      card.style.transition = 'transform 0.4s ease, box-shadow 0.4s ease';
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.08) rotateZ(0.5deg)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1) rotateZ(0deg)';
        card.style.boxShadow = 'none';
      });
    });
  });



  
