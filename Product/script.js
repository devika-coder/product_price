// Array to store products
let products = [];

function addProduct() {
  const sellingPrice = document.getElementById('sellingPrice').value;
  const productName = document.getElementById('productName').value;
  const category = document.getElementById('category').value;

  const product = {
    sellingPrice,
    productName,
    category
  };

  products.push(product);
  displayProducts();
}

function deleteProduct(index, sectionId) {
  products.splice(index, 1);
  displayProducts();
}

function displayProducts() {
  const electronicsSection = document.getElementById('electronicsSection');
  const foodSection = document.getElementById('foodSection');
  const skincareSection = document.getElementById('skincareSection');

  electronicsSection.innerHTML = '<h2>Electronic Items</h2>';
  foodSection.innerHTML = '<h2>Food Items</h2>';
  skincareSection.innerHTML = '<h2>Skin Care Items</h2>';

  products.forEach((product, index) => {
    const { sellingPrice, productName, category } = product;
    const productItem = document.createElement('div');
    productItem.classList.add('product-item');
    productItem.innerHTML = `
      <span>${productName} - $${sellingPrice}</span>
      <button class="delete-btn" onclick="deleteProduct(${index}, '${category.toLowerCase()}Section')">Delete</button>
    `;

    switch (category) {
      case 'Electronics':
        electronicsSection.appendChild(productItem);
        break;
      case 'Food':
        foodSection.appendChild(productItem);
        break;
      case 'Skincare':
        skincareSection.appendChild(productItem);
        break;
      default:
        break;
    }
  });
}
