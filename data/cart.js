export let cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 1
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 2
}];

// 将函数化为更小的函数增加代码可读性
// 用于将某个产品添加到购物车的函数
export function addToCart(productId) {
  let matchingItem;

  // 如果某个产品已经在购物车存在
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    // 加入购物车
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
}

// 用于从购物车删除产品的函数
export function removeFromCart(productId) {
  // 1.创建一个新数组
  const newCart = [];

  // 2.循环遍历购物车cart
  cart.forEach((cartItem) => {
    // 如果不等于要删除的id就加入新数组
    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  // 更新购物车
  cart = newCart;
}