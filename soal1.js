const prompt = require('prompt-sync')();
const input = prompt('Masukkan bilangan genap (x):');
const x = parseInt(input);

if (x >= 0 && x % 2 === 0) {
  const akarPangkat2 = Math.sqrt(x);
  console.log(`Akar pangkat 2 dari ${x} adalah ${akarPangkat2}`);
} else if (x < 0) {
  console.log('Tidak bisa input bilangan negatif');
} else {
  console.log('Tidak bisa input bilangan ganjil');
}
