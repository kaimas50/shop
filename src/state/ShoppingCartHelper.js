export function getTotalPrice(items, itemAmounts) {
  const ids = Object.keys(itemAmounts);
  const total = ids.reduce((acc, id) => {
    const price = toFloat(items.find(i => i.id === id).price);
    const amount = itemAmounts[id];
    return acc + (price * amount);
  }, 0);
  return total.toFixed(2);
}

function toFloat(str) {
  return parseFloat(str);
}
