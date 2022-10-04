let decompte;

go.addEventListener('click', function compteur(element) {
    console.log(document.getElementById('minutes').value);
    console.log(document.getElementById('secondes').value);

    decompte = setInterval(function diminuerTemps () {
        let minutes = parseInt(document.getElementById("minutes").value/60, 10),
            secondes = parseInt(document.getElementById("secondes").value % 60, 10),
            milliSecondes = parseInt(document.getElementById("milli-secondes").value);
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('secondes').innerHTML = secondes;
        if (document.getElementById('secondes').value == 0) {
            if (document.getElementById('minutes').value == 0) {
                document.getElementById('compteur').innerHTML = "Compte à rebours terminé";
                //alert('compte à rebours terminé');
                clearInterval(decompte);
                return;
            } else if (document.getElementById('minutes').value > 0) {
                console.log("coucou");
                document.getElementById('minutes').value -= 1;
                document.getElementById('secondes').value = 59;
            }
        } else {
            document.getElementById('secondes').value -= 1;
        }
    }, 1000);
});
function pad(val) {
    let valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

