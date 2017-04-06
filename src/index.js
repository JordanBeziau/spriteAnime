document.addEventListener('DOMContentLoaded', () => {

  // Ciblage
  const ken = document.getElementById('ken');

  // Déclaration
  let posX = 100;
  let touche = [];

  // Key down
  document.addEventListener('keydown', (event) => {
    touche[event.keyCode] = true;
  });

  // Key up
  document.addEventListener('keyup', (event) => {
    touche[event.keyCode] = false;
  });

  // Move loop
  function moveLoop () {
    // Touche gauche
    if (touche[37]) {
      ken.style.transform = 'scaleX(1)';
      if (posX > 0) { posX -= 5; }
      ken.style.left = `${posX}px`;
    }
    // Touche droite
    if (touche[39]) {
      ken.style.transform = 'scaleX(-1)';
      posX += 5;
      ken.style.left = `${posX}px`;
    }
    setTimeout(moveLoop, 15);
  }

  moveLoop();

});
