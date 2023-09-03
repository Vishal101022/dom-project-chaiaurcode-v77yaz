const form = document.querySelector('form');
const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const result = document.querySelector('#results');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const h = Math.pow(parseInt(height.value) / 100, 2).toFixed(2);
  const w = parseInt(weight.value);
  // BMI formula weight / (height) m2
  const finalResult = w / h;
  // printing result
  result.innerHTML = finalResult.toFixed(1);
});