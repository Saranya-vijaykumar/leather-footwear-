# VERNON & VALE — Master Leather Footwear Manufacturer

A luxury, editorial-grade Leather Footwear Manufacturer website inspired by the visual craftsmanship, typography hierarchy, and refined aesthetic of the reference site [Sole Craft](https://sole-craft-brown.vercel.app/index.html).

Designed for **Vernon & Vale**, an international heritage footwear manufacturer (Est. 1974) specializing in Goodyear-welted, Blake-stitched, and hand-patinated footwear for bespoke clients and luxury private label retailers across 42 countries.

---

## 1. Technology Requirements Adherence

Built strictly with:
- **HTML5**: Clean, semantic, fully accessible markup across all 10 individual pages.
- **CSS3**: Modern custom properties (CSS variables), CSS Grid, Flexbox, responsive typography, WCAG AA high-contrast dark & light themes, and full RTL layout support.
- **Vanilla JavaScript**: Pure ES6+ with **zero dependencies or external frameworks** (No React, Next.js, Vue, Angular, or backend frameworks).

---

## 2. Website Pages (10 Complete Pages)

1. **Home (`index.html`)**
   - Top announcement bar with global export indicator, RTL switch, and Dark/Light mode toggle.
   - Luxury navigation with brand crest and dropdown menus.
   - Hero section with high-resolution leather footwear photography, compelling copy, and dual CTAs.
   - Metrics counter strip (1974 Founding Year, 120,000+ Pairs Exported, 180 Steps, 99.8% QC Score).
   - Four featured footwear collections with interactive hover cards.
   - Best-selling footwear preview with direct link to technical specifications.
   - "The Atelier Story" editorial narrative section.
   - 6-step manufacturing process preview.
   - Quality assurance certifications (LWG Gold, ISO 9001:2015, B2B NDA guarantees).
   - Wholesale invitation banner.
   - Customer testimonials from verified global retail partners.
   - Validated newsletter subscription with instant simulated feedback.
   - Complete multi-column luxury footer.

2. **About Us (`about.html`)**
   - Full brand origin story and 50-year heritage narrative.
   - Mission and vision statements.
   - Historical milestones timeline (1974, 1991, 2008, Present Day).
   - Strict raw material sourcing: Tuscan vegetable-tanned shoulder, French Annonay boxcalf, and oak-bark soles.
   - Factory & workshop photo gallery.
   - Master cobblers and technical leadership roster (Giancarlo Vale, Camilla Moretti, Arthur Vernon).
   - Atelier visit scheduling callout.

3. **Products (`products.html`)**
   - Live search functionality filtering by model name, leather grade, welt type, and keywords.
   - Category filter pills: All Models, Formal Shoes, Leather Boots, Loafers, Casual Shoes, Handmade Patina.
   - Dynamic counter ("Displaying X of 12 Models").
   - Detailed product cards featuring badges, minimum order quantities (MOQ), colorway previews, sole specifications, and direct link to `product-details.html?id=...`.
   - Empty state fallback with one-click "Reset Filters" action.
   - Private label customization accordion (debossing, sole configurations, custom packaging).

4. **Product Details (`product-details.html`)**
   - Dynamic URL query parameter reader (`?id=oxford-captoe-heritage` or any model ID).
   - Multi-angle gallery: high-resolution interactive showcase photo with 4 clickable thumbnail angles.
   - Interactive colorway swatches with real-time selection updates.
   - Interactive EU size picker (sizes 39 to 47).
   - Technical specifications tabbed dossier:
     1. Technical Specifications Table (Construction, Upper, Lining, Insole, Outsole, Last).
     2. Artisanal Craftsmanship list.
     3. Tannery Origin & Sourcing provenance notes.
     4. Shoe Care & Longevity maintenance guide.
   - "Request B2B Sample Pair" modal with target shoe name and SKU pre-filled.
   - "You May Also Admire" related footwear recommendations.

5. **Collections (`collections.html`)**
   - Curated lookbooks for 4 signature capsules:
     - *The Sovereign Formal Line* (Goodyear-welted Balmorals, Derbies, Monkstraps).
     - *The Alpine & Urban Boot Series* (Weather-sealed storm welts, Dainite & Vibram lugs).
     - *The Mediterranean Loafers Line* (Featherweight tubular moccasins, suede loafers).
     - *The Bespoke Patina Vault* (Hand-glazed museum crust calfskin and Shell Cordovan).
   - Editorial photography, moodboards, and linked flagship models.

6. **Wholesale (`wholesale.html`)**
   - Professional B2B wholesale and contract manufacturing portal.
   - Manufacturing capabilities: Catalogue White-Labeling, Custom OEM/ODM Lasts, Hand-Patina Studio.
   - Minimum Order Quantity (MOQ) Tiers:
     - Sample & Capsule Tier: 25 – 99 pairs.
     - Commercial Volume Tier: 100 – 499 pairs.
     - Enterprise Tier: 500+ pairs.
   - Global export logistics, Incoterms (DDP/FOB), and REACH compliance.
   - Full interactive B2B Wholesale Enquiry Form with 9 validated fields:
     - Full Name, Company Name, Corporate Email, Phone/WhatsApp, Destination Country, Category, Estimated Quantity, Customization Tier, and Project Message.
   - Front-end simulated confirmation modal providing an official inquiry reference code (e.g. `VV-B2B-84920`) without false claims of backend database persistence.

7. **Craftsmanship (`craftsmanship.html`)**
   - Anatomical cutaway breakdown of a Goodyear-welted shoe (Upper, Insole, Cork Bed, Steel Shank, Oak-Bark Outsole).
   - Detailed deep-dive into the 6 crucial stages of bench cordwaining:
     1. Leather Selection & Grain Examination
     2. Precision Clicking & Edge Skiving
     3. Upper Closing & Glove Lining Assembly
     4. 72-Hour Wooden Lasting & Inseaming
     5. Edge Trimming, Wheeling & Iron Waxing
     6. Multi-Point Quality Control & Champagne Glazing
   - Material comparison matrix (Full-Grain vs. Top-Grain vs. "Genuine" vs. Bonded Leather).

8. **Contact Us (`contact.html`)**
   - Global workshop and showroom hubs:
     - Florence Atelier & Tannery Hub (Italy)
     - London Mayfair Showroom (UK)
     - Mumbai Port Logistics Terminal (India)
   - Interactive general & business inquiry form with real-time validation.
   - Styled geolocation map card with live GPS coordinates.
   - Wholesale fast-track CTA card.

9. **Privacy Policy (`privacy.html`)**
   - Comprehensive legal governance and GDPR compliance.
   - Strict B2B Non-Disclosure Agreement (NDA) and proprietary last ownership guarantees.
   - LocalStorage transparency notice explaining UI preference persistence.
   - Data Protection Officer direct contact desk.

10. **404 Error (`404.html`)**
    - Custom branded "Stepped Off the Beaten Path" layout.
    - Search input linking back to the products catalog.
    - Quick-navigation buttons back to Homepage, Catalog, and Contact.

---

## 3. Design System & Tokens

### Color Palette
- **Deep Chocolate Brown**: `#22150E` / `#2D1D14`
- **Warm Leather Tan**: `#A86334` / `#BD7543` / `#934E24`
- **Cream**: `#FAF7F2` / `#FDFBF7`
- **Ivory**: `#F4EFEA` / `#EEE6DC`
- **Soft Beige**: `#DFD3C3` / `#E8DED1`
- **Dark Espresso (Dark Mode Surface)**: `#120B07` / `#1A110B` / `#221710`
- **Burnished Brass / Gold Accent**: `#C69A4A` / `#DEB366`

### Typography Hierarchy
- **Serif Headings**: *Cormorant Garamond*, Georgia, serif
- **Body & UI**: *Plus Jakarta Sans*, sans-serif

---

## 4. Key Interactive Functionality

1. **Light & Dark Mode**: Persistent theme switcher in the announcement bar and mobile drawer. Automatically saves preference to `localStorage.getItem('vv_theme')` and recalculates CSS variables.
2. **LTR & RTL Layout**: Persistent bidirectional switcher toggling the `dir` attribute on `<html>`. Mirrored alignments and logical spacing persist in `localStorage.getItem('vv_dir')`.
3. **Mobile Drawer**: Accessible off-canvas menu for phone and tablet viewports with backdrop blur and touch dismiss.
4. **Product Catalog Search & Filter**: Real-time filtering by category pills and keyword search with live count updates and empty state fallback.
5. **Dynamic Product Details**: Ingests URL query params (`?id=...`), loads corresponding product specs, colors, sizes, and switches gallery views.
6. **Form Validation**: Real-time validation across all forms with error feedback and simulated frontend modals.
7. **Back-to-Top**: Smooth scrolling floating indicator appearing after 500px of scroll.

---

## 5. Strict Quality Assurance Summary

| Check Item | Result | Notes |
|---|---|---|
| HTML5 Semantic Validation | **Passed** | Clean structure, valid doctypes, proper ARIA labels |
| CSS Layout & Responsive Check | **Passed** | Verified on desktop, laptop, tablet, and mobile (no horizontal overflow) |
| JavaScript Console & Syntax | **Passed** | 0 errors across all 5 JS modules (`verify.js` test passed) |
| Internal Links Check | **Passed** | All 10 HTML files and cross-links verified |
| Light & Dark Theme Contrast | **Passed** | High-contrast WCAG AA verified for text, inputs, cards, borders |
| LTR & RTL Layout Support | **Passed** | CSS logical properties and direction-aware layout |
| Image Presentation | **Passed** | High-resolution leather footwear photography with `object-fit: cover` |
| B2B Demo Submission Feedback | **Passed** | Explicit frontend simulated confirmation modal with reference code |
