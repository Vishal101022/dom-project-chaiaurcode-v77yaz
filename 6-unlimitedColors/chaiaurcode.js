let intervalId; // To store the interval ID
const btn_start = document.querySelector('#start');
const btn_stop = document.querySelector('#stop');

btn_start.addEventListener('click', startBackgroundColorChange);
btn_stop.addEventListener('click', stopBackgroundColorChange);

function startBackgroundColorChange() {
  btn_start.disabled = true;
  btn_stop.disabled = false;

  // Start changing the background color every second
  intervalId = setInterval(changeBackgroundColor, 1000);
}

function stopBackgroundColorChange() {
  btn_start.disabled = false;
  btn_stop.disabled = true;

  // Stop changing the background color
  clearInterval(intervalId);
}
function randomColors(number) {
  return Math.floor(Math.random() * (number + 1));
}

function changeBackgroundColor() {
  // Generate a random color and set it as the background color
  const randomColor = `rgb(${randomColors(255)}, ${randomColors(
    255
  )}, ${randomColors(255)})`;
  document.body.style.backgroundColor = randomColor;
}
