# 🛒 Arngren Redesign
> "Guttas Førstevalg!"

An unofficial redesign concept for [arngren.net](http://arngren.net/), the real catalog site of Arngren Sky Commuter AS, an Oslo electronics and vehicles retailer trading since 2002, whose original site is widely cited as one of the most cluttered designs on the web. This project reimagines it as a clean, structured multipage catalog while keeping the parts of its identity that actually make sense: a huge, specific inventory, a plainspoken catalog tone, and the brand's own color palette and tagline.

**This is a personal design project, not affiliated with or endorsed by Arngren.**

---

## 📌 About the Project

### The problem
The live site puts its entire catalog (over a thousand products across electric vehicles, robots, electronics, and outdoor gear) on a single page with no grid system, inconsistent fonts, and no visual hierarchy. Products overlap, image sizes are random, and there's no reliable way to search, filter, or tell what's actually in stock. It's often used as a teaching example of what not to do in web design, even though the underlying business (a huge, genuinely useful inventory, run by the same founder since 2002) is sound.

### Design approach
Rather than softening the site into a generic ecommerce template, the redesign leans into what Arngren actually is: a technical catalog. Every product is treated like a labeled item on a spec plate (name, model number, and key specs in a consistent format) but each one gets its own space instead of being crammed against its neighbors.

**Palette:** Pulled directly from Arngren's real circular badge: navy header/footer, a burgundy accent for prices and CTAs, a cream/tan paper background and hairlines, and a gold trim on the logo mark and active states.

**Signature element:** The "spec plate" product card, a rectangle with a hairline border, a photo area, product name, and a monospace line of specs, echoing the original site's information density without the clutter.

---

## ✨ Key Features
- Home: hero, category navigation, featured products
- Full catalog with category filters, availability filter, search, and sort
- Product detail (driven by `?id=`), quantity selector, add to cart
- Cart with live quantities and subtotal, persisted via `localStorage`
- Real company story, timeline, and contact block
- Contact form (UI only) and real store info
- Not found page

---

## 🛠️ Tech Stack
Plain HTML, CSS, and vanilla JavaScript (no build step, no framework). 

Product data lives in `js/products.js` as a single array, and the cart is handled on the client side with `localStorage` in `js/cart.js`. 

This keeps the project easy to read, fork, and deploy.

---

## 🗂️ Project Structure
```
/ (Root Directory)
├── index.html
├── shop.html
├── product.html
├── cart.html
├── about.html
├── contact.html
├── 404.html
├── css
│   └── style.css
├── js
│   ├── products.js
│   ├── cart.js
│   └── main.js
└── images
    └── products
```

---

## 📦 Product Data
`js/products.js` holds 20 real products, categories, and kr prices pulled from arngren.net's own listings (electric ATVs, an electric Hummer H3 replica, Star Wars robots, RC tanks, telescopes, snow blowers, and more), not placeholder content.

---

## 🚀 Running It Locally
No build tools required. Clone the repo and open `index.html` in a browser, or serve it locally:

```bash
npx serve .
# or
python3 -m http.server
```

---

## 🧩 What's Stubbed Out
This is a front end design concept, not a working store:
- Checkout and payment are not implemented (the checkout button says so)
- The contact form doesn't send anywhere
- Product photos fall back to placeholders until you add files to `images/products/`

---

## 👤 Credits
Design and build by Durga Anand. 

Original site and business: [arngren.net](http://arngren.net/)

Arngren Sky Commuter AS, Oslo, founded 2002 by Frithjof Arngren.
