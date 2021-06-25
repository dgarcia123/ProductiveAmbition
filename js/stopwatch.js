var watch = new StopWatch();
    window.onload = function() {

      watch.init();
    }

  function StopWatch() {
    this.display = "#watch";
    this.timeString = "00:00:00:00";

    var interval,
      that = this,
      startTime,
      msToAdd = 0,
      msTotal = 0;

    var update = function(reset) {
      var dateRepresentation;

      msTotal = (Date.now() - startTime) + msToAdd;
      if (reset) { msTotal = 0; }
      dateRepresentation = new Date(msTotal);

      that.timeString = (
        ( (dateRepresentation.getUTCHours()<10 ? "0" : "") + dateRepresentation.getUTCHours()) +
        ":" + ("00" + dateRepresentation.getUTCMinutes()).slice(-2) +
        ":" + ("00" + dateRepresentation.getUTCSeconds()).slice(-2) +
        ":" + ("00" + dateRepresentation.getUTCMilliseconds()).slice(-2));
      that.display.innerText = that.timeString;

    }

    this.init = function() {

      if (this.display.charAt(0) === "#") {
        this.display = this.display.slice(1);
      }
      this.display = document.getElementById(this.display);

      var startBtn = document.getElementsByClassName("start");
      startBtn[0].onclick = function(e) {
        this.style.display="none";
        stopBtn[0].style.display="inline";
        e.preventDefault();
        that.start();
        return false;
      }
      var resetBtn = document.getElementsByClassName("reset");
      resetBtn[0].onclick = function(e) {
        stopBtn[0].style.display="none";
        startBtn[0].style.display="inline";
        e.preventDefault();
        that.reset();
        return false;
      }

      var stopBtn = document.getElementsByClassName("stop");
      stopBtn[0].onclick = function(e) {
        this.style.display="none";
        startBtn[0].style.display="inline";
        e.preventDefault();
        that.stop();
        return false;
      }
    }

    this.start = function() {
      startTime = new Date();
      dumbStart = new Date();
      interval = setInterval(update,80);
    }

    this.stop = function() {
      msToAdd = msTotal;
      dumbStop = new Date();
      clearInterval(interval);
    }
    this.reset = function() {
      msToAdd = 0;
      msTotal = 0;
      this.stop();
      update(true);
    }

    this.debug = {};
    this.debug.setToAdd = function(ms) {
      msToAdd = ms;
    }

    this.debug.setTotal = function(ms) {
      msTotal = ms;
    }
  }
