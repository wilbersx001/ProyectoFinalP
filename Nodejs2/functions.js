function busquedaBinaria(arr, busqueda) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === busqueda) return mid;

    if (arr[mid] < busqueda) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const bubbleSort = (arr) => {
  const l = arr.length;
  for (let i = 0; i < l; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

module.exports = {
  bubbleSort: bubbleSort,
  busquedaBinaria: busquedaBinaria
}