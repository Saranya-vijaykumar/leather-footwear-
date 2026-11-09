/* ==========================================================================
   VERNON & VALE — Master Leather Footwear Manufacturer
   Product Details JavaScript (Vanilla JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const detailContainer = document.getElementById('productDetailRoot');
  if (!detailContainer) return;

  // Read URL parameter ?id=...
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id') || 'oxford-captoe-heritage';

  const product = (typeof FOOTWEAR_PRODUCTS !== 'undefined' && FOOTWEAR_PRODUCTS.find(p => p.id === productId)) || (typeof FOOTWEAR_PRODUCTS !== 'undefined' ? FOOTWEAR_PRODUCTS[0] : null);

  if (!product) return;

  renderProductDetails(product);
  renderRelatedProducts(product);
  setupModal(product);
});

function renderProductDetails(product) {
  // Document title
  document.title = `${product.name} — Vernon & Vale Footwear Manufacturers`;

  // Breadcrumbs
  const breadcrumbCurrent = document.getElementById('breadcrumbProduct');
  if (breadcrumbCurrent) breadcrumbCurrent.textContent = product.name;

  const breadcrumbCategory = document.getElementById('breadcrumbCategory');
  if (breadcrumbCategory) {
    breadcrumbCategory.textContent = product.categoryName;
    breadcrumbCategory.href = `products.html?category=${product.category}`;
  }

  // Header info
  const nameEl = document.getElementById('det-name');
  if (nameEl) nameEl.textContent = product.name;

  const catEl = document.getElementById('det-category');
  if (catEl) catEl.textContent = `${product.categoryName} • ${product.sku}`;

  const descEl = document.getElementById('det-desc');
  if (descEl) descEl.textContent = product.fullDesc || product.shortDesc;

  const priceEl = document.getElementById('det-price');
  if (priceEl) priceEl.textContent = product.priceEstimate || '$145 / pair';

  const moqEl = document.getElementById('det-moq');
  if (moqEl) moqEl.textContent = product.moq || '50 Pairs';

  const badgeEl = document.getElementById('det-badge');
  if (badgeEl) badgeEl.textContent = product.tag || 'Goodyear Welted';

  // Widget info
  const widgetModel = document.getElementById('widget-model-name');
  if (widgetModel) widgetModel.textContent = product.name;

  const widgetPrice = document.getElementById('widget-sample-price');
  if (widgetPrice) widgetPrice.textContent = `${product.priceEstimate.split('/')[0]} + Sample Fee`;

  // Main Image
  const mainImage = document.getElementById('det-image');
  if (mainImage) {
    mainImage.src = product.images[0];
    mainImage.alt = product.name;
  }

  // Thumbnails
  const thumbsContainer = document.getElementById('det-thumbnails');
  if (thumbsContainer && product.images) {
    thumbsContainer.innerHTML = product.images.map((imgUrl, idx) => `
      <button 
        class="thumb-item w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${idx === 0 ? 'border-gold shadow-md' : 'border-gold/20 opacity-70 hover:opacity-100'}"
        data-img-url="${imgUrl}"
        aria-label="View angle ${idx + 1}"
      >
        <img src="${imgUrl}" alt="${product.name} View ${idx + 1}" class="w-full h-full object-cover">
      </button>
    `).join('');

    const thumbs = thumbsContainer.querySelectorAll('.thumb-item');
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        thumbs.forEach(t => {
          t.classList.remove('border-gold', 'shadow-md');
          t.classList.add('border-gold/20', 'opacity-70');
        });
        thumb.classList.remove('border-gold/20', 'opacity-70');
        thumb.classList.add('border-gold', 'shadow-md');
        if (mainImage) mainImage.src = thumb.getAttribute('data-img-url');
      });
    });
  }

  // Color Swatches
  const colorContainer = document.getElementById('colorSwatches');
  const activeColorLabel = document.getElementById('selectedColorLabel');
  if (colorContainer && product.colors && product.colors.length > 0) {
    if (activeColorLabel) activeColorLabel.textContent = product.colors[0].name;

    colorContainer.innerHTML = product.colors.map((c, idx) => `
      <button 
        class="color-swatch-btn w-8 h-8 rounded-full border-2 transition-transform duration-200 hover:scale-110 shadow ${idx === 0 ? 'border-gold scale-110 ring-2 ring-gold/40' : 'border-white/30'}"
        data-color-name="${c.name}"
        style="background-color: ${c.hex};"
        title="${c.name}"
        aria-label="Color option ${c.name}"
      ></button>
    `).join('');

    const swatches = colorContainer.querySelectorAll('.color-swatch-btn');
    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        swatches.forEach(s => {
          s.classList.remove('border-gold', 'scale-110', 'ring-2', 'ring-gold/40');
          s.classList.add('border-white/30');
        });
        swatch.classList.remove('border-white/30');
        swatch.classList.add('border-gold', 'scale-110', 'ring-2', 'ring-gold/40');
        if (activeColorLabel) activeColorLabel.textContent = swatch.getAttribute('data-color-name');
      });
    });
  }

  // Sizes Grid
  const sizeGrid = document.getElementById('sizePickerGrid');
  const selectedSizeLabel = document.getElementById('selectedSizeLabel');
  if (sizeGrid && product.sizes) {
    if (selectedSizeLabel) selectedSizeLabel.textContent = `EU ${product.sizes[2] || product.sizes[0]}`;

    sizeGrid.innerHTML = product.sizes.map((sz, idx) => `
      <button 
        class="size-pill-btn py-2.5 min-h-[44px] flex items-center justify-center text-center rounded-lg text-xs font-bold transition border ${idx === 2 ? 'bg-gold text-black border-gold shadow' : 'border-gold/20 text-text-primary hover:border-gold'}"
        data-size="${sz}"
      >
        ${sz}
      </button>
    `).join('');

    const sizeBtns = sizeGrid.querySelectorAll('.size-pill-btn');
    sizeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        sizeBtns.forEach(b => {
          b.className = 'size-pill-btn py-2.5 min-h-[44px] flex items-center justify-center text-center rounded-lg text-xs font-bold transition border border-gold/20 text-text-primary hover:border-gold';
        });
        btn.className = 'size-pill-btn py-2.5 min-h-[44px] flex items-center justify-center text-center rounded-lg text-xs font-bold transition border bg-gold text-black border-gold shadow';
        if (selectedSizeLabel) selectedSizeLabel.textContent = `EU ${btn.getAttribute('data-size')}`;
      });
    });
  }

  // Tech Specs Table
  const specsTableBody = document.getElementById('specsTableBody');
  if (specsTableBody && product.specs) {
    specsTableBody.innerHTML = `
      <tr><td class="py-3 px-4 font-bold text-text-primary w-2/5">Construction Method</td><td class="py-3 px-4 text-text-secondary">${product.specs.construction}</td></tr>
      <tr><td class="py-3 px-4 font-bold text-text-primary">Upper Leather Grade</td><td class="py-3 px-4 text-text-secondary">${product.specs.upperLeather}</td></tr>
      <tr><td class="py-3 px-4 font-bold text-text-primary">Internal Lining</td><td class="py-3 px-4 text-text-secondary">${product.specs.lining}</td></tr>
      <tr><td class="py-3 px-4 font-bold text-text-primary">Insole &amp; Footbed</td><td class="py-3 px-4 text-text-secondary">${product.specs.insole}</td></tr>
      <tr><td class="py-3 px-4 font-bold text-text-primary">Outsole &amp; Heel</td><td class="py-3 px-4 text-text-secondary">${product.specs.outsole}</td></tr>
      <tr><td class="py-3 px-4 font-bold text-text-primary">Archival Last Profile</td><td class="py-3 px-4 text-text-secondary">${product.specs.last}</td></tr>
    `;
  }

  // Sourcing & Care texts
  const sourcingEl = document.getElementById('sourcingText');
  if (sourcingEl && product.sourcing) sourcingEl.textContent = product.sourcing;

  const careEl = document.getElementById('careText');
  if (careEl && product.care) careEl.textContent = product.care;
}

function renderRelatedProducts(currentProduct) {
  const container = document.getElementById('relatedProductsGrid');
  if (!container || typeof FOOTWEAR_PRODUCTS === 'undefined') return;

  const related = FOOTWEAR_PRODUCTS
    .filter(p => p.id !== currentProduct.id)
    .slice(0, 3);

  container.innerHTML = related.map(p => `
    <article class="glass-panel hover-lift relative group flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300">
      <div class="relative h-56 overflow-hidden rounded-xl mb-5 -mx-2 -mt-2">
        <img 
          src="${p.images[0]}" 
          alt="${p.name}" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
        <span class="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-gold/40 text-gold text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
          ${p.tag}
        </span>
        <span class="absolute top-3 right-3 bg-gold/90 text-black text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
          ${p.moq}
        </span>
      </div>

      <div class="flex-1 flex flex-col justify-between">
        <div>
          <span class="text-xs uppercase font-bold tracking-widest text-[#8C6239] dark:text-[#E6C387] mb-1 block">
            ${p.categoryName}
          </span>
          <h3 class="font-serif text-xl font-bold text-text-primary mb-2 group-hover:text-gold transition">
            <a href="product-details.html?id=${p.id}">${p.name}</a>
          </h3>
          <p class="text-text-secondary text-xs leading-relaxed line-clamp-2 mb-4">
            ${p.shortDesc}
          </p>
        </div>

        <div class="pt-4 border-t border-gold/15 flex items-center justify-between">
          <span class="text-xs font-mono text-text-primary font-semibold">
            ${p.priceEstimate}
          </span>
          <a href="product-details.html?id=${p.id}" class="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold hover:text-gold-hover transition">
            <span>Dossier</span>
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>
    </article>
  `).join('');
}

function setupModal(product) {
  const modal = document.getElementById('sampleModalBackdrop');
  const openBtn = document.getElementById('requestSampleBtn');
  const closeBtn = document.getElementById('closeSampleModal');
  const modalName = document.getElementById('modalProductName');
  const modalSku = document.getElementById('modalProductSku');
  const sampleForm = document.getElementById('sampleRequestForm');

  if (!modal || !openBtn) return;

  openBtn.addEventListener('click', () => {
    if (modalName) modalName.textContent = product.name;
    if (modalSku) modalSku.value = product.sku;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  if (sampleForm) {
    sampleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeModal();
      if (typeof window.showToast === 'function') {
        window.showToast(`Sample request dispatched for ${product.name}! A trade representative will contact you within 24 hours.`, 'success');
      } else {
        alert(`Sample request submitted for ${product.name}! We will contact you with shipping details.`);
      }
      sampleForm.reset();
    });
  }
}
