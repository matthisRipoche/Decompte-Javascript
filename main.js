const timer = setInterval(function () {
  //   Code
  const dateActuelle = new Date();
  const dateFinAnnee = new Date("Jan 1 00:00:00 2025");

  const timer = document.getElementById("timer");

  const tempsRestant = new Date((dateFinAnnee - dateActuelle) / 1000);

  console.log(dateActuelle);
  console.log(tempsRestant);

  if(tempsRestant > 0){
    timer.innerHTML = "";
    timer.innerHTML += tempsRestant;
  }
}, 1000);
