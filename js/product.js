
const products = [
  
  { id: 1, name: 'Smartphone', category: 'Electronics', price: 499, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', rating: 4.5, description: 'A high-quality smartphone with a great camera and long battery life.' },
  { id: 2, name: 'Laptop', category: 'Electronics', price: 899, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', rating: 4.7, description: 'A powerful laptop for work and play, with a sleek design.' },
  { id: 3, name: 'Headphones', category: 'Electronics', price: 120, image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80', rating: 4.3, description: 'Noise-cancelling headphones.' },
  { id: 9, name: 'Bluetooth Speaker', category: 'Electronics', price: 60, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', rating: 4.4, description: 'Portable Bluetooth speaker.' },
  { id: 13, name: 'Tablet', category: 'Electronics', price: 350, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', rating: 4.3, description: 'Lightweight tablet for work and play.' },
  { id: 16, name: 'Fitness Tracker', category: 'Electronics', price: 99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', rating: 4.2, description: 'Track your fitness goals.' },

  { id: 4, name: 'T-Shirt', category: 'Clothing', price: 25, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', rating: 4.0, description: 'Comfortable cotton t-shirt, perfect for everyday wear.' },
  { id: 5, name: 'Jeans', category: 'Clothing', price: 50, image: 'https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80', rating: 4.2, description: 'Classic blue jeans with a modern fit.' },
  { id: 6, name: 'Dress', category: 'Clothing', price: 80, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', rating: 4.6, description: 'Elegant evening dress.' },
  { id: 10, name: 'Sneakers', category: 'Clothing', price: 90, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', rating: 4.5, description: 'Comfortable sneakers for daily use.' },
  { id: 14, name: 'Jacket', category: 'Clothing', price: 120, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', rating: 4.4, description: 'Warm and stylish jacket.' },
  { id: 18, name: 'Formal Shirt', category: 'Clothing', price: 45, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80', rating: 4.3, description: 'Perfect for office or formal events.' },

  { id: 7, name: 'Watch', category: 'Accessories', price: 150, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', rating: 4.8, description: 'Elegant wrist watch with leather strap.' },
  { id: 8, name: 'Backpack', category: 'Accessories', price: 70, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', rating: 4.1, description: 'Durable and spacious backpack.' },
  { id: 11, name: 'Sunglasses', category: 'Accessories', price: 60, image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80', rating: 4.2, description: 'Stylish sunglasses.' },
  { id: 12, name: 'Handbag', category: 'Accessories', price: 110, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', rating: 4.6, description: 'Elegant handbag for all occasions.' },
  { id: 15, name: 'Wallet', category: 'Accessories', price: 40, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', rating: 4.1, description: 'Leather wallet.' },
  { id: 17, name: 'Scarf', category: 'Accessories', price: 30, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', rating: 4.0, description: 'Warm and cozy scarf.' },

  { id: 19, name: 'Table Lamp', category: 'Home and Garden', price: 35, image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', rating: 4.4, description: 'Modern table lamp.' },
  { id: 20, name: 'Indoor Plant', category: 'Home and Garden', price: 22, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', rating: 4.7, description: 'Fresh indoor plant.' },
  { id: 21, name: 'Cushion Set', category: 'Home and Garden', price: 40, image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=400&q=80', rating: 4.3, description: 'Comfortable cushion set.' },
  { id: 22, name: 'Wall Clock', category: 'Home and Garden', price: 28, image: 'https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80', rating: 4.2, description: 'Classic wall clock.' },
  { id: 31, name: 'Floor Rug', category: 'Home and Garden', price: 55, image: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=400&q=80', rating: 4.5, description: 'Soft floor rug.' },
  { id: 32, name: 'Wall Art', category: 'Home and Garden', price: 65, image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', rating: 4.6, description: 'Beautiful wall art.' },
  { id: 33, name: 'Coffee Table', category: 'Home and Garden', price: 120, image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&q=80', rating: 4.7, description: 'Modern coffee table.' },

  { id: 23, name: 'Teddy Bear', category: 'Toys', price: 18, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', rating: 4.8, description: 'Soft teddy bear.' },
  { id: 24, name: 'Building Blocks', category: 'Toys', price: 30, image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80', rating: 4.6, description: 'Colorful building blocks.' },
  { id: 25, name: 'Toy Car', category: 'Toys', price: 15, image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80', rating: 4.5, description: 'Fast toy car.' },
  { id: 26, name: 'Puzzle Game', category: 'Toys', price: 20, image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80', rating: 4.3, description: 'Challenging puzzle game.' },
  { id: 34, name: 'Action Figure', category: 'Toys', price: 22, image: 'https://images.unsplash.com/photo-1511452885600-a2f0bdf965c0?auto=format&fit=crop&w=400&q=80', rating: 4.4, description: 'Cool action figure.' },
  { id: 35, name: 'Remote Control Drone', category: 'Toys', price: 85, image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80', rating: 4.7, description: 'Fun remote control drone.' },
  { id: 36, name: 'Board Game', category: 'Toys', price: 35, image: 'https://images.unsplash.com/photo-1511452885600-a2f0bdf965c0?auto=format&fit=crop&w=400&q=80', rating: 4.5, description: 'Entertaining board game.' },

  { id: 27, name: 'The Great Gatsby', category: 'Books', price: 12, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80', rating: 4.7, description: 'Classic novel by F. Scott Fitzgerald.' },
  { id: 28, name: 'Harry Potter', category: 'Books', price: 15, image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80', rating: 4.9, description: 'Magical adventure by J.K. Rowling.' },
  { id: 29, name: 'Atomic Habits', category: 'Books', price: 14, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', rating: 4.8, description: 'Self-improvement book by James Clear.' },
  { id: 30, name: 'The Alchemist', category: 'Books', price: 13, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80', rating: 4.6, description: 'Inspirational novel by Paulo Coelho.' },
  { id: 37, name: 'To Kill a Mockingbird', category: 'Books', price: 16, image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80', rating: 4.8, description: 'Classic novel by Harper Lee.' },
  { id: 38, name: '1984', category: 'Books', price: 11, image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80', rating: 4.7, description: 'Dystopian novel by George Orwell.' },
  { id: 39, name: 'The Hobbit', category: 'Books', price: 17, image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?auto=format&fit=crop&w=400&q=80', rating: 4.9, description: 'Fantasy novel by J.R.R. Tolkien.' },
];

let userReviews = [];

const sampleReviews = [
  { user: 'Alice', rating: 5, text: 'Excellent product! Highly recommend.' },
  { user: 'Bob', rating: 4, text: 'Very good, but could be improved.' },
  { user: 'Charlie', rating: 5, text: 'Loved it! Worth every penny.' }
];

function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'));
}

function renderProductDetails() {
  const productId = getProductIdFromUrl();
  const product = products.find(p => p.id === productId);
  const details = document.getElementById('product-details');
  if (!product) {
    details.innerHTML = '<p>Product not found.</p>';
    return;
  }
  details.innerHTML = `
    <div class="product-details-card">
      <div class="product-details-img-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-details-img">
      </div>
      <div class="product-details-info">
        <h2 class="product-details-title">${product.name}</h2>
        <div class="product-details-rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '½' : ''} <span>(${product.rating})</span></div>
        <div class="product-details-price">$${product.price}</div>
        <div class="product-details-desc">${product.description || 'No description available.'}</div>
        <div class="product-details-btns">
          <button id="add-to-cart">Add to Cart</button>
          <button id="buy-now" class="buy-now-btn">Buy Now</button>
        </div>
      </div>
    </div>
    <div class="product-reviews-section">
      <h3>Customer Reviews</h3>
      <div id="reviews-list"></div>
      <form id="review-form" class="review-form">
        <h4>Write a review</h4>
        <input type="text" id="review-user" placeholder="Your name" required maxlength="20">
        <div class="review-form-rating">
          <span>Rating:</span>
          <span id="review-stars-select"></span>
        </div>
        <textarea id="review-text" placeholder="Your review" required maxlength="200"></textarea>
        <button type="submit">Submit Review</button>
      </form>
    </div>
    <div class="related-products-section">
      <h3>Related Products</h3>
      <div id="related-products"></div>
    </div>
  `;
  document.getElementById('add-to-cart').onclick = function() {
    addToCart(product.id);
    alert('Added to cart!');
  };
  document.getElementById('buy-now').onclick = function() {
    addToCart(product.id);
    window.location.href = 'cart.html';
  };
  renderReviews();
  renderReviewForm();
  renderRelatedProducts(product);
}

function renderReviews() {
  const reviewsDiv = document.getElementById('reviews-list');
  const allReviews = [...sampleReviews, ...userReviews];
  if (allReviews.length === 0) {
    reviewsDiv.innerHTML = '<p>No reviews yet.</p>';
    return;
  }
  reviewsDiv.innerHTML = allReviews.map(r => `<div class="review"><b>${r.user}</b> <span class="review-stars">${'★'.repeat(r.rating)}</span><div>${r.text}</div></div>`).join('');
}

function renderReviewForm() {
  const starsDiv = document.getElementById('review-stars-select');
  let selected = 5;
  function updateStars() {
    starsDiv.innerHTML = '';
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement('span');
      star.textContent = '★';
      star.className = 'review-star-select' + (i <= selected ? ' selected' : '');
      star.onclick = () => { selected = i; updateStars(); };
      starsDiv.appendChild(star);
    }
  }
  updateStars();
  document.getElementById('review-form').onsubmit = function(e) {
    e.preventDefault();
    const user = document.getElementById('review-user').value.trim() || 'Anonymous';
    const text = document.getElementById('review-text').value.trim();
    if (!text) return;
    userReviews.unshift({ user, rating: selected, text });
    renderReviews();
    this.reset();
    selected = 5;
    updateStars();
  };
}

function renderRelatedProducts(product) {
  const relatedDiv = document.getElementById('related-products');
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 6);
  relatedDiv.innerHTML = related.map(prod => `
    <div class="related-product-card" onclick="window.location.href='product.html?id=${prod.id}'">
      <img src="${prod.image}" alt="${prod.name}">
      <div class="related-product-title">${prod.name}</div>
      <div class="related-product-price">$${prod.price}</div>
    </div>
  `).join('');
}

function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart') || '{}');
  cart[productId] = (cart[productId] || 0) + 1;
  localStorage.setItem('cart', JSON.stringify(cart));
}

renderProductDetails(); 