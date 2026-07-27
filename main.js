/* Shared UI helpers used across pages */

// Returns an <img> that falls back to a text placeholder if the photo
// hasn't been dropped into images/products/ yet.
function photoOrPlaceholder(id, label){
  const src = productImagePath(id);
  return `<img src="${src}" alt="${label}" onerror="this.replaceWith(Object.assign(document.createElement('span'), {textContent:'${label}'}))">`;
}

function plateHTML(p){
  return `
    <article class="plate">
      <a href="product.html?id=${p.id}" class="plate-link">
        <div class="plate-thumb">${photoOrPlaceholder(p.id, p.name)}</div>
        <div class="plate-tag">${p.category}</div>
        <h3>${p.name}</h3>
        <div class="plate-specs">${p.specs.join("<br>")}</div>
      </a>
      <div class="plate-footer">
        <span class="price mono">${formatPrice(p.price)}</span>
        <span class="stock ${p.low ? 'low' : ''}">${p.stock}</span>
      </div>
      <button class="plate-cta" onclick="addToCart(${p.id}); this.textContent='Added ✓'; setTimeout(()=>this.textContent='Add to cart', 1200)">Add to cart</button>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav.primary-nav");
  if(toggle && nav){
    toggle.addEventListener("click", () => {
      const open = nav.style.display === "flex";
      nav.style.display = open ? "none" : "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "72px";
      nav.style.left = "0";
      nav.style.right = "0";
      nav.style.background = "var(--navy)";
      nav.style.padding = "20px 32px";
      nav.style.borderBottom = "3px solid var(--gold)";
      nav.style.gap = "18px";
    });
  }
});
