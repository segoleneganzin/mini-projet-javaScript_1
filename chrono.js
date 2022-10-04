let chrono = document.getElementById("chrono"),
    resetBtn = document.getElementById("reset"),
    stopBtn = document.getElementById("stop"),
    startBtn = document.getElementById("start"),
    heures = 0,
    minutes = 0,
    secondes = 0,
    millisecondes = 0,
    timeout,
    estArrete = true;

function demarrer () {
  if (estArrete) {
    estArrete = false;
    defilerTemps();
  }
};

function arreter () {
  if (!estArrete) {
    estArrete = true;
    clearTimeout(timeout);
  }
};

function reset() {
    chrono.textContent = "00:00:00";
    estArrete = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    clearTimeout(timeout);
  };

function defilerTemps () {
  if (estArrete) return;

  millisecondes = parseInt(millisecondes);
  secondes = parseInt(secondes);
  minutes = parseInt(minutes);
  heures = parseInt(heures);

  millisecondes++;

  if (millisecondes == 100){
    secondes++;
    millisecondes = 0;
  }


  if (secondes == 60) {
    minutes++;
    secondes = 0;
  }

  if (minutes == 60) {
    heures++;
    minutes = 0;
  }

  //   affichage
  if (millisecondes < 10) {
    millisecondes = "00" + millisecondes;
    }else if (millisecondes < 100) {
        millisecondes = "0" + millisecondes;
    }
  if (secondes < 10) {
    secondes = "0" + secondes;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (heures < 10) {
    heures = "0" + heures;
  }

  chrono.textContent = `${heures}:${minutes}:${secondes}:${millisecondes}`;

  timeout = setTimeout(defilerTemps, 10);
};


startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);