document.addEventListener('DOMContentLoaded', () => {

  // Fonction créer heures du cadran
  const createCadran = () => {
    const cadran = document.getElementById('cadran');
    let tempNode;
    // Boucle
    for (let i = 1; i <= 12; i++) {
      // Calcul des degrès
      const deg = 30 * i;
      // Initialisation de la div
      tempNode = document.createElement('div');
      tempNode.className = 'heuresCadran';
      tempNode.innerHTML = `${i}<br>|`;
      tempNode.style.transform = `rotate(${deg}deg)`;
      // Intégration de la div
      cadran.appendChild(tempNode);
    }
  };

  // Fonction formatage heure
  const formatHeure = (nombre) => nombre < 10 ? `0${nombre}` : nombre;

  // Fonction affichage de l'heure
  const horloge = () => {
    // ciblage
    const divHorloge = document.getElementById('affichage'),
          aiguilleHeu = document.getElementById('aiguilleHeu');
    // Initialisation de la date
    const maDate = new Date();
    // Récupération des infos
    let annee = maDate.getFullYear(),
        mois = maDate.getMonth(),
        jour = maDate.getDate(),
        heures = maDate.getHours(),
        minutes = maDate.getMinutes(),
        secondes = maDate.getSeconds();
    // Formatage de l'heure
    heures = formatHeure(heures);
    minutes = formatHeure(minutes);
    secondes = formatHeure(secondes);
    // Affichage
    divHorloge.innerHTML = `${heures} : ${minutes} : ${secondes}`;
    // Position des aiguilles
    aiguilleHeu.style.transform = `rotate(${30 * heures}deg)`;
  }

  createCadran();
  setInterval(horloge, 1000);
});
