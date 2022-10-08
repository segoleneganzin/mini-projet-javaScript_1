var sound = new Audio("synthRing1.wav");
		sound.loop = true;

let clock = document.getElementById('clock');

// display current time by the second
let currentTime = setInterval(function(){
	let date = new Date();
	//var hours = (12 - (date.getHours()));
	let hours = date.getHours();
	let minutes = date.getMinutes();	
	let seconds = date.getSeconds();

    //convert military time to standard time
    if (hours < 0) {
        hours = hours * -1;
    } else if (hours == 00) {
        hours = 24;
    } else {
        hours = hours;
    }

    clock.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);

},1000);

/*functions to get hour, min, secs, 
  am or pm, add zero, set alarm time and sound, clear alarm
*/
function addZero(time) {
    let formatTime;
    if (time < 10) {
        formatTime = "0"+time;
    } else {
        formatTime = time;
    }
    return  formatTime;
}

function selectHeure(){

	let select = document.getElementById('alarme_heures');
	let heures = 24

	for (i=0; i <= heures; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
	}
}
selectHeure();

function selectMinute(){

	let select = document.getElementById('alarme_minutes');
	let min = 59;

	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
selectMinute();

function selectSeconde(){

	let select = document.getElementById('alarme_secondes');
	let sec = 59;

	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
selectSeconde();






function alarmSet() {

	let hr = document.getElementById('alarme_heures');
	
	let min = document.getElementById('alarme_minutes');
	
	let sec = document.getElementById('alarme_secondes');
    

    let selectedHour = hr.options[hr.selectedIndex].value;
    let selectedMin = min.options[min.selectedIndex].value;
    let selectedSec = sec.options[sec.selectedIndex].value;

    let alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec);
    console.log('alarmTime:' + alarmTime);

    document.getElementById('alarme_heures').disabled = true;
	document.getElementById('alarme_minutes').disabled = true;
	document.getElementById('alarme_secondes').disabled = true;


//when alarmtime is equal to currenttime then play a sound
	let clock = document.getElementById('clock');

/*function to calcutate the current time 
then compare it to the alarmtime and play a sound when they are equal
*/

setInterval(function(){

	let date = new Date();
	let heures = date.getHours();
	let minutes = date.getMinutes();
	let secondes = date.getSeconds();
	
	//convert military time to standard time

	if (heures < 0) {
		heures = heures * -1;
	} else if (heures == 00) {
		heures = 24;
	} else {
		heures = heures;
	}
	
	let currentTime = clock.textContent = addZero(heures) + ":" + addZero(minutes) + ":" + addZero(secondes);
	

	if (alarmTime == currentTime) {
		sound.play();
        console.log("c\'est l\'heure")
		}

},1000);


	// console.log('currentTime:' + currentTime);	

}


function alarmClear() {

	document.getElementById('alarme_heures').disabled = false;
	document.getElementById('alarme_minutes').disabled = false;
	document.getElementById('alarme_secondes').disabled = false;
	sound.pause();
}
