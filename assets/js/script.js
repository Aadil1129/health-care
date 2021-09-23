
window.addEventListener("scroll", function(){
var header = document.querySelector("header");
header.classList.toggle("scroll", window.scrollY > 0)
var headerTitle = document.getElementsByClassName('pfhc_page');
if(window.scrollY>0){
  headerTitle[0].style.paddingTop =  header.offsetHeight+88+'px';
}else{
  headerTitle[0].style.paddingTop = '88px';
}
})

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var project= setInterval(projectDone, 44);
var project2= setInterval(projectSecond, 46);
var project3= setInterval(projectThird, 156);
var project4= setInterval(projectFourth, 23);
let count=1;
let count2=1;
let count3=1;
let count4=1;
function projectDone(){
  count++
  document.getElementById('certified_num-id').innerHTML=count;
  if (count==53) {
    clearInterval(project)
  }
}
function projectSecond(){
  count2++
  document.getElementById('certified_num-id2').innerHTML=count2;
  if (count2==48) {
    clearInterval(project2)
  }
}
function projectThird(){
  count3++
  document.getElementById('certified_num-id3').innerHTML=count3;
  if (count3==12) {
    clearInterval(project3)
  }
}
function projectFourth(){
  count4++
  document.getElementById('certified_num-id4').innerHTML=count4;
  if (count4==96) {
    clearInterval(project4)
  }
}
  var burger = document.getElementsByClassName('new_header_display');
  var arrowUp = document.getElementById('layers2');
  var layers = document.getElementById('layers');
function iconFunction() {
  burger[0].style.display="block";
  layers.style.display="none";
  arrowUp.style.display="block";
}
function layerFunction() {
   burger[0].style.display="none";
  layers.style.display="block";
  arrowUp.style.display="none";
}

 function hrefFunction() {
   burger[0].style.display="none";
   layers.style.display="block";
   arrowUp.style.display="none"
 }
