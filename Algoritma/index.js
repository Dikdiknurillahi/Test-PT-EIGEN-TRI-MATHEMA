function reverseString(str) {
  const findNumber = str.match(/^([A-Z]+)(\d)$/);
  const reverse = findNumber[1].split('').reverse().join('');
  const final = reverse + findNumber[2];
  console.log(final);
}

function longest(paragraf) {
  const test = paragraf.split(' ');
  let longest = 0;
  let text = '';
  for (const index of test){
    const slice = index.split('').length;
    if (slice > longest) {
      longest = slice;
      text = index;
    }
  }
  console.log(text+ ': ' + longest);
}

function inputQuery(inputs, querys) {
  const arr = [];
  for (const query of querys) {
    const result = inputs.filter(input => query === input);
    arr.push(result.length);
  }
  console.log(arr);
}

function sumMatrix(matrix) {
  let sumMatrikA = 0
  let sumMatrikB = 0
  const arrA = [];
  const arrB = [];
  for (let i = 0; i < matrix.length; i++){
    sumMatrikA += matrix[i][i];
    arrA.push(matrix[i][i]);
    sumMatrikB += matrix[i][matrix.length - 1 - i];
    arrB.push(matrix[i][matrix.length - 1 - i]);
  }
  const joinA = arrA.join(' + ');
  const joinB = arrB.join(' + ');
  const result = sumMatrikA - sumMatrikB;
  console.log('Diagonal Pertama: '+ joinA + ' = ' + sumMatrikA);
  console.log('Diagonal Kedua: ' + joinB + ' = ' + sumMatrikB);
  console.log('Maka hasilnya adalah ' + sumMatrikA + ' + ' + sumMatrikB + ' = ' + result);
}

console.log('1. Reverse Huruf');
const str = 'NEGIE1';
reverseString(str);
console.log('\n');

console.log('2. mecari kata terpanjang');
const sentence = "Saya sangat senang mengerjakan soal algoritma";
longest(sentence);
console.log('\n');

console.log('3. mencari berapa kali input ada di dalam query');
const input = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
inputQuery(input, query);
console.log('\n');

console.log('4. hasil pengurangan dari jumlah diagonal matrik');
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9]
]
sumMatrix(matrix);