const timer = setInterval(function () {
  //   Code
  const dateActuelle = new Date();
  const dateFinAnnee = new Date("Jan 1 00:00:00 2025");

  const timer = document.getElementById("timer");

  const tempsRestant = new Date((dateFinAnnee - dateActuelle));

  if(tempsRestant > 0){
    const jours = tempsRestant.getUTCDate() - 1; // Soustraire 1 pour obtenir le nombre de jours correct
    const mois = tempsRestant.getUTCMonth();
    const annees = tempsRestant.getUTCFullYear() - 1970; // Soustraire 1970 pour obtenir le nombre d'années correct
    const heures = tempsRestant.getUTCHours();
    const minutes = tempsRestant.getUTCMinutes();
    const secondes = tempsRestant.getUTCSeconds();

    timer.innerHTML = "";
    timer.innerHTML += `${annees}a ${mois}m ${jours}j ${heures}h ${minutes}min ${secondes}sec`;
  } else{
    timer.innerHTML = "";
    timer.innerHTML = "Bonne année";
  }
}, 1000);