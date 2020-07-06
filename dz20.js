/**
 * Отфильтруйте массивы используя цикл for и метод push
 */
// A.
// В массиве evenNumbers должны быть только четные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 100, 151];
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) evenNumbers.push(numbers[i]);
} 
// [ 2, 4, 6, 8, 100 ]
console.log(evenNumbers);
// Б.
// В новом массиве wordsWithO должны быть только слова, в которых есть буква 'o'
// используйте метод строки - includes для поиска 'o'
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
const words = ['grocery', 'sister', 'dirt', 'history', 'opinion', 'payment',
  'movie', 'drawing', 'area', 'hair', 'selection', 'coffee'];
const wordsWithO = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].includes('o')) wordsWithO.push(words[i]);
}
// ['grocery', 'history', 'opinion', 'movie', 'selection', 'coffee']
console.log(wordsWithO);
// В.
/**
 * Читаем про метод массива .filter
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 *
 * Повторяем предыдущие задания используя .filter
 */
 // [ 2, 4, 6, 8, 100 ]
console.log(numbers.filter(num => num % 2 === 0));
// ['grocery', 'history', 'opinion', 'movie', 'selection', 'coffee']
console.log(words.filter(word => word.includes('o')));