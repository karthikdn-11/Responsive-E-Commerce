
const products = [
  { id: 1, name: 'Smartphone', category: 'Electronics', price: 499, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', rating: 4.5, description: 'A high-quality smartphone with a great camera and long battery life.' },
  { id: 2, name: 'Laptop', category: 'Electronics', price: 899, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', rating: 4.7, description: 'A powerful laptop for work and play, with a sleek design.' },
  { id: 3, name: 'Headphones', category: 'Electronics', price: 120, image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80', rating: 4.3, description: 'Noise-cancelling headphones.' },
  { id: 7, name: 'Watch', category: 'Accessories', price: 150, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', rating: 4.8, description: 'Elegant wrist watch with leather strap.' },
  { id: 8, name: 'Backpack', category: 'Accessories', price: 70, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', rating: 4.1, description: 'Durable and spacious backpack.' },
  { id: 9, name: 'Bluetooth Speaker', category: 'Electronics', price: 60, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
  { id: 13, name: 'Tablet', category: 'Electronics', price: 350, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', rating: 4.3 },
  { id: 16, name: 'Fitness Tracker', category: 'Electronics', price: 99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', rating: 4.2 },

  { id: 4, name: 'T-Shirt', category: 'Clothing', price: 25, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', rating: 4.0, description: 'Comfortable cotton t-shirt, perfect for everyday wear.' },
  { id: 5, name: 'Jeans', category: 'Clothing', price: 50, image: 'https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80', rating: 4.2, description: 'Classic blue jeans with a modern fit.' },
  { id: 6, name: 'Dress', category: 'Clothing', price: 80, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', rating: 4.6, description: 'Elegant evening dress.' },
  { id: 10, name: 'Sneakers', category: 'Clothing', price: 90, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 14, name: 'Jacket', category: 'Clothing', price: 120, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
  { id: 18, name: 'Formal Shirt', category: 'Clothing', price: 45, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80', rating: 4.3 },

  { id: 11, name: 'Sunglasses', category: 'Accessories', price: 60, image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80', rating: 4.2 },
  { id: 12, name: 'Handbag', category: 'Accessories', price: 110, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 15, name: 'Wallet', category: 'Accessories', price: 40, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', rating: 4.1 },
  { id: 17, name: 'Scarf', category: 'Accessories', price: 30, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', rating: 4.0 },

  { id: 19, name: 'Table Lamp', category: 'Home and Garden', price: 35, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
  { id: 20, name: 'Indoor Plant', category: 'Home and Garden', price: 22, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 21, name: 'Cushion Set', category: 'Home and Garden', price: 40, image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80', rating: 4.3 },
  { id: 22, name: 'Wall Clock', category: 'Home and Garden', price: 28, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80', rating: 4.2 },
  { id: 31, name: 'Floor Rug', category: 'Home and Garden', price: 55, image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 32, name: 'Wall Art', category: 'Home and Garden', price: 65, image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 33, name: 'Coffee Table', category: 'Home and Garden', price: 120, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80', rating: 4.7 },

  { id: 23, name: 'Teddy Bear', category: 'Toys', price: 18, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 24, name: 'Building Blocks', category: 'Toys', price: 30, image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 25, name: 'Toy Car', category: 'Toys', price: 15, image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 26, name: 'Puzzle Game', category: 'Toys', price: 20, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', rating: 4.3 },
  { id: 34, name: 'Action Figure', category: 'Toys', price: 22, image: 'https://images.unsplash.com/photo-1511452885600-a2f0bdf965c0?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
  { id: 35, name: 'Remote Control Drone', category: 'Toys', price: 85, image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 36, name: 'Board Game', category: 'Toys', price: 35, image: 'https://images.unsplash.com/photo-1511452885600-a2f0bdf965c0?auto=format&fit=crop&w=400&q=80', rating: 4.5 },

  { id: 27, name: 'The Great Gatsby', category: 'Books', price: 12, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 28, name: 'Harry Potter', category: 'Books', price: 15, image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
  { id: 29, name: 'Atomic Habits', category: 'Books', price: 14, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 30, name: 'The Alchemist', category: 'Books', price: 13, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 37, name: 'To Kill a Mockingbird', category: 'Books', price: 16, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 38, name: '1984', category: 'Books', price: 11, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 39, name: 'The Hobbit', category: 'Books', price: 17, image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80', rating: 4.9 },
];

const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

let selectedCategories = new Set();
let minPrice = 0;
let maxPrice = 1000;
let searchTerm = '';
let minRating = 0;

function getCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart') || '{}');
  return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
}

function updateCartCount() {
  const count = getCartCount();
  const cartCount = document.getElementById('cart-count');
  if (cartCount) cartCount.textContent = count > 0 ? count : '';
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart') || '{}');
  cart[productId] = (cart[productId] || 0) + 1;
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function renderCategories() {
  const catBar = document.getElementById('category-bar');
  catBar.innerHTML = '';
  categories.forEach(cat => {
    const div = document.createElement('div');
    div.textContent = cat;
    div.className = 'category-item' + (cat === 'All' ? ' active' : '');
    div.onclick = () => {
      if (cat === 'All') {
        selectedCategories.clear();
      } else {
        selectedCategories.add(cat);
      }
      renderProducts();
      renderCategories();
    };
    catBar.appendChild(div);
  });
}

function renderCategoryCheckboxes() {
  const container = document.getElementById('category-checkboxes');
  container.innerHTML = '';
  categories.slice(1).forEach(cat => { 
    const id = `cat-${cat.replace(/\s+/g, '-')}`;
    const div = document.createElement('div');
    div.className = 'category-checkbox';
    div.innerHTML = `<input type="checkbox" id="${id}" value="${cat}"><label for="${id}">${cat}</label>`;
    container.appendChild(div);
    div.querySelector('input').onchange = function() {
      if (this.checked) selectedCategories.add(cat);
      else selectedCategories.delete(cat);
    };
  });
}

function renderRatingStars() {
  const container = document.getElementById('rating-stars');
  container.innerHTML = '';
  for (let i = 5; i >= 3; i--) {
    const star = document.createElement('span');
    star.className = 'star-filter' + (minRating === i ? ' selected' : '');
    star.innerHTML = '★'.repeat(i) + (i < 5 ? ' & up' : '');
    star.style.cursor = 'pointer';
    star.onclick = function() {
      minRating = (minRating === i) ? 0 : i;
      renderRatingStars();
    };
    container.appendChild(star);
    container.appendChild(document.createElement('br'));
  }
}

function getActiveCategories() {
  return selectedCategories.size ? Array.from(selectedCategories) : categories.slice(1);
}

function renderProducts() {
  const grid = document.getElementById('product-grid');
  let filtered = products.filter(p =>
    getActiveCategories().includes(p.category) &&
    p.price >= minPrice && p.price <= maxPrice &&
    p.rating >= minRating &&
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  grid.innerHTML = '';
  if (filtered.length === 0) {
    grid.innerHTML = '<p>No products found.</p>';
    return;
  }
  filtered.forEach(prod => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" class="product-img">
      <h3 class="product-title">${prod.name}</h3>
      <p>$${prod.price}</p>
      <div class="rating">${'★'.repeat(Math.floor(prod.rating))}${prod.rating % 1 ? '½' : ''}</div>
      <button class="add-to-cart-btn">Add to Cart</button>
    `;
    card.querySelector('.product-img').onclick = () => {
      window.location.href = `product.html?id=${prod.id}`;
    };
    card.querySelector('.product-title').onclick = () => {
      window.location.href = `product.html?id=${prod.id}`;
    };
    card.querySelector('.add-to-cart-btn').onclick = (e) => {
      e.stopPropagation();
      addToCart(prod.id);
      card.querySelector('.add-to-cart-btn').textContent = 'Added!';
      setTimeout(() => {
        card.querySelector('.add-to-cart-btn').textContent = 'Add to Cart';
      }, 1000);
    };
    grid.appendChild(card);
  });
}

document.getElementById('apply-filters').onclick = function() {
  minPrice = parseInt(document.getElementById('price-min').value) || 0;
  maxPrice = parseInt(document.getElementById('price-max').value) || 1000;
  searchTerm = document.getElementById('search-term').value || '';
  renderProducts();
};
document.getElementById('reset-filters').onclick = function() {
  document.getElementById('search-term').value = '';
  document.getElementById('price-min').value = 0;
  document.getElementById('price-max').value = 1000;
  selectedCategories.clear();
  minRating = 0;
  renderCategoryCheckboxes();
  renderRatingStars();
  renderProducts();
};
document.getElementById('search-term').oninput = function() {
  searchTerm = this.value;
  renderProducts();
};

renderCategoryCheckboxes();
renderRatingStars();
renderCategories();
renderProducts();
updateCartCount(); 