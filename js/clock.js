setInterval( () =>{
  let now = new Date();
  document.getElementById('hours').innerHTML = now.getHours();
  document.getElementById('minutes').innerHTML = now.getMinutes();
  if(now.getHours() <= 12){
    document.getElementById("timeOfDay").innerHTML = "AM";
  } else {
    document.getElementById('timeOfDay').innerHTML = "PM";
  }},1000);