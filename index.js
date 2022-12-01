document.onmousemove = (event) => {
  document.body.style.setProperty('--x', `${event.clientX}px`);
  document.body.style.setProperty('--y', `${event.clientY}px`);
}

document.ontouchmove = (event) => {
  document.body.style.setProperty('--x', `${event.touches[0].clientX}px`);
  document.body.style.setProperty('--y', `${event.touches[0].clientY}px`);
}