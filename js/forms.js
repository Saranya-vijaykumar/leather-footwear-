/* ==========================================================================
   VERNON & VALE — Master Leather Footwear Manufacturer
   Form Validations & Frontend Simulation JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initWholesaleForm();
  initContactForm();
  initBulkContactForm();
  initContactTabs();
  initBulkEstimator();
  initTechPackDropzone();
  initFaqAccordions();
});

/* --- B2B Wholesale Form Validation --- */
function initWholesaleForm() {
  const form = document.getElementById('wholesaleEnquiryForm');
  if (!form) return;

  const fields = {
    fullName: form.querySelector('#wsFullName'),
    companyName: form.querySelector('#wsCompanyName'),
    email: form.querySelector('#wsEmail'),
    phone: form.querySelector('#wsPhone'),
    country: form.querySelector('#wsCountry'),
    category: form.querySelector('#wsCategory'),
    quantity: form.querySelector('#wsQuantity'),
    customization: form.querySelector('#wsCustomization'),
    message: form.querySelector('#wsMessage')
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset previous invalid states
    Object.values(fields).forEach(input => {
      if (input) {
        input.classList.remove('border-red-500');
        const feedback = input.parentNode.querySelector('.form-feedback');
        if (feedback) feedback.remove();
      }
    });

    // Validate Full Name
    if (!fields.fullName.value.trim() || fields.fullName.value.trim().length < 2) {
      markInvalid(fields.fullName, 'Please enter your full legal or representative name.');
      isValid = false;
    }

    // Validate Company Name
    if (!fields.companyName.value.trim() || fields.companyName.value.trim().length < 2) {
      markInvalid(fields.companyName, 'Please enter your registered corporate or brand name.');
      isValid = false;
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!fields.email.value.trim() || !emailRegex.test(fields.email.value.trim())) {
      markInvalid(fields.email, 'Please enter a valid corporate email address.');
      isValid = false;
    }

    // Validate Phone
    const phoneVal = fields.phone.value.trim();
    if (!phoneVal || phoneVal.length < 7) {
      markInvalid(fields.phone, 'Please enter a valid international contact phone number.');
      isValid = false;
    }

    // Validate Country
    if (!fields.country.value.trim()) {
      markInvalid(fields.country, 'Please specify your export destination country.');
      isValid = false;
    }

    // Validate Category
    if (!fields.category.value) {
      markInvalid(fields.category, 'Please select your target footwear manufacturing category.');
      isValid = false;
    }

    // Validate Order Quantity
    const qty = parseInt(fields.quantity.value, 10);
    if (isNaN(qty) || qty < 25) {
      markInvalid(fields.quantity, 'Minimum wholesale manufacturing run starts at 25 pairs.');
      isValid = false;
    }

    // Validate Customization
    if (!fields.customization.value) {
      markInvalid(fields.customization, 'Please select your preferred private label customization tier.');
      isValid = false;
    }

    if (!isValid) {
      if (typeof window.showToast === 'function') {
        window.showToast('Please complete all highlighted required fields correctly.', 'error');
      }
      return;
    }

    // Show Frontend Demo Confirmation Modal
    const refCode = `VV-B2B-${Math.floor(100000 + Math.random() * 900000)}`;
    showWholesaleSuccessModal({
      refCode,
      name: fields.fullName.value.trim(),
      company: fields.companyName.value.trim(),
      email: fields.email.value.trim(),
      phone: fields.phone.value.trim(),
      country: fields.country.value.trim(),
      category: fields.category.options[fields.category.selectedIndex].text,
      quantity: fields.quantity.value,
      customization: fields.customization.options[fields.customization.selectedIndex].text,
      message: fields.message.value.trim() || 'None provided'
    });

    form.reset();
  });

  // Real-time error removal on input
  Object.values(fields).forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('border-red-500');
        const feedback = input.parentNode.querySelector('.form-feedback');
        if (feedback) feedback.remove();
      });
    }
  });
}

function markInvalid(inputElement, errorMessage) {
  inputElement.classList.add('border-red-500');
  let feedback = inputElement.parentNode.querySelector('.form-feedback');
  if (!feedback) {
    feedback = document.createElement('div');
    feedback.className = 'form-feedback text-[11px] text-red-500 mt-1';
    inputElement.parentNode.appendChild(feedback);
  }
  feedback.textContent = errorMessage;
}

function showWholesaleSuccessModal(data) {
  let modalBackdrop = document.getElementById('wholesaleSuccessModal');
  if (!modalBackdrop) {
    modalBackdrop = document.createElement('div');
    modalBackdrop.id = 'wholesaleSuccessModal';
    modalBackdrop.className = 'fixed inset-0 bg-black/80 z-[10000] flex items-center justify-center p-4 overflow-y-auto';
    document.body.appendChild(modalBackdrop);
  } else {
    modalBackdrop.classList.remove('hidden');
    modalBackdrop.classList.add('flex');
  }

  modalBackdrop.innerHTML = `
    <div class="glass-panel max-w-xl w-full p-6 sm:p-8 rounded-2xl border border-gold/40 shadow-2xl relative bg-[#0F0F0F] text-[#F3ECE0] my-8">
      <div class="flex items-start justify-between border-b border-gold/15 pb-4 mb-5">
        <div>
          <span class="text-gold text-[10px] font-bold uppercase tracking-widest block mb-1">B2B Manufacturing Registered</span>
          <h3 class="text-2xl font-serif font-bold text-white">Official Manufacturing Enquiry</h3>
        </div>
        <button onclick="closeWholesaleSuccessModal()" class="text-gray-400 hover:text-gold text-2xl transition" aria-label="Close modal">&times;</button>
      </div>
      
      <div class="space-y-4 text-xs">
        <div class="bg-emerald-950/40 border-l-4 border-emerald-500 p-3 rounded-r-lg">
          <h4 class="font-bold text-emerald-400 mb-0.5">Front-end Demonstration Mode</h4>
          <p class="text-gray-300">Your enquiry has been simulated and validated locally. In a production environment, this transmits directly to the Florence factory ERP / CRM portal.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/5 p-4 rounded-xl border border-gold/10">
          <div><span class="text-gray-400">Reference:</span> <strong class="text-gold font-mono">${data.refCode}</strong></div>
          <div><span class="text-gray-400">Estimated Quantity:</span> <strong class="text-white">${data.quantity} Pairs</strong></div>
          <div><span class="text-gray-400">Representative:</span> <strong class="text-white">${data.name}</strong></div>
          <div><span class="text-gray-400">Enterprise:</span> <strong class="text-white">${data.company}</strong></div>
          <div><span class="text-gray-400">Corporate Email:</span> <strong class="text-white">${data.email}</strong></div>
          <div><span class="text-gray-400">Contact:</span> <strong class="text-white">${data.phone}</strong></div>
          <div><span class="text-gray-400">Country:</span> <strong class="text-white">${data.country}</strong></div>
          <div><span class="text-gray-400">Product Line:</span> <strong class="text-white">${data.category}</strong></div>
          <div class="sm:col-span-2"><span class="text-gray-400">Customization:</span> <strong class="text-white">${data.customization}</strong></div>
          <div class="sm:col-span-2"><span class="text-gray-400">Notes:</span> <em class="text-gray-300">"${data.message}"</em></div>
        </div>

        <p class="text-gray-300 leading-relaxed">
          Our senior export committee will review your technical specifications and return a tailored cost dossier and production slot allocation within 24 business hours.
        </p>
      </div>

      <div class="mt-6 pt-4 border-t border-gold/15 text-center">
        <button onclick="closeWholesaleSuccessModal()" class="w-full sm:w-auto px-8 py-3 bg-gold hover:bg-gold-hover text-black rounded-full font-bold uppercase tracking-wider text-xs transition shadow-lg">
          Acknowledge &amp; Close
        </button>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
}

window.closeWholesaleSuccessModal = function() {
  const modalBackdrop = document.getElementById('wholesaleSuccessModal');
  if (modalBackdrop) {
    modalBackdrop.classList.add('hidden');
    modalBackdrop.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

/* --- General Contact Form Validation --- */
function initContactForm() {
  const form = document.getElementById('generalContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nameInput = form.querySelector('#contactName');
    const emailInput = form.querySelector('#contactEmail');
    const subjectInput = form.querySelector('#contactSubject');
    const messageInput = form.querySelector('#contactMessage');

    let isValid = true;
    [nameInput, emailInput, messageInput].forEach(inp => {
      if (inp) {
        inp.classList.remove('border-red-500');
        const feedback = inp.parentNode.querySelector('.form-feedback');
        if (feedback) feedback.remove();
      }
    });

    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      markInvalid(nameInput, 'Please provide your full name.');
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
      markInvalid(emailInput, 'Please provide a valid email address.');
      isValid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      markInvalid(messageInput, 'Please provide a message with at least 10 characters.');
      isValid = false;
    }

    if (!isValid) {
      if (typeof window.showToast === 'function') {
        window.showToast('Please complete all required fields correctly.', 'error');
      }
      return;
    }

    // Simulated Frontend Success
    if (typeof window.showToast === 'function') {
      window.showToast(`Thank you, ${nameInput.value.trim()}. Your inquiry regarding "${subjectInput ? subjectInput.value : 'General Enquiry'}" has been logged!`, 'success');
    } else {
      alert(`Thank you, ${nameInput.value.trim()}. Your message has been sent.`);
    }
    form.reset();
  });
}

/* --- Contact Page Tab Switcher --- */
function initContactTabs() {
  const tabBulkBtn = document.getElementById('tabBulkBtn');
  const tabGeneralBtn = document.getElementById('tabGeneralBtn');
  const bulkContainer = document.getElementById('bulkFormContainer');
  const generalContainer = document.getElementById('generalFormContainer');

  if (!tabBulkBtn || !tabGeneralBtn || !bulkContainer || !generalContainer) return;

  tabBulkBtn.addEventListener('click', () => {
    tabBulkBtn.classList.add('bg-gold', 'text-black', 'shadow-md');
    tabBulkBtn.classList.remove('text-text-secondary');
    tabGeneralBtn.classList.remove('bg-gold', 'text-black', 'shadow-md');
    tabGeneralBtn.classList.add('text-text-secondary');
    
    bulkContainer.classList.remove('hidden');
    generalContainer.classList.add('hidden');
  });

  tabGeneralBtn.addEventListener('click', () => {
    tabGeneralBtn.classList.add('bg-gold', 'text-black', 'shadow-md');
    tabGeneralBtn.classList.remove('text-text-secondary');
    tabBulkBtn.classList.remove('bg-gold', 'text-black', 'shadow-md');
    tabBulkBtn.classList.add('text-text-secondary');
    
    generalContainer.classList.remove('hidden');
    bulkContainer.classList.add('hidden');
  });
}

/* --- Real-Time Bulk Order Estimator --- */
function initBulkEstimator() {
  const silSelect = document.getElementById('bulkSilhouette');
  const volSelect = document.getElementById('bulkVolume');
  const leaSelect = document.getElementById('bulkLeather');
  const unitCostEl = document.getElementById('estimateUnitCost');
  const leadTimeEl = document.getElementById('estimateLeadTime');

  if (!unitCostEl || !leadTimeEl) return;

  function updateEstimate() {
    let baseMin = 135;
    let baseMax = 155;
    let leadTime = '4 - 6 Weeks';

    // Silhouette adjustment
    const sil = silSelect ? silSelect.value : 'formal';
    if (sil === 'boots') { baseMin += 30; baseMax += 45; }
    else if (sil === 'patina') { baseMin += 55; baseMax += 80; }
    else if (sil === 'bespoke') { baseMin += 75; baseMax += 120; }

    // Leather adjustment
    const lea = leaSelect ? leaSelect.value : 'boxcalf';
    if (lea === 'cordovan') { baseMin += 160; baseMax += 220; }
    else if (lea === 'tuscan') { baseMin += 15; baseMax += 25; }
    else if (lea === 'suede') { baseMin -= 10; baseMax -= 10; }

    // Volume discount
    const vol = volSelect ? parseInt(volSelect.value, 10) : 100;
    if (vol >= 2000) {
      baseMin = Math.round(baseMin * 0.75);
      baseMax = Math.round(baseMax * 0.75);
      leadTime = '8 - 12 Weeks (Staggered Batches)';
    } else if (vol >= 500) {
      baseMin = Math.round(baseMin * 0.85);
      baseMax = Math.round(baseMax * 0.85);
      leadTime = '6 - 8 Weeks';
    } else if (vol >= 100) {
      baseMin = Math.round(baseMin * 0.92);
      baseMax = Math.round(baseMax * 0.92);
      leadTime = '4 - 6 Weeks';
    } else {
      leadTime = '3 - 4 Weeks (Pilot Batch)';
    }

    unitCostEl.textContent = `$${baseMin} - $${baseMax} / pair`;
    leadTimeEl.textContent = `${leadTime} Dispatch`;
  }

  [silSelect, volSelect, leaSelect].forEach(sel => {
    if (sel) sel.addEventListener('change', updateEstimate);
  });
}

/* --- Tech Pack Upload Dropzone Simulation --- */
function initTechPackDropzone() {
  const dropzone = document.getElementById('techPackDropzone');
  const fileDisplay = document.getElementById('techPackFileDisplay');
  const fileName = document.getElementById('techPackFileName');

  if (!dropzone || !fileDisplay) return;

  dropzone.addEventListener('click', () => {
    const fakeNames = ['sartorial_collection_techpack_v2.pdf', 'oxford_sole_blueprint_autumn26.cad', 'bespoke_last_specifications_dossier.pdf'];
    const chosen = fakeNames[Math.floor(Math.random() * fakeNames.length)];
    if (fileName) fileName.textContent = chosen;
    fileDisplay.classList.remove('hidden');
    if (typeof window.showToast === 'function') {
      window.showToast('Technical Specification Attached', `Attached ${chosen} to your manufacturing inquiry.`);
    }
  });
}

/* --- Bulk Manufacturing Form Validation & Submission --- */
function initBulkContactForm() {
  const form = document.getElementById('bulkEnquiryForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const company = form.querySelector('#bulkCompany');
    const representative = form.querySelector('#bulkRepresentative');
    const email = form.querySelector('#bulkEmail');
    const phone = form.querySelector('#bulkPhone');
    const country = form.querySelector('#bulkCountry');
    const silhouette = form.querySelector('#bulkSilhouette');
    const volume = form.querySelector('#bulkVolume');
    const leather = form.querySelector('#bulkLeather');
    const construction = form.querySelector('#bulkConstruction');
    const notes = form.querySelector('#bulkNotes');

    let isValid = true;
    [company, representative, email, phone, country].forEach(inp => {
      if (inp) {
        inp.classList.remove('border-red-500');
        const feedback = inp.parentNode.querySelector('.form-feedback');
        if (feedback) feedback.remove();
      }
    });

    if (!company.value.trim() || company.value.trim().length < 2) {
      markInvalid(company, 'Please specify your brand or corporate entity.');
      isValid = false;
    }
    if (!representative.value.trim() || representative.value.trim().length < 2) {
      markInvalid(representative, 'Please specify the authorized contact representative.');
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
      markInvalid(email, 'Please enter a valid corporate email.');
      isValid = false;
    }
    if (!phone.value.trim() || phone.value.trim().length < 7) {
      markInvalid(phone, 'Please provide an international phone number.');
      isValid = false;
    }
    if (!country.value.trim()) {
      markInvalid(country, 'Please specify destination country or discharge port.');
      isValid = false;
    }

    if (!isValid) {
      if (typeof window.showToast === 'function') {
        window.showToast('Please correct the highlighted fields.', 'error');
      }
      return;
    }

    const refCode = `VV-OEM-${Math.floor(100000 + Math.random() * 900000)}`;
    const silText = silhouette ? silhouette.options[silhouette.selectedIndex].text : 'Footwear Run';
    const volText = volume ? volume.options[volume.selectedIndex].text : 'Wholesale Run';

    // Show Confirmation Modal
    showBulkEnquirySuccessModal({
      refCode,
      company: company.value.trim(),
      rep: representative.value.trim(),
      email: email.value.trim(),
      phone: phone.value.trim(),
      country: country.value.trim(),
      silhouette: silText,
      volume: volText,
      leather: leather ? leather.options[leather.selectedIndex].text : 'Standard',
      construction: construction ? construction.options[construction.selectedIndex].text : 'Goodyear Welted',
      notes: notes && notes.value.trim() ? notes.value.trim() : 'Standard bespoke OEM specifications'
    });

    form.reset();
    const fileDisplay = document.getElementById('techPackFileDisplay');
    if (fileDisplay) fileDisplay.classList.add('hidden');
  });
}

function showBulkEnquirySuccessModal(data) {
  let modalBackdrop = document.getElementById('bulkSuccessModal');
  if (!modalBackdrop) {
    modalBackdrop = document.createElement('div');
    modalBackdrop.id = 'bulkSuccessModal';
    modalBackdrop.className = 'fixed inset-0 bg-black/80 backdrop-blur-md z-[10000] flex items-center justify-center p-4 overflow-y-auto';
    document.body.appendChild(modalBackdrop);
  } else {
    modalBackdrop.classList.remove('hidden');
    modalBackdrop.classList.add('flex');
  }

  modalBackdrop.innerHTML = `
    <div class="glass-panel max-w-xl w-full p-6 sm:p-8 rounded-2xl border border-gold/40 shadow-2xl relative bg-[#0F0F0F] text-[#F3ECE0] my-8 animate-fade-in">
      <div class="flex items-start justify-between border-b border-gold/15 pb-4 mb-5">
        <div>
          <span class="text-gold text-[10px] font-bold uppercase tracking-widest block mb-1">Dossier Registered &bull; NDA Governed</span>
          <h3 class="text-2xl font-serif font-bold text-white">Wholesale Manufacturing Dossier</h3>
        </div>
        <button onclick="closeBulkSuccessModal()" class="text-gray-400 hover:text-gold text-2xl transition" aria-label="Close modal">&times;</button>
      </div>
      
      <div class="space-y-4 text-xs">
        <div class="bg-emerald-950/40 border-l-4 border-emerald-500 p-3 rounded-r-lg">
          <h4 class="font-bold text-emerald-400 mb-0.5">Manufacturing Inquiry Queued</h4>
          <p class="text-gray-300">Your wholesale dossier has been received and allocated to our Senior Export Committee in Florence. A master cordwainer will review your specifications within 4 business hours.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-white/5 p-4 rounded-xl border border-gold/10">
          <div><span class="text-gray-400">Reference Code:</span> <strong class="text-gold font-mono">${data.refCode}</strong></div>
          <div><span class="text-gray-400">Authorized Rep:</span> <strong class="text-white">${data.rep}</strong></div>
          <div><span class="text-gray-400">Brand / Entity:</span> <strong class="text-white">${data.company}</strong></div>
          <div><span class="text-gray-400">Corporate Email:</span> <strong class="text-white">${data.email}</strong></div>
          <div><span class="text-gray-400">Destination:</span> <strong class="text-white">${data.country}</strong></div>
          <div><span class="text-gray-400">Silhouette:</span> <strong class="text-white">${data.silhouette}</strong></div>
          <div class="sm:col-span-2"><span class="text-gray-400">Production Volume:</span> <strong class="text-gold">${data.volume}</strong></div>
          <div class="sm:col-span-2"><span class="text-gray-400">Construction &amp; Leather:</span> <strong class="text-white">${data.construction} &bull; ${data.leather}</strong></div>
          <div class="sm:col-span-2"><span class="text-gray-400">Special Notes:</span> <em class="text-gray-300">"${data.notes}"</em></div>
        </div>

        <p class="text-gray-300 leading-relaxed text-[11px]">
          Benchmark prototype evaluation pair dispatch lead time: <strong>14 calendar days</strong> via express DHL air courier.
        </p>
      </div>

      <div class="mt-6 pt-4 border-t border-gold/15 flex flex-wrap gap-3 justify-end">
        <button onclick="closeBulkSuccessModal()" class="w-full sm:w-auto px-8 py-3 bg-gold hover:bg-gold-hover text-black rounded-full font-bold uppercase tracking-wider text-xs transition shadow-lg">
          Acknowledge &amp; Return to Atelier
        </button>
      </div>
    </div>
  `;

  document.body.style.overflow = 'hidden';
}

window.closeBulkSuccessModal = function() {
  const modalBackdrop = document.getElementById('bulkSuccessModal');
  if (modalBackdrop) {
    modalBackdrop.classList.add('hidden');
    modalBackdrop.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

/* --- FAQ Accordion Toggles --- */
function initFaqAccordions() {
  const faqHeaders = document.querySelectorAll('section .glass-panel h4');
  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const p = header.nextElementSibling;
      const icon = header.querySelector('i');
      if (p && p.tagName === 'P') {
        p.classList.toggle('hidden');
        if (icon) {
          icon.classList.toggle('rotate-180');
        }
      }
    });
  });
}
