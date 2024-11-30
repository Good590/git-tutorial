import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";

// 有一系列产品，故使用array
// 每个产品有很多属性，故使用object
let productsHTML = '';

/* -------------------step2 Generate the HTML------------------------*/

products.forEach((product) => {
  // 累加器模式的运用
  productsHTML += `
    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart
      " data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
// 添加了一个 data- 属性，便于点击时分清是哪个按钮被点
});



// 将生成的html展示在页面上
document.querySelector('.js-products-grid').innerHTML = productsHTML;

/* -------------------step3 Make it interactive------------------------*/


// 将函数化为更小的函数增加代码可读性
// 该函数用于更新页面，故不用放入cart.js
function updateCartQuantity() {
  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  // 修改购物车实际数量为计算后结果
  document.querySelector('.js-cart-quantity')
    .innerHTML = cartQuantity;

  // console.log(cartQuantity);
  // console.log(cart);
}

// 不加All属性只会选择相同类名的第一个元素
document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    button.addEventListener('click', () => {
      // 获取data属性
      const productId = button.dataset.productId;
      addToCart(productId);
      updateCartQuantity();
    });
  });