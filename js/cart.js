/* Shared cart logic — persisted in localStorage, used across all pages */
const CART_KEY = "arngren_cart";

function getCart(){
  try{
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  }catch(e){
    return [];
  }
}

function saveCart(cart){
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(id, qty=1){
  const cart = getCart();
  const existing = cart.find(item => item.id === id);
  if(existing){
    existing.qty += qty;
  }else{
    cart.push({ id, qty });
  }
  saveCart(cart);
}

function removeFromCart(id){
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
}

function updateCartQty(id, qty){
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if(item){
    item.qty = Math.max(1, qty);
    saveCart(cart);
  }
}

function getCartCount(){
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge(){
  document.querySelectorAll("#cart-count").forEach(el => {
    el.textContent = getCartCount();
  });
}

document.addEventListener("DOMContentLoaded", updateCartBadge);
