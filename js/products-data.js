/* ==========================================================================
   VERNON & VALE — Master Leather Footwear Manufacturer
   Footwear Catalog Database
   ========================================================================== */

const FOOTWEAR_PRODUCTS = [
  {
    id: "oxford-captoe-heritage",
    name: "The Kensington Captoe Oxford",
    category: "formal",
    categoryName: "Formal Shoes",
    tag: "Goodyear Welted",
    moq: "MOQ: 50 Pairs",
    priceEstimate: "Wholesale Tier: Tier 1 ($145 / pair)",
    sku: "VV-OX-001",
    shortDesc: "Classic closed-lacing Balmoral oxford in vegetable-tanned French calfskin with hand-beveled waist and oak-bark soles.",
    fullDesc: "The quintessential formal dress shoe for the discerning gentleman and executive wardrobes. Cut from hand-selected French boxcalf, closed on our refined 82-Last, and fitted with high-density oak-bark tanned leather outsoles. Every pair features a hand-wheeled welt fudge and channelled sole stitching hidden beneath a hand-burnished violin waist.",
    images: [
      "assets/images/product_1_captoe_oxford.jpg",
      "assets/images/p1_gallery_angle.jpg",
      "assets/images/p1_gallery_sole.jpg",
      "assets/images/p1_gallery_detail.jpg"
    ],
    colors: [
      { name: "Vintage Espresso", hex: "#22150E" },
      { name: "Antique Cognac", hex: "#A86334" },
      { name: "Bordeaux Oxblood", hex: "#4A1521" },
      { name: "Obsidian Black", hex: "#1A1A1A" }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    specs: {
      construction: "Goodyear Welted (360° storm optional)",
      upperLeather: "Full-Grain French Calfskin (1.4mm - 1.6mm)",
      lining: "Drum-dyed full calf leather glove lining",
      insole: "5mm Natural vegetable-tanned leather insole with granulated cork cavity fill",
      outsole: "J. Rendenbach Oak-Bark tanned leather sole with brass-pegged waist",
      last: "VV-82 Chiseled Almond Last"
    },
    craftDetails: [
      "180 individual manual steps from click to final polish",
      "Upper leather rested for 72 hours on wooden lasts for shape memory",
      "Hand-skived leather counter and celastic toe puff for structural integrity",
      "Channelled sole with concealed stitch line and brass toe plates"
    ],
    sourcing: "Tanned at the renowned Tanneries du Puy in Auvergne-Rhône-Alpes, France, utilizing natural vegetable oils and mineral drums for deep pigment penetration.",
    care: "Condition bi-monthly with beeswax-based cream. Allow 24 hours of rest with cedar shoe trees inserted after every wear."
  },
  {
    id: "chelsea-boot-tuscan",
    name: "The Tuscan Chelsea Boot",
    category: "boots",
    categoryName: "Leather Boots",
    tag: "Storm Welted",
    moq: "MOQ: 50 Pairs",
    priceEstimate: "Wholesale Tier: Tier 2 ($165 / pair)",
    sku: "VV-BT-002",
    shortDesc: "Whole-cut upper Chelsea boot with heavy-gauge elastic side gores and durable Dainite studded rubber soles.",
    fullDesc: "Engineered for versatility across urban streets and boardroom settings. Features a single-piece wholecut upper to eliminate lateral stitch seams, high-rebound Italian elastic side gores, and woven dual pull tabs. Built with a weather-resistant Goodyear storm welt to shield against moisture.",
    images: [
      "assets/images/product_2_chelsea_boot.jpg",
      "assets/images/p2_gallery_angle.jpg",
      "assets/images/p2_gallery_sole.jpg",
      "assets/images/p2_gallery_detail.jpg"
    ],
    colors: [
      { name: "Dark Walnut Brown", hex: "#2A1810" },
      { name: "Canyon Tan Suede", hex: "#9C6B46" },
      { name: "Jet Black Boxcalf", hex: "#121212" }
    ],
    sizes: [40, 41, 42, 43, 44, 45, 46],
    specs: {
      construction: "Goodyear Storm Welt (Water resistant)",
      upperLeather: "Full-Grain Italian Tuscan Cowhide (1.8mm)",
      lining: "Full grain moisture-wicking calfskin",
      insole: "Vegetable tanned insole with ergonomic arch support",
      outsole: "Dainite British studded rubber sole",
      last: "VV-95 Round Toe Country Last"
    },
    craftDetails: [
      "Seamless whole-cut vamp blocking under heat tension",
      "Twin-needle double locked perimeter welt stitching",
      "Heavy duty woven grosgrain heel pullers anchored into rear counter",
      "Anti-fatigue tempered steel shank embedded in cork midlayer"
    ],
    sourcing: "Vegetable-tanned shoulder leather sourced from Ponte a Egola, Tuscany, treated with organic birch and chestnut extracts for superior water repellency.",
    care: "Brush regularly with a horsehair brush. Use neutral waterproofing spray for suede variants or tinted wax cream for smooth leather."
  },
  {
    id: "penny-loafer-verona",
    name: "The Verona Penny Loafer",
    category: "loafers",
    categoryName: "Loafers",
    tag: "Blake Stitched",
    moq: "MOQ: 60 Pairs",
    priceEstimate: "Wholesale Tier: Tier 1 ($130 / pair)",
    sku: "VV-LF-003",
    shortDesc: "Iconic saddle penny loafer with hand-stitched beefroll detailing and flexible Italian leather outsoles.",
    fullDesc: "An enduring symbol of sartorial elegance and relaxed luxury. The Verona Penny Loafer uses traditional Blake-Rapid construction, enabling extreme flexibility and minimal break-in time. Hand-sewn apron stitching and traditional saddle slit accentuate its archival silhouette.",
    images: [
      "assets/images/product_3_penny_loafer.jpg",
      "assets/images/p3_gallery_angle.jpg",
      "assets/images/p3_gallery_sole.jpg",
      "assets/images/p3_gallery_detail.jpg"
    ],
    colors: [
      { name: "Rich Bourbon Tan", hex: "#A86334" },
      { name: "Deep Chocolate", hex: "#26160F" },
      { name: "Midnight Navy", hex: "#1C2430" }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    specs: {
      construction: "Blake-Rapid Stitching (Flexible & Resoleable)",
      upperLeather: "French Annonay Boxcalf or Kudu Suede",
      lining: "Unlined vamp with calf-lined heel pocket for barefoot softness",
      insole: "Molded leather insole with memory latex heel cushion",
      outsole: "Single leather sole with non-slip rubber heel quarter",
      last: "VV-Loaf-11 Low-Instep Slip-On Last"
    },
    craftDetails: [
      "Hand-sewn moccasin stitch around the front toe apron",
      "Reinforced saddle strap with traditional penny coin slot",
      "Unlined forefoot for immediate out-of-box comfort and breathability",
      "Hand-painted and edge-waxed sole periphery"
    ],
    sourcing: "Annonay calf leather from the Rhône valley, renowned worldwide for tight pore structure and resistance to creasing.",
    care: "Wipe clean with a damp cotton cloth. Apply nourishing delicate cream once monthly. Store with spring-loaded shoe trees."
  },
  {
    id: "patina-wholecut-monarch",
    name: "The Monarch Patina Wholecut",
    category: "handmade",
    categoryName: "Handmade Footwear",
    tag: "Hand Patinated",
    moq: "MOQ: 25 Pairs",
    priceEstimate: "Wholesale Tier: Artisanal Tier ($210 / pair)",
    sku: "VV-HM-004",
    shortDesc: "Masterpiece wholecut shoe formed from a single piece of crust calfskin, hand-painted with multi-layered alcohol dyes.",
    fullDesc: "The pinnacle of artisanal shoe craftsmanship. Because wholecut shoes require flawless hides with zero natural blemishes, less than 5% of raw calfskins qualify. Each shoe is hand-dyed over 14 hours using layered Japanese alcohol pigments and bee-wax friction glazing to yield an ethereal museum patina gradient.",
    images: [
      "assets/images/product_4_patina_wholecut.jpg",
      "assets/images/p4_gallery_angle.jpg",
      "assets/images/p4_gallery_sole.jpg",
      "assets/images/p4_gallery_detail.jpg"
    ],
    colors: [
      { name: "Museum Smoke Cognac", hex: "#9E5928" },
      { name: "Midnight Sapphire", hex: "#15202B" },
      { name: "Emerald Forest", hex: "#1B3B2B" },
      { name: "Burgundy Fade", hex: "#3D141C" }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    specs: {
      construction: "Hand-Welted Goodyear with Violin Waist",
      upperLeather: "Unfinished Italian Crust Calfskin (1.3mm)",
      lining: "Full aniline calf leather",
      insole: "6mm Tuscan vegetable-tanned leather carved holdfast",
      outsole: "Hand-painted fiddleback leather sole with blind stitching",
      last: "VV-Bespoke Sculpted Chisel Last"
    },
    craftDetails: [
      "Single-piece leather upper with sole seam at the inner heel",
      "Hand-welted with waxed linen thread without gemming tape",
      "Hand-rubbed alcohol pigment glaze applied with natural badger brushes",
      "Mirror glaze toe cap achieved with high-carnauba beeswax"
    ],
    sourcing: "Hand-selected unpigmented crust leather from Santa Croce sull'Arno, Italy.",
    care: "Clean exclusively with Saphir Medaille d'Or Renovateur. Never use synthetic silicone polishes."
  },
  {
    id: "derby-wingtip-valkyrie",
    name: "The Valkyrie Wingtip Brogue Derby",
    category: "formal",
    categoryName: "Formal Shoes",
    tag: "Full Brogue",
    moq: "MOQ: 50 Pairs",
    priceEstimate: "Wholesale Tier: Tier 1 ($150 / pair)",
    sku: "VV-OX-005",
    shortDesc: "Ornate full wingtip brogue with perforated medallions, serrated edge pinking, and double leather soles.",
    fullDesc: "Combining country durability with stately formality, the Valkyrie Brogue features open-lacing derby quarters, intricate brogue perforations, and punched toe medallions. Ideal for heavy wear, rainy commutes, and bespoke formal retail collections.",
    images: [
      "assets/images/product_5_wingtip_derby.jpg",
      "assets/images/p5_gallery_angle.jpg",
      "assets/images/p5_gallery_sole.jpg",
      "assets/images/p5_gallery_detail.jpg"
    ],
    colors: [
      { name: "Burnished Chestnut", hex: "#7D3D1E" },
      { name: "Dark Tan", hex: "#A86334" },
      { name: "Black Onyx", hex: "#1C1C1C" }
    ],
    sizes: [40, 41, 42, 43, 44, 45, 46],
    specs: {
      construction: "Goodyear Welted 360° Reverse Welt",
      upperLeather: "Scotch-Grain or Smooth Vegetable-Tanned Cowhide",
      lining: "100% Breathable calf leather",
      insole: "Full leather insole with natural cork infill",
      outsole: "Double leather outsole or Vibram studded rubber",
      last: "VV-68 Classic English Country Last"
    },
    craftDetails: [
      "Precision brogue perforations punched with hardened steel dies",
      "Pinking edges cut cleanly to maintain sharp architectural definition",
      "Double sole construction with bevelled heel breast",
      "Hand-burnished toe medallion and heel counter"
    ],
    sourcing: "Full-grain vegetable-tanned steer hide from traditional German tanneries using oak bark pits.",
    care: "Condition with high-solid cream polish. Brush brogue perforations with horsehair to prevent wax accumulation."
  },
  {
    id: "monkstrap-double-siena",
    name: "The Siena Double Monkstrap",
    category: "formal",
    categoryName: "Formal Shoes",
    tag: "Solid Brass Buckles",
    moq: "MOQ: 50 Pairs",
    priceEstimate: "Wholesale Tier: Tier 1 ($155 / pair)",
    sku: "VV-OX-006",
    shortDesc: "Contemporary double-strap dress shoe with solid brass hardware, cap toe accent, and contoured waist.",
    fullDesc: "A statement silhouette loved by modern tailoring houses. The Siena Double Monkstrap features twin straps secured with hand-cast solid brass buckles, an almond toe cap, and an elasticated bottom buckle for effortless entry.",
    images: [
      "assets/images/product_6_double_monkstrap.jpg",
      "assets/images/p6_gallery_angle.jpg",
      "assets/images/p6_gallery_sole.jpg",
      "assets/images/p6_gallery_detail.jpg"
    ],
    colors: [
      { name: "Tobacco Brown", hex: "#5C3A21" },
      { name: "Burnished Caramel", hex: "#BD7543" },
      { name: "Midnight Black", hex: "#161616" }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    specs: {
      construction: "Goodyear Welted with Channelled Sole",
      upperLeather: "French Boxcalf Leather (1.5mm)",
      lining: "Soft vegetable calfskin lining",
      insole: "Orthopedic leather insole with arch cushioning",
      outsole: "Single oak-bark sole with recessed rubber toe tap",
      last: "VV-74 Continental Chisel Last"
    },
    craftDetails: [
      "Forged solid brass buckles with hand-brushed matte or antique finish",
      "Internal elastic strap anchor for comfortable foot flex",
      "Beveled edge waist giving a sleek profile under the arch",
      "Hand-burnished cap toe and heel counters"
    ],
    sourcing: "Boxcalf leather from Les Tanneries du Puy, dyed using natural aniline pigments.",
    care: "Clean with soft horsehair brush, moisturize leather weekly with beeswax balm."
  },
  {
    id: "tassel-loafer-florence",
    name: "The Florence Tassel Loafer",
    category: "loafers",
    categoryName: "Loafers",
    tag: "Hand-Braided Lacing",
    moq: "MOQ: 60 Pairs",
    priceEstimate: "Wholesale Tier: Tier 1 ($135 / pair)",
    sku: "VV-LF-007",
    shortDesc: "Graceful tassel loafer with 360-degree woven leather side lacing, twin front tassels, and Blake construction.",
    fullDesc: "The quintessential Mediterranean silhouette. Handcrafted with braided rawhide collar lacing that passes seamlessly around the ankle and terminates in handcrafted leather tassels over an elegant apron.",
    images: [
      "assets/images/product_7_tassel_loafer.jpg",
      "assets/images/p7_gallery_angle.jpg",
      "assets/images/p7_gallery_sole.jpg",
      "assets/images/p7_gallery_detail.jpg"
    ],
    colors: [
      { name: "Snuff Suede", hex: "#8A5A36" },
      { name: "Antique Espresso", hex: "#22150E" },
      { name: "Forest Olive Suede", hex: "#3A4532" }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45, 46],
    specs: {
      construction: "Blake Stitched",
      upperLeather: "Charles F. Stead Reverse Calf Suede or Boxcalf",
      lining: "100% Leather glove lining",
      insole: "Breathable perforated leather footbed",
      outsole: "Vegetable tanned leather sole with rubber heel insert",
      last: "VV-09 Italian Round Loafer Last"
    },
    craftDetails: [
      "Twin hand-rolled leather tassels with reinforced cord knots",
      "360-degree woven tunnel lacing tailored around the foot collar",
      "Ultra-flexible forefoot for effortless natural walking gait",
      "Hand-finished dyed sole edges"
    ],
    sourcing: "Charles F. Stead suede tanners (Leeds, England), celebrated for weather-treated nap and rich texture.",
    care: "Use brass wire suede brush for nap rejuvenation. Waterproof with fluorocarbon-free suede spray."
  },
  {
    id: "service-boot-alps",
    name: "The Alpine Norvegese Service Boot",
    category: "boots",
    categoryName: "Leather Boots",
    tag: "Norwegian Welted",
    moq: "MOQ: 40 Pairs",
    priceEstimate: "Wholesale Tier: Tier 2 ($180 / pair)",
    sku: "VV-BT-008",
    shortDesc: "Rugged service boot with visible braided Norwegian welt stitching, gunmetal speed hooks, and Vibram commando lugs.",
    fullDesc: "Built for unforgiving alpine terrains and rugged industrial elegance. The Norwegian (Norvegese) construction turns the upper leather outward before stitching, producing an impenetrable barrier against snow, mud, and water. Accompanied by heavy-gauge brass speed hooks and Vibram lugged soles.",
    images: [
      "assets/images/product_8_service_boot.jpg",
      "assets/images/p8_gallery_angle.jpg",
      "assets/images/p8_gallery_sole.jpg",
      "assets/images/p8_gallery_detail.jpg"
    ],
    colors: [
      { name: "Roughout Waxed Tan", hex: "#7F4E2D" },
      { name: "Coal Black Chromexcel", hex: "#141414" },
      { name: "Bison Walnut", hex: "#3B2418" }
    ],
    sizes: [40, 41, 42, 43, 44, 45, 46, 47],
    specs: {
      construction: "Norwegian (Norvegese) Double Braided Welt",
      upperLeather: "Horween Chromexcel / Waxed Flesh Cowhide (2.2mm)",
      lining: "Full grain vegetable leather lining",
      insole: "Thick vegetable leather insole + PORON high-impact foam insert",
      outsole: "Vibram Montagna Commando lug sole",
      last: "VV-Command Round Military Last"
    },
    craftDetails: [
      "Braided Norwegian welt stitch using 8-ply waxed hemp cord",
      "Gusseted tongue construction to block water and grit entry",
      "Triple-stitched stress zones at vamp and counter junction",
      "Anti-rust gunmetal speed lace eyelets and hooks"
    ],
    sourcing: "Sourced from the Horween Leather Company (Chicago, USA), combination-tanned with food-grade beef tallow and natural waxes.",
    care: "Condition with heavy mink oil or dubbin wax before winter seasons. Wipe mud off promptly with warm water."
  },
  {
    id: "driving-shoe-monaco",
    name: "The Monaco Driving Shoe",
    category: "casual",
    categoryName: "Casual Shoes",
    tag: "Tubular Moccasin",
    moq: "MOQ: 80 Pairs",
    priceEstimate: "Wholesale Tier: Tier 1 ($110 / pair)",
    sku: "VV-CS-009",
    shortDesc: "Luxuriously soft tubular moccasin with split pebbled rubber driving pods and hand-tied penny strap.",
    fullDesc: "Designed for grand touring and weekend leisure. A genuine tubular moccasin construction wraps buttery calf leather entirely under the foot like a glove. Outfitted with segmented rubber driving nubs extending up the heel for effortless pedal grip.",
    images: [
      "assets/images/product_9_driving_shoe.jpg",
      "assets/images/p9_gallery_angle.jpg",
      "assets/images/p9_gallery_sole.jpg",
      "assets/images/p9_gallery_detail.jpg"
    ],
    colors: [
      { name: "Cognac Pebble Suede", hex: "#A86334" },
      { name: "Riviera Navy Suede", hex: "#1F2D3D" },
      { name: "Stone Sand Calf", hex: "#BFB29E" }
    ],
    sizes: [39, 40, 41, 42, 43, 44, 45],
    specs: {
      construction: "Tubular Moccasin Hand-Stitched",
      upperLeather: "Pebble-Grain Italian Calfskin or Silky Suede",
      lining: "Unlined for maximum barefoot ventilation",
      insole: "Anatomical leather-wrapped memory latex footbed",
      outsole: "Segmented rubber driving nubs with reinforced heel wrap",
      last: "VV-Drive Comfort Form Last"
    },
    craftDetails: [
      "True tubular cradle wrap with no hard midsole boards",
      "Heavy gauge hand-drawn saddle stitch along the vamp",
      "Non-marking rubber driving pods injection-anchored into leather chassis",
      "Featherweight construction (approx. 290g per shoe)"
    ],
    sourcing: "Tuscan soft tumbled calfskin with natural hydrophobic treatment.",
    care: "Spot clean with gentle foam cleaner. Keep away from prolonged submersion in water."
  },
  {
    id: "derby-casual-cambridge",
    name: "The Cambridge Plain-Toe Derby",
    category: "casual",
    categoryName: "Casual Shoes",
    tag: "Crepe Sole",
    moq: "MOQ: 50 Pairs",
    priceEstimate: "Wholesale Tier: Tier 1 ($138 / pair)",
    sku: "VV-CS-010",
    shortDesc: "Minimalist plain-toe casual derby with blind eyelets, natural plantation crepe soles, and oiled nubuck uppers.",
    fullDesc: "The everyday staple for contemporary wardrobes. Combines clean plain-toe styling with ultra-cushioned plantation crepe rubber soles that absorb shock with every step. Perfect for smart casual retail collections and capsule lifestyle brands.",
    images: [
      "assets/images/product_10_plain_derby.jpg",
      "assets/images/p10_gallery_angle.jpg",
      "assets/images/p10_gallery_sole.jpg",
      "assets/images/p10_gallery_detail.jpg"
    ],
    colors: [
      { name: "Oiled Olive Nubuck", hex: "#4B5320" },
      { name: "Caramel Brown", hex: "#8B4513" },
      { name: "Charcoal Slate", hex: "#2E343B" }
    ],
    sizes: [40, 41, 42, 43, 44, 45, 46],
    specs: {
      construction: "Stitchdown / 270° Goodyear Welt",
      upperLeather: "Heavy Oiled Nubuck (1.8mm)",
      lining: "Vegetable tanned half-calf lining",
      insole: "Natural cork filler with molded leather footbed",
      outsole: "100% Natural plantation hevea crepe rubber",
      last: "VV-71 Relaxed Derby Last"
    },
    craftDetails: [
      "Blind metal eyelets for a streamlined minimalist aesthetic",
      "Natural plantation crepe outsoles with raw textured edging",
      "Reinforced counter stiffeners to prevent heel slippage",
      "Waxed braided round laces"
    ],
    sourcing: "Oiled pull-up leathers from Santa Croce, enriched with natural tallow waxes.",
    care: "Brush with crepe brush to remove dirt. Re-oil sparingly with natural wax cream."
  },
  {
    id: "chukka-boot-suede",
    name: "The Mayfair Desert Chukka Boot",
    category: "boots",
    categoryName: "Leather Boots",
    tag: "Hand-Stitched Welt",
    moq: "MOQ: 50 Pairs",
    priceEstimate: "Wholesale Tier: Tier 1 ($145 / pair)",
    sku: "VV-BT-011",
    shortDesc: "Three-eyelet ankle chukka boot in water-resistant Janus calf suede with storm welt and leather soles.",
    fullDesc: "A timeless British staple reimagined for luxury private labels. Features a three-eyelet facing, unadorned vamp, and waterproof suede treatment that repels water droplets while maintaining velvety softness.",
    images: [
      "assets/images/product_11_chukka_boot.jpg",
      "assets/images/p11_gallery_angle.jpg",
      "assets/images/p11_gallery_sole.jpg",
      "assets/images/p11_gallery_detail.jpg"
    ],
    colors: [
      { name: "Snuff Brown Suede", hex: "#7E5234" },
      { name: "Sandstone Beige Suede", hex: "#C7B299" },
      { name: "Espresso Smooth Leather", hex: "#22150E" }
    ],
    sizes: [40, 41, 42, 43, 44, 45, 46],
    specs: {
      construction: "Goodyear Welted with Natural Storm Welt",
      upperLeather: "Charles F. Stead Janus Calf Suede",
      lining: "Full grain calfskin glove lining",
      insole: "Full leather insole with natural cork infill",
      outsole: "Single leather sole with brass-pegged waist",
      last: "VV-44 Rounded Chukka Last"
    },
    craftDetails: [
      "Three blind brass eyelets with internal reinforcement washers",
      "Folded topline collar edge preventing ankle chafing",
      "Natural unbleached storm welt with hand-waxed thread",
      "Tapered stacked leather Cuban heel"
    ],
    sourcing: "Janus full-reverse calf suede from C.F. Stead, England.",
    care: "Steam lightly over boiling water to refresh compressed nap, then brush upward with suede brush."
  },
  {
    id: "bespoke-cordovan-balmoral",
    name: "The Imperium Shell Cordovan Balmoral",
    category: "handmade",
    categoryName: "Handmade Footwear",
    tag: "Shell Cordovan",
    moq: "MOQ: 20 Pairs",
    priceEstimate: "Wholesale Tier: Bespoke Tier ($280 / pair)",
    sku: "VV-HM-012",
    shortDesc: "Rare genuine Horween shell cordovan boot with hand-carved fiddleback waist and hand-pegged lemonwood nails.",
    fullDesc: "Crafted strictly in limited quarterly allocations. Shell Cordovan is harvested from the fibrous flat muscle (shell) beneath the hide of equine croup. Tanned for 6 full months in vegetable liquors, Cordovan produces legendary non-creasing rippling folds and an unyielding mirror luster that deepens with age.",
    images: [
      "assets/images/product_12_cordovan_balmoral.jpg",
      "assets/images/p12_gallery_angle.jpg",
      "assets/images/p12_gallery_sole.jpg",
      "assets/images/p12_gallery_detail.jpg"
    ],
    colors: [
      { name: "Horween Color #8 (Deep Burgundy)", hex: "#3B1822" },
      { name: "Dark Cognac Shell", hex: "#78411D" },
      { name: "Cigar Brown Shell", hex: "#3A291E" }
    ],
    sizes: [40, 41, 42, 43, 44, 45],
    specs: {
      construction: "100% Hand-Welted with Wooden Lemonwood Pegging",
      upperLeather: "Genuine Horween Shell Cordovan (USA)",
      lining: "Full grain vegetable calf lining",
      insole: "6mm hand-channeled vegetable leather holdfast",
      outsole: "Double J. Rendenbach oak bark soles with recessed steel toe plate",
      last: "VV-Imperial Heritage Last"
    },
    craftDetails: [
      "6-month vegetable tanning process followed by hand-glazing with glass rods",
      "Hand-sewn inseam with natural boars' bristle needles and pitch thread",
      "Hand-driven lemonwood pegs anchoring the arch and fiddleback waist",
      "Zero creasing behavior; shell develops magnificent undulating waves over decades"
    ],
    sourcing: "Direct allocation from Horween Leather Co., Chicago, Illinois, USA.",
    care: "Buff vigorously with deer bone to smooth surface micro-scratches. Apply Cordovan cream only once or twice a year."
  }
];
