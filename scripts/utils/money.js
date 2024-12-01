export function formatCurrency(priceCents) {
  return (Math.round(priceCents) / 100).toFixed(2);
}

// 每个文件只能有一个默认导出
export default formatCurrency;