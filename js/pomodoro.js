var audio = new Audio('audio/alert.wav');
(function(){
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
let timer = document.getElementById('timer');
const time = 25 + ":" + "0"+0;
const title = document.title;
let isNull = false;
timer.innerHTML = time;

   start.addEventListener('click',function(e){
    this.disabled = true;
     if(isNull){
        startTimer();
        timer.innerHTML = time;
        isNull = false;
     }else{
        startTimer();
     }
  })

  pause.addEventListener('click', function(){
    start.disabled = false;
    start.innerHTML = "Resume";
    myStopFunction();
  });

  stop.addEventListener('click', function(){
    timer.innerHTML = time;
    start.innerHTML = "Start";
    myStopFunction();
    start.disabled = false;
    document.title = title;
  });


let timerName;
function startTimer() {
  let presentTime = timer.innerHTML;
  let timeArray = presentTime.split(/[:]+/);
  let m = checkMinute(timeArray[0] - 0);
  let s = checkSecond((timeArray[1] - 1));

  if(s==59){
    m=m-1;
    if(m<10){
      m="0"+m;
    }
  }

  timer.innerHTML = m + ":" + s;
  document.title = timer.innerText;
  timerName = setTimeout(startTimer, 1000);

  if(m==0 && s==0){
    //audio below
    audio.play();
    document.title = "Time's Up!";
    myStopFunction();
    start.disabled = false;
    isNull = true;

  }
}

function myStopFunction() {
    clearTimeout(timerName);
}

function checkMinute(min){
  if(min<=9){
    min = "0" + min;
  }
  return min;
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec};
  if (sec < 0) {sec = "59"};
  return sec;
}

})();
