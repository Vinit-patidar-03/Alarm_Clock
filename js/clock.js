//fetching song.
let tones = ["./Song/Hanuman.mp3", "./Song/Har_har_shambhu.mp3", "./Song/Mera_Bhola_H_Bhandari.mp3"]
let click = document.getElementById('set');
let count = false;
let audio;
let notify=document.getElementById('notify');
let Ringtone = document.getElementById('Ringtone');

Ringtone.addEventListener('click', () => {
  if(Ringtone.value!=0)
  {
   audio = new Audio(tones[Ringtone.value-1]);
   console.log(audio);
  }
})

setInterval(() => {
  //fetching date and time.
  let date = new Date();
  let Hours = date.getHours();
  let Minutes = date.getMinutes();
  let Seconds = date.getSeconds();
  let d = date.getDate();
  let m = date.getMonth();
  let y = date.getFullYear();

  //calculating angle of rotation.
  let DegHour = 30 * Hours + Minutes / 2,
    DegSec = 6 * Seconds,
    DegMin = 6 * Minutes + Seconds / 10;

  //Rotation of sticks using tranform property.
  document.getElementById("sec").style.transform = `rotate(${DegSec}deg)`;
  document.getElementById("min").style.transform = `rotate(${DegMin}deg)`;
  document.getElementById("hour").style.transform = `rotate(${DegHour}deg)`;

  //Convertion into "09" type for number <10.
  if (Hours < 10) {
    Hours = "0" + Hours;
  }

  if (Minutes < 10) {
    Minutes = "0" + Minutes;
  }

  if (d < 10) {
    d = "0" + d;
  }

  if (m < 10) {
    m = m + 1;
    m = "0" + m;
  }
  else {
    m = m + 1;
  }

  //getting the element input.
  let input = document.getElementById("time");
  let Input = document.getElementById('date');

  //For song to be played
  if ((Input.value == `${y}-${m}-${d}`) && count) {
    if (input.value == `${Hours}:${Minutes}`) {
      if (Seconds == 0) {
        audio.play();
      }
      else {
        console.log('song is already playing');
      }

      if (audio.duration == audio.currentTime) {
        audio.play();
      }
    }
    else if (audio.played) {
      audio.pause();
    }
  }
  if(input.value!='' && Input.value!='' && Ringtone.value!=0)
{
   click.disabled=false;
}
else
{
  click.disabled=true;
}
}, 1000);


click.addEventListener('click', () => {
  count = true;
  notify.style.visibility="visible";
  setTimeout(()=>
  {
    notify.style.visibility="hidden";
  },3000);
})
