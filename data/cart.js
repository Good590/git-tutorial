export const cart = [];

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