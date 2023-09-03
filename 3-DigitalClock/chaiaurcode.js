const clock = document.getElementById('clock');

setInterval(() => {
  let date = new Date();
 // let time = {
 //   h: date.getHours(),
 //   m: date.getMinutes(),
 //   s: date.getSeconds(),
 // };
  clock.innerHTML = date.toLocaleTimeString();
}, '1000');
