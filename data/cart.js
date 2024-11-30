export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
},{
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

// 将函数化为更小的函数增加代码可读性
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