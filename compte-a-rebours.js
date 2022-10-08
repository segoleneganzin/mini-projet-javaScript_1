let decompte;
let is_fini = false;
let is_reset = false;
stopCompteur.addEventListener("click", function () {
    arrete(is_fini);
});
function arrete(my_boolean) {
    if (!my_boolean) {
        clearInterval(decompte);
        return;
    }
}
resetCompteur.addEventListener("click", function () {
    reset(is_reset);
});
function reset(my_boolean) {
    if (!my_boolean) {
        document.getElementById("minutes").value = 00;
        document.getElementById("secondes").value = 00;
        document.getElementById("milli-secondes").value = 00;
        document.getElementById("compteur").innerHTML = null;
        return;
    }
}

goCompteur.addEventListener("click", function compteur(element) {
    console.log(document.getElementById("minutes").value);
    console.log(document.getElementById("secondes").value);

    decompte = setInterval(function diminuerTemps() {
        let minutes = parseInt(document.getElementById("minutes").value, 10),
            secondes = parseInt(document.getElementById("secondes").value % 60, 10),
            milliSecondes = parseInt(document.getElementById("milli-secondes").value, 10);
        document.getElementById("minutes").innerHTML = minutes;
        document.getElementById("secondes").innerHTML = secondes;
        document.getElementById("milli-secondes").innerHTML = milliSecondes;
        if (milliSecondes == 0) {
            if (secondes == 0) {
                if (minutes == 0) {
                    console.log("coucou1");
                    document.getElementById("compteur").innerHTML =
                        "Compte à rebours terminé";
                    //alert('compte à rebours terminé');
                    clearInterval(decompte);
                    return;
                } else if (minutes > 0) {
                    console.log("coucou2");
                    document.getElementById("minutes").value -= 1;
                    document.getElementById("secondes").value = 59;
                }
            } else if (secondes > 0) {
                console.log("coucou3");
                document.getElementById("secondes").value -= 1;
                document.getElementById("milli-secondes").value = 99;
            }
        } else {
            console.log("coucou4");
            document.getElementById("milli-secondes").value -= 1;
        }
        function pad(valeur) {
            let valString = valeur + "";
            if (valString.length < 2) {
                return "0" + valString;
            } else {
                return valString;
            }
        }
    }, 10);
});


