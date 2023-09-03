const buttons = document.querySelectorAll('.button');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', (e) => {
    const color = e.target.id;

    if (color === 'grey') {
      document.body.style.backgroundColor = color;
    }
    if (color === 'white') {
      document.body.style.backgroundColor = color;
    }
    if (color === 'blue') {
      document.body.style.backgroundColor = color;
    }
    if (color === 'yellow') {
      document.body.style.backgroundColor = color;
    }
  });
}