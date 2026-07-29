/* ============================================================
   KITCHENLY — script.js
   Product data, search/filter, navigation, and UI interactions.
   ============================================================ */

/* ---------- Product data (20 sample kitchen gadgets) ---------- */
  const PRODUCTS = [
  { 
    id: 1,  
    name: "Multi-Blade Vegetable Chopper",   
    cat: "Vegetable Choppers",   
    image: "https://m.media-amazon.com/images/I/81GZZyozv-L._AC_SL1500_.jpg",
    rating: 5, 
    reviews: "2.3k", 
    desc: "One-pull chopping for onions, herbs, and salads in seconds.", 
    badge: "Bestseller",
    link: "https://amzn.to/4wt0x0E", 
  
  },

  { 
    id: 2,  
    name: "5 Blade Veggie Slicer",         
    cat: "Slicer",   
    image: "https://m.media-amazon.com/images/I/81gnNGaOdvL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "1.1k", 
    desc: "Turns Cucumber and carrots into ribbons or noodles instantly.", 
    badge: "",
    link: "https://amzn.to/3RUp9jF", 
  },

  { 
    id: 3,  
    name: "Handheld Garlic Press Deluxe",     
    cat: "Garlic Presses",       
    image: "https://m.media-amazon.com/images/I/71PwypCKD0L._AC_SL1500_.jpg",
    rating: 5, 
    reviews: "3.8k", 
    desc: "Crushes garlic and ginger cleanly without the sticky mess.", 
    badge: "Top Rated" ,
    link: "https://amzn.to/3TS3DMY",
  },

  { 
    id: 4,  
    name: "Handheld Veggie Chopper",      
    cat: "Vegetable Choppers",       
    image: "https://m.media-amazon.com/images/I/51j7ujZQpsL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "980",  
    desc: "This food chopper is handheld and convenient for you to use at anywhere.", 
    badge: "",
    link: "https://amzn.to/4wgGJxa",
  },

  { 
    id: 5,  
    name: "Swivel 3-Piece Peeler",              
    cat: "Peelers",              
    image: "https://m.media-amazon.com/images/I/71Tk6YwdjZL._AC_SL1500_.jpg",
    rating: 5, 
    reviews: "1.6k", 
    desc: "Ultra-sharp blades glide through skins with almost no effort.", 
    badge: "",
    link: "https://amzn.to/4pCLGhj",
  },

  { 
    id: 6,  
    name: "Julienne Dual-Edge Peeler",        
    cat: "Peelers",              
    image: "https://m.media-amazon.com/images/I/718QHwT+0rL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "742",  
    desc: "Stainless steel blades easily glide even through the toughest vegetables.", 
    badge: "" ,
    link: "https://amzn.to/4gQjOUF",
  },

  { 
    id: 7,  
    name: "Non-Stick Oil Mist Sprayer",       
    cat: "Oil Sprayers",         
    image: "https://m.media-amazon.com/images/I/71ZjnwrH7iL._AC_SL1500_.jpg",
    rating: 5, 
    reviews: "4.2k", 
    desc: "Fine, even mist for healthier cooking with less oil waste.", 
    badge: "Bestseller" ,
    link: "https://amzn.to/44Prn6R",
  },

  { 
    id: 8,  
    name: "Glass Olive Oil Dispenser",        
    cat: "Oil Sprayers",         
    image: "https://m.media-amazon.com/images/I/61OYm+qDfhL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "615",  
    desc: "The green glass efficiently protects olive oil from sunlight and largely prolongs the preservation time.", 
    badge: "" ,
    link: "https://amzn.to/4flxfe3",
  },

  { 
    id: 9,  
    name: "Airtight Pantry Storage Set",      
    cat: "Storage Containers",   
    image: "https://m.media-amazon.com/images/I/71niwyWwXjL._AC_SL1500_.jpg",
    rating: 5, 
    reviews: "2.9k", 
    desc: "Keeps cereal, flour, and sugar for weeks longer.", 
    badge: "New" ,
    link: "https://amzn.to/4fxvkCa",
  },

  { 
    id: 10, 
    name: "6 Pack Stackable Fridge Bins",             
    cat: "Storage Containers",   
    image: "https://m.media-amazon.com/images/I/81F60nnFfML._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "1.4k", 
    desc: "Keeps produce elevated above water to prevent sogginess and extend freshness", 
    badge: "" ,
    link: "https://amzn.to/4bcWlcD",
  },

  { 
    id: 11, 
    name: "Silicone Dish Brush Set",           
    cat: "Cleaning Tools",       
    image: "https://m.media-amazon.com/images/I/61LrpWi7zpL._AC_SL1173_.jpg",
    rating: 5, 
    reviews: "1.9k", 
    desc: "Antimicrobial bristles that dry fast and never smell.", 
    badge: "" ,
    link: "https://amzn.to/44MKdvm",
  },

  { 
    id: 12, 
    name: "12 -Piece Microfiber Countertop Cloths",      
    cat: "Cleaning Tools",       
    image: "https://m.media-amazon.com/images/I/71MG2C0z4nL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "860",  
    desc: "Streak-free wipe-downs for counters, glass, and steel.", 
    badge: "",
    link: "https://amzn.to/3TyIirN", 
  },

  { 
    id: 13, 
    name: "Magnetic Knife Strip",              
    cat: "Kitchen Accessories", 
    image: "https://m.media-amazon.com/images/I/71perch8MVL._AC_SL1500_.jpg",
    rating: 5, 
    reviews: "1.2k", 
    desc: "Keeps knives sharp, visible, and off the counter.", 
    badge: "" ,
    link: "https://amzn.to/4fSIOtp",
  },

  { 
    id: 14, 
    name: "Drawer Organizer",          
    cat: "Kitchen Accessories", 
    image: "https://m.media-amazon.com/images/I/71HYX9Sl+vL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "530",  
    desc: "5 pcs deep compartments and can be placed into any drawer or desktop", 
    badge: "" ,
    link: "https://amzn.to/4pBpeW1",
  },

  { 
    id: 15, 
    name: "Digital Kitchen Scale",             
    cat: "Measuring Tools",     
    image: "https://m.media-amazon.com/images/I/91YrLTBnMcL._SL1500_.jpg",
    rating: 5, 
    reviews: "3.1k", 
    desc: "Precise gram accuracy for baking and portion control.", 
    badge: "Top Rated" ,
    link: "https://amzn.to/4fAr198",
  },

  { 
    id: 16, 
    name: "Adjustable Measuring Spoons",       
    cat: "Measuring Tools",     
    image: "https://m.media-amazon.com/images/I/61BRJKlfJSL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "690",  
    desc: "One sliding spoon replaces the whole cluttered set.", 
    badge: "" ,
    link: "https://amzn.to/4vJFLIV",
  },
  
  { 
    id: 17, 
    name: "3-in-1 Slicer",       
    cat: "Slicer",     
    image: "https://m.media-amazon.com/images/I/41Wfa75Yw0L._AC_.jpg",
    rating: 4, 
    reviews: "3k",  
    desc: "Three-way egg slicing options, including slicing, wedging, and dicing.", 
    badge: "",
    link: "https://amzn.to/4wowgQz", 
  },

   { 
    id: 18, 
    name: "Stainless Steel Holder",       
    cat: "Slicer",     
    image: "https://m.media-amazon.com/images/I/71MQ0F6R99L._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "2.1k",  
    desc: "You can keep away from onion irritation when cutting, reduce tears troubles, enjoy a pleasant kitchen time..", 
    badge: "",
    link: "https://amzn.to/3Tn2FIq",
  },
   { 
    id: 19, 
    name: "Glass Storage Containers",       
    cat: "Storage Containers",     
    image: "https://m.media-amazon.com/images/I/81g59+WOxDL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "1.1k",  
    desc: "Keep your pantry neat with this 6-piece glass storage container set, featuring airtight lids to keep food fresh and organized.", 
    badge: "",
    link: "https://amzn.to/3Td04AX",
  },
   { 
    id: 20, 
    name: "Larger Slicer",       
    cat: "Slicer",     
    image: "https://m.media-amazon.com/images/I/71MYzJkz9lL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "1.2k",  
    desc: "This slicer is great for hard-boiled eggs, bananas, and strawberries! It's easy to use and clean.", 
    badge: "",
    link: "https://amzn.to/4hzZqY5",
  },
  { 
    id: 21, 
    name: "Shred Silk The Knife",       
    cat: "Slicer",     
    image: "https://m.media-amazon.com/images/I/61AowfFh+QL._AC_.jpg",
    rating: 4, 
    reviews: "2k",  
    desc: "This shredder knife makes quick work of veggies! Perfect for the busy cook.", 
    badge: "Top Rated",
    link: "https://amzn.to/3TixK00",
  },
  { 
    id: 22, 
    name: "Fruit Vegetable Washing Bowl",       
    cat: "Vegetable & Fruit Washers",     
    image: "https://m.media-amazon.com/images/I/71EUEwVJO9L._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "2k",  
    desc: "Keeping fruits and veggies fresh and clean has never been easier!", 
    badge: "New",
    link: "https://amzn.to/4wqqyh2",
  },
    { 
    id: 23, 
    name: "Fruit and Vegetable Washing Machine",       
    cat: "Vegetable & Fruit Washers",     
    image: "https://m.media-amazon.com/images/I/71UetNnu6qL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "300",  
    desc: "This washing machine will save your time and keep your food fresh!", 
    badge: "Top Rated",
    link: "https://amzn.to/4vUvIAS",
  },
     { 
    id: 24, 
    name: "Salad Spinner",       
    cat: "Vegetable & Fruit Washers",     
    image: "https://m.media-amazon.com/images/I/51t+-Rcc7-L._AC_SL1000_.jpg",
    rating: 4, 
    reviews: "1k",  
    desc: "Spin and wash your veggies easily with this salad spinner. Perfect for keeping your greens fresh and ready.", 
    badge: "New",
    link: "https://amzn.to/4fW2KeX",
  },
     { 
    id: 25, 
    name: "Cutting Board with 2 Stainless Steel Trays",       
    cat: "Kitchen Accessories",     
    image: "https://m.media-amazon.com/images/I/610Cl7Qaw4L._AC_.jpg",
    rating: 4, 
    reviews: "2.1k",  
    desc: "This bamboo cutting board with stainless steel trays is perfect for my meal preps. It keeps everything organized!", 
    badge: "",
    link: "https://amzn.to/4vXnrMp",
  },
   { 
    id: 26, 
    name: "Fruit Vegetable Cleaner Spinner",       
    cat: "Vegetable & Fruit Washers",     
    image: "https://m.media-amazon.com/images/I/51wYsYcLORL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "1.4k",  
    desc: "This fruit and vegetable cleaner is a lifesaver! Super easy to use and keeps everything fresh.", 
    badge: "",
    link: "https://amzn.to/4fDGk0T",
  },
   { 
    id: 27, 
    name: "Dash Fresh Pop Popcorn Maker",       
    cat: "Electric Machines",     
    image: "https://m.media-amazon.com/images/I/61o1yTKT6oL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "4k",  
    desc: "Get ready for movie night with this popcorn maker! It's oil-free and makes 16 cups of fresh popcorn.", 
    badge: "",
    link: "https://amzn.to/4fW5Yiz",
  },
  { 
    id: 28, 
    name: "Garlic Press Rocker",       
    cat: "Garlic Presses",     
    image: "https://m.media-amazon.com/images/I/71VSv-kU0JL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "1.2k",  
    desc: "Got this garlic press rocker and it's so handy! Mince garlic with ease and so much faster!", 
    badge: "",
    link: "https://amzn.to/4b9pMMQ",
  },
    { 
    id: 29, 
    name: "Manual Lemon Squeezer",       
    cat: "Kitchen Accessories",     
    image: "https://m.media-amazon.com/images/I/61rNlh7JP7L._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "11",  
    desc: "This manual lemon squeezer makes a great gift. Great for your kitchen and picnics!", 
    badge: "",
    link: "https://amzn.to/3RjopV8",
  },
   { 
    id: 30, 
    name: "Stainless Steel Cutting Boards",       
    cat: "Kitchen Accessories",     
    image: "https://m.media-amazon.com/images/I/31cDixzSD5L._AC_.jpg",
    rating: 4, 
    reviews: "1.35k",  
    desc: "These stainless steel cutting boards are a must-have for any kitchen!", 
    badge: "",
    link: "https://amzn.to/4w34tUQ",
  },
   { 
    id: 31, 
    name: "10 Piece Wooden Spoons",       
    cat: "Kitchen Accessories",     
    image: "https://m.media-amazon.com/images/I/81vbwpSRKXL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "8.3k",  
    desc: "These wooden spoons are a must-have for any kitchen! They're durable, heat resistant, and nonstick safe.", 
    badge: "",
    link: "https://amzn.to/4fTohF7",
  },
    { 
    id: 32, 
    name: "Mini Rechargeable Bag Sealer",       
    cat: "Kitchen Accessories",     
    image: "https://m.media-amazon.com/images/I/616sP89sRQL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "125",  
    desc: "This mini bag sealer makes storing snacks a breeze!", 
    badge: "New",
    link: "https://amzn.to/4bMC51I",
  },
     { 
    id: 33, 
    name: "Bento Adult Lunch Box",       
    cat: "Lunch Boxes",     
    image: "https://m.media-amazon.com/images/I/71GpXNB86HL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "6.5k",  
    desc: "These bento boxes are perfect for packed lunches! Comes with everything you need.", 
    badge: "Overall Pick",
    link: "https://amzn.to/4c750xz",
  },
    { 
    id: 34, 
    name: "Easy Egg Cooker",       
    cat: "Electric Machines",     
    image: "https://m.media-amazon.com/images/I/61ZeliK9bjL._AC_SL1500_.jpg",
    rating: 4, 
    reviews: "14.8k",  
    desc: "This egg cooker is perfect for cooking any type of egg! Soft, medium, or hard-boiled - no problem!", 
    badge: "Overall Pick",
    link: "https://amzn.to/4fO3NN0",
  },
    
];


/* ---------- Helpers ---------- */
function starString(rating) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

function productCard(p) {
  return `
    <article class="product-card fade-up" data-cat="${p.cat}" data-name="${p.name.toLowerCase()}">

      <div class="product-thumb">
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ""}
        <img src="${p.image}" alt="${p.name}">
      </div>

      <div class="product-body">
        <span class="product-cat">${p.cat}</span>

        <h3>${p.name}</h3>

        <div class="stars" aria-label="${p.rating} out of 5 stars">
          ${starString(p.rating)} 
          <span>(${p.reviews})</span>
        </div>

        <p class="product-desc">${p.desc}</p>

        <a class="amazon-btn" href="${p.link}" target="_blank" rel="nofollow sponsored noopener" aria-label="Check ${p.name} on Amazon">
          <i class="fa-brands fa-amazon"></i> Check on Amazon
        </a>

      </div>

    </article>`;
}

/* ---------- Render: featured grid on Home ---------- */
function renderFeatured() {
  const el = document.getElementById("featuredGrid");
  if (!el) return;
  const featured = PRODUCTS.slice(0, 8);
  el.innerHTML = featured.map(productCard).join("");
  observeFadeEls(el);
}

/* ---------- Render + filter: full grid on Kitchen Gadgets page ---------- */
function renderShop() {
  const grid = document.getElementById("shopGrid");
  if (!grid) return;

  const searchInput = document.getElementById("shopSearch");
  const chips = document.querySelectorAll(".chip");
  const resultsMeta = document.getElementById("resultsMeta");
  const noResults = document.getElementById("noResults");

  let activeCategory = "All";

  function paint() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const filtered = PRODUCTS.filter(p => {
      const matchesCat = activeCategory === "All" || p.cat === activeCategory;
      const matchesQuery = !query || p.name.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query);
      return matchesCat && matchesQuery;
    });

    grid.innerHTML = filtered.map(productCard).join("");
    observeFadeEls(grid, true);

    if (resultsMeta) {
      resultsMeta.textContent = `Showing ${filtered.length} of ${PRODUCTS.length} products`;
    }
    noResults?.classList.toggle("show", filtered.length === 0);
  }

  searchInput?.addEventListener("input", paint);

  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.cat;
      paint();
    });
  });

  paint();
}

/* ---------- Fade-up / left / right reveal on scroll ---------- */
function observeFadeEls(scope = document, immediate = false) {
  const els = scope.querySelectorAll(".fade-up, .fade-left, .fade-right");
  if (immediate) {
    // Grid was just re-rendered (e.g. after filtering) — reveal without waiting
    requestAnimationFrame(() => els.forEach(el => el.classList.add("in-view")));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.setProperty("--i", i % 8);
        entry.target.classList.add("in-view");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach(el => io.observe(el));
}

/* ---------- Navbar shadow on scroll + back-to-top ---------- */
function initScrollEffects() {
  const nav = document.querySelector(".navbar");
  const backToTop = document.querySelector(".back-to-top");

  function onScroll() {
    const y = window.scrollY;
    nav?.classList.toggle("scrolled", y > 8);
    backToTop?.classList.toggle("show", y > 500);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Mobile hamburger menu ---------- */
function initMobileMenu() {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".menu-overlay");
  const closeBtn = document.querySelector(".mobile-menu-close");

  function close() {
    hamburger?.classList.remove("open");
    menu?.classList.remove("open");
    overlay?.classList.remove("open");
    document.body.style.overflow = "";
  }
  function toggle() {
    const isOpen = menu?.classList.contains("open");
    hamburger?.classList.toggle("open", !isOpen);
    menu?.classList.toggle("open", !isOpen);
    overlay?.classList.toggle("open", !isOpen);
    document.body.style.overflow = isOpen ? "" : "hidden";
  }

  hamburger?.addEventListener("click", toggle);
  closeBtn?.addEventListener("click", close);
  overlay?.addEventListener("click", close);
  menu?.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
}

/* ---------- Search overlay ---------- */
function initSearchOverlay() {
  const trigger = document.querySelector(".search-trigger");
  const overlay = document.querySelector(".search-overlay");
  const input = document.querySelector(".search-overlay-box input");
  const closeArea = overlay; // click outside box closes

  function open() {
    overlay?.classList.add("open");
    setTimeout(() => input?.focus(), 250);
  }
  function close() { overlay?.classList.remove("open"); }

  trigger?.addEventListener("click", open);
  overlay?.addEventListener("click", (e) => { if (e.target === closeArea) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  input?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && input.value.trim()) {
      window.location.href = `kitchen-gadgets.html?q=${encodeURIComponent(input.value.trim())}`;
    }
  });
}

/* ---------- Apply ?q= from URL on shop page ---------- */
function applyQueryParam() {
  const params = new URLSearchParams(window.location.search);
  const q = params.get("q");
  const input = document.getElementById("shopSearch");
  if (q && input) {
    input.value = q;
    input.dispatchEvent(new Event("input"));
  }
}

/* ---------- Button ripple effect ---------- */
function initRipple() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".btn, .amazon-btn, .chip");
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    const size = Math.max(rect.width, rect.height);
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
    btn.style.position = btn.style.position || "relative";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 650);
  });
}

/* ---------- Contact form ---------- */
/* ---------- Contact Form ---------- */

function initContactForm() {

    const form = document.getElementById("contactForm");

    if (!form) return;

    form.addEventListener("submit", () => {

        const button = form.querySelector("button");

        button.disabled = true;

        button.innerHTML =
        'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';

    });

}

initContactForm();

/* ---------- Category card click -> jump to shop page filtered ---------- */
function initCategoryLinks() {
  document.querySelectorAll("[data-category-link]").forEach(card => {
    card.addEventListener("click", () => {
      const cat = card.dataset.categoryLink;
      window.location.href = `kitchen-gadgets.html?cat=${encodeURIComponent(cat)}`;
    });
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); card.click(); }
    });
  });
}

function applyCategoryParam() {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("cat");
  if (!cat) return;
  const chip = document.querySelector(`.chip[data-cat="${CSS.escape(cat)}"]`);
  chip?.click();
}

/* ---------- Init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderFeatured();
  renderShop();
  observeFadeEls(document);
  initScrollEffects();
  initMobileMenu();
  initSearchOverlay();
  initRipple();
  initContactForm();
  initCategoryLinks();
  applyQueryParam();
  applyCategoryParam();
});
