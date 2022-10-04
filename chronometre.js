<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />

    <title>Chronomètre</title>
  </head>
  <body>
    <div>
      <div id="chrono">00:00:00:00</div>
      <div id="buttons">
        <button id="reset" class="button">Reset</button>
        <button id="stop" class="button">Arrêter</button>
        <button id="start" class="button">Démarrer</button>
      </div>
    </div>
  
<script>

let chrono = document.getElementById("chrono");
let resetBtn = document.getElementById("reset");
let stopBtn = document.getElementById("stop");
let startBtn = document.getElementById("start");

let heures = 0;
let minutes = 0;
let secondes = 0;
let millisecondes = 0;

let timeout;

let estArrete = true;

const demarrer = () => {
  if (estArrete) {
    estArrete = false;
    defilerTemps();
  }
};

const arreter = () => {
  if (!estArrete) {
    estArrete = true;
    clearTimeout(timeout);
  }
};

const defilerTemps = () => {
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

const reset = () => {
  chrono.textContent = "00:00:00";
  estArrete = true;
  heures = 0;
  minutes = 0;
  secondes = 0;
  clearTimeout(timeout);
};

startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);

</script>
</body>
</html>