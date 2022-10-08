let chrono = document.getElementById("chrono"),
    resetBtn = document.getElementById("reset"),
    stopBtn = document.getElementById("stop"),
    startBtn = document.getElementById("start"),
    heures = 0,
    minutes = 0,
    secondes = 0,
    millisecondes = 0,
    jours = 0,
    timeout,
    estArrete = true;

function demarrer() {
    if (estArrete) {
        estArrete = false;
        defilerTemps();
    }
};

function arreter() {
    if (!estArrete) {
        estArrete = true;
        clearTimeout(timeout);
    }
};

function reset() {
    document.getElementById('hour').innerHTML = "00";
    document.getElementById('minute').innerHTML = "00";
    document.getElementById('second').innerHTML = "00";
    document.getElementById('milliSec').innerHTML = "00";
    estArrete = true;
    heures = 0;
    minutes = 0;
    secondes = 0;
    clearTimeout(timeout);
};

function defilerTemps() {
    //if (estArrete) return;

    millisecondes = parseInt(millisecondes);
    secondes = parseInt(secondes);
    minutes = parseInt(minutes);
    heures = parseInt(heures);
    jours = parseInt(jours);
    function defilerMilliSec() {
        for (let i = 0; i < 100; i++) {
            millisecondes = i;
        }
    }
    defilerMilliSec();
    if (millisecondes == 99) {
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
    if (heures == 24) {
        jours++;
        heures = 0;
    }

    //   affichage
    if (millisecondes < 10) {
        millisecondes = "00" + millisecondes;
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
    if (jours < 10) {
        jours = "0" + jours;
    }

    document.getElementById('hour').innerHTML = jours;
    document.getElementById('minute').innerHTML = heures;
    document.getElementById('second').innerHTML = minutes;
    document.getElementById('milliSec').innerHTML = secondes;

    timeout = setTimeout(defilerTemps, 10);
};


startBtn.addEventListener("click", demarrer);
stopBtn.addEventListener("click", arreter);
resetBtn.addEventListener("click", reset);