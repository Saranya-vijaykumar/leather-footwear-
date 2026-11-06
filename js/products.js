/* ==========================================================================
   VERNON & VALE — Master Leather Footwear Manufacturer
   Products Catalog JavaScript (Matching Sole Craft Exact Card Structure)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.getElementById('productsGrid');
  if (!productsGrid) return;

  const searchInput = document.getElementById('productSearchInput');
  const categoryBtns = document.querySelectorAll('.category-filter-btn');
  const countDisplay = document.getElementById('productCountDisplay');

  let activeCategory = 'all';
  let searchQuery = '';

  const urlParams = new URLSearchParams(window.location.search);
  const initialCategory = urlParams.get('category');
  if (initialCategory) {
    activeCategory = initialCategory;
    updatePillStyles(initialCategory);
  }

  function updatePillStyles(cat) {
    categoryBtns.forEach(btn => {
      const match = btn.getAttribute('data-category') === cat;
      if (match) {
        btn.classList.add('bg-gold', 'text-black');
        btn.classList.remove('bg-[#FAF7F0]', 'dark:bg-[#1E1E1E]', 'text-text-primary');
      } else {
        btn.classList.remove('bg-gold', 'text-black');
        btn.classList.add('bg-[#FAF7F0]', 'dark:bg-[#1E1E1E]', 'text-text-primary');
      }
    });
  }

  function renderProducts() {
    if (typeof FOOTWEAR_PRODUCTS === 'undefined' || !FOOTWEAR_PRODUCTS.length) {
      productsGrid.innerHTML = `<p class="col-span-full text-center py-12">Loading catalog...</p>`;
      return;
    }

    const filtered = FOOTWEAR_PRODUCTS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        item.name.toLowerCase().includes(q) ||
        item.categoryName.toLowerCase().includes(q) ||
        item.tag.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.specs.upperLeather.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });

    if (countDisplay) {
      countDisplay.textContent = `Displaying ${filtered.length} of ${FOOTWEAR_PRODUCTS.length} Models`;
    }

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="col-span-full text-center py-16 glass-panel rounded-2xl">
          <i class="bi bi-search text-4xl text-gold mb-3 block"></i>
          <h3 class="text-2xl font-serif font-bold text-text-primary mb-2">No Matching Footwear Found</h3>
          <p class="text-text-secondary text-sm mb-6 max-w-md mx-auto">We couldn't locate any models matching "${searchQuery}". Try selecting another category or resetting the search filter.</p>
          <button id="resetFiltersBtn" class="bg-gold hover:bg-gold-hover text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition">Reset Filters</button>
        </div>
      `;

      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          activeCategory = 'all';
          searchQuery = '';
          if (searchInput) searchInput.value = '';
          updatePillStyles('all');
          renderProducts();
        });
      }
      return;
    }

    productsGrid.innerHTML = filtered.map(item => `
      <div class="glass-panel hover-lift relative group flex flex-col justify-between overflow-hidden rounded-2xl">
        <div>
          <div class="h-48 bg-gray-900 relative overflow-hidden rounded-t-2xl mb-5">
            <img src="${item.images[0]}" class="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="${item.name}">
            <span class="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-gold border border-gold/30 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              ${item.tag}
            </span>
          </div>
          <div class="px-6">
            <span class="text-xs uppercase text-gold font-bold tracking-widest block mb-1">${item.categoryName} &bull; ${item.sku}</span>
            <h3 class="text-2xl font-serif font-bold text-text-primary mb-3">${item.name}</h3>
            <p class="text-text-secondary text-sm leading-relaxed mb-6">
              ${item.shortDesc}
            </p>
          </div>
        </div>
        <div class="px-6 pb-6">
          <div class="flex justify-between items-center text-xs text-text-secondary mb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
            <span>${item.moq}</span>
            <span>Outsole: <strong class="text-text-primary">${item.specs.outsole.split(' ')[0]} ${item.specs.outsole.split(' ')[1] || ''}</strong></span>
          </div>
          <a href="product-details.html?id=${item.id}" class="text-xs uppercase tracking-wider font-bold text-gold group-hover:text-black dark:group-hover:text-white flex items-center gap-2 group transition-colors duration-200">
            View Specifications <i class="bi bi-arrow-right group-hover:translate-x-1 transition duration-200"></i>
          </a>
        </div>
      </div>
    `).join('');
  }

  categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.getAttribute('data-category');
      updatePillStyles(activeCategory);
      renderProducts();
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderProducts();
    });
  }

  renderProducts();
});
