function filterPares(arr) {
  return arr.filter(callback);
}

function callback(item) {
  return item % 2 !== 0; //Filtrar números pares, para filtrar número impares usari o sínal "" !== "

}

const meuArray = [1, 23, 55, 67, 30, 2, 4];

console.log(filterPares(meuArray));