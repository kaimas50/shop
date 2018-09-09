export function getTotalPrice(items, itemAmounts) {
  const ids = Object.keys(itemAmounts);
  const total = ids.reduce((acc, id) => {
    const item = items.find(i => i.id === id);
    if (!item) return acc;
    const price = toFloat(item.price);
    const amount = itemAmounts[id];
    return acc + (price * amount);
  }, 0);
  return total.toFixed(2);
}

function toFloat(str) {
  return parseFloat(str);
}
