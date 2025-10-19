
const products = [
  { id: 1, name: 'Smartphone', category: 'Electronics', price: 499, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 2, name: 'Laptop', category: 'Electronics', price: 899, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', rating: 4.7 },
  { id: 3, name: 'Headphones', category: 'Electronics', price: 120, image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80', rating: 4.3 },
  { id: 9, name: 'Bluetooth Speaker', category: 'Electronics', price: 60, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
  { id: 13, name: 'Tablet', category: 'Electronics', price: 350, image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80', rating: 4.3 },
  { id: 16, name: 'Fitness Tracker', category: 'Electronics', price: 99, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', rating: 4.2 },

  { id: 4, name: 'T-Shirt', category: 'Clothing', price: 25, image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80', rating: 4.0 },
  { id: 5, name: 'Jeans', category: 'Clothing', price: 50, image: 'https://images.unsplash.com/photo-1514995669114-d1c1b7a83a48?auto=format&fit=crop&w=400&q=80', rating: 4.2 },
  { id: 6, name: 'Dress', category: 'Clothing', price: 80, image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80', rating: 4.6 },
  { id: 10, name: 'Sneakers', category: 'Clothing', price: 90, image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80', rating: 4.5 },
  { id: 14, name: 'Jacket', category: 'Clothing', price: 120, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80', rating: 4.4 },
  { id: 18, name: 'Formal Shirt', category: 'Clothing', price: 45, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80', rating: 4.3 },

  { id: 7, name: 'Watch', category: 'Accessories', price: 150, image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80', rating: 4.8 },
  { id: 8, name: 'Backpack', category: 'Accessories', price: 70, image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80', rating: 4.1 },
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

function loadCart() {
  return JSON.parse(localStorage.getItem('cart') || '{}');
}

function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function renderCart() {
  const cart = loadCart();
  const cartItemsDiv = document.getElementById('cart-items');
  const cartTotalDiv = document.getElementById('cart-total');
  cartItemsDiv.innerHTML = '';
  let total = 0;
  const itemIds = Object.keys(cart);
  if (itemIds.length === 0) {
    cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    cartTotalDiv.innerHTML = '';
    return;
  }
  const table = document.createElement('table');
  table.style.width = '100%';
  table.innerHTML = `
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Subtotal</th>
      <th></th>
    </tr>
  `;
  itemIds.forEach(id => {
    const product = products.find(p => p.id == id);
    if (!product) return;
    const qty = cart[id];
    const subtotal = product.price * qty;
    total += subtotal;
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${product.image}" alt="${product.name}" style="width:40px;height:40px;vertical-align:middle;"> ${product.name}</td>
      <td>$${product.price}</td>
      <td>
        <button class="button" onclick="updateQty(${product.id}, -1)">-</button>
        <span style="margin:0 8px;">${qty}</span>
        <button class="button" onclick="updateQty(${product.id}, 1)">+</button>
      </td>
      <td>$${subtotal}</td>
      <td><button class="button" onclick="removeItem(${product.id})">Remove</button></td>
    `;
    table.appendChild(row);
  });
  cartItemsDiv.appendChild(table);
  cartTotalDiv.innerHTML = `<h3>Total: $${total}</h3>`;
}

window.updateQty = function(productId, change) {
  const cart = loadCart();
  if (!cart[productId]) return;
  cart[productId] += change;
  if (cart[productId] <= 0) delete cart[productId];
  saveCart(cart);
  renderCart();
};

window.removeItem = function(productId) {
  const cart = loadCart();
  delete cart[productId];
  saveCart(cart);
  renderCart();
};

renderCart(); 