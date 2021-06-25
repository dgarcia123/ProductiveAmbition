var slider1 = document.getElementById("myRange1");
var slider2 = document.getElementById("myRange2");
var slider3 = document.getElementById("myRange3");
var slider4 = document.getElementById("myRange4");
var slider5 = document.getElementById("myRange5");
var slider6 = document.getElementById("myRange6");
var slider7 = document.getElementById("myRange7");
var output1 = document.getElementById("academic");
var output2 = document.getElementById("work");
var output3 = document.getElementById("health");
var output4 = document.getElementById("free");
var output5 = document.getElementById("social");
var output6 = document.getElementById("other");
var output7 = document.getElementById("sleep");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;
output5.innerHTML = slider5.value;
output6.innerHTML = slider6.value;
output7.innerHTML = slider7.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

slider4.oninput = function() {
  output4.innerHTML = this.value;
}

slider5.oninput = function() {
  output5.innerHTML = this.value;
}

slider6.oninput = function() {
  output6.innerHTML = this.value;
}

slider7.oninput = function() {
  output7.innerHTML = this.value;
}
