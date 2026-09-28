// Small Minecraft-style UI feedback without adding dependencies.
document.querySelectorAll('.mc-button').forEach(button => {
  button.addEventListener('click', () => {
    button.animate(
      [{transform:'translate(0,0)'},{transform:'translate(2px,2px)'},{transform:'translate(0,0)'}],
      {duration:120,easing:'steps(2,end)'}
    );
  });
});
