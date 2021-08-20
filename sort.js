var islideIndex = 1;
var bslideIndex=1;
var sslideIndex=1;
var imgslideIndex=1;
ishowSlides(islideIndex);


// Next/previous controls
function iplusSlides(n) {
  ishowSlides(islideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  ishowSlides(islideIndex = n);
}

function ishowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {islideIndex = 1}
  if (n < 1) {islideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[islideIndex-1].style.display = "block";
}
function openinfoi() {
  document.getElementById("imgpop").style.display = "none";

  document.getElementById("popi").style.display = "block";
  document.getElementById("popb").style.display = "none";

  document.getElementById("pops").style.display = "none";

  document.body.style.backgroundImage="url('Images/insertion.png')";
  document.body.style.backgroundPosition = "center right";
  document.body.style.backgroundRepeat="no-repeat";

  document.body.style.backgroundSize = "300px 260px";
  document.getElementById("visual").style.display="block";
  document.getElementById("visual").title="Visualise insertion sort";
  document.getElementById("visual").addEventListener('click', v2);
}

function v2(){
  window.location.href="visual2.html";
}
//---------------------------------------------------------------
bshowSlides(bslideIndex);

function bplusSlides(n) {
  bshowSlides(bslideIndex += n);
}
function currentSlide(n) {
  bshowSlides(bslideIndex = n);
}



function bshowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bmySlides");
  if (n > slides.length) {bslideIndex = 1}
  if (n < 1) {bslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[bslideIndex-1].style.display = "block";
}
function openinfob() {
  document.getElementById("imgpop").style.display = "none";

  document.getElementById("popi").style.display = "none";
  
  document.getElementById("pops").style.display = "none";
  document.body.style.backgroundRepeat="no-repeat";
  
  document.getElementById("popb").style.display = "block";
  document.body.style.backgroundImage="url('Images/bubble2.png')";
  document.body.style.backgroundPosition = "center right";
  document.body.style.backgroundSize = "300px 260px";
  document.getElementById("visual").title="Visualise bubble sort";
  document.getElementById("visual").style.display="block";
  document.getElementById("visual").addEventListener('click', v1);
}

function v1(){
  window.location.href="visual1.html";
}
function visual1(){
  document.body.style.backgroundColor="red";
}
 

//-------------------------------------------------------------------------------------

sshowSlides(sslideIndex);

function splusSlides(n) {
  sshowSlides(sslideIndex += n);
}
function currentSlide(n) {
  sshowSlides(sslideIndex = n);
}



function sshowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("smySlides");
  if (n > slides.length) {sslideIndex = 1}
  if (n < 1) {sslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[sslideIndex-1].style.display = "block";

}
function openinfos() {
  document.getElementById("visual").style.display="inline-block";

  document.getElementById("imgpop").style.display = "none";
  document.getElementById("popi").style.display = "none";
  document.getElementById("popb").style.display = "none";

  document.getElementById("pops").style.display = "block";
  document.body.style.backgroundImage="url('Images/selection.png')";
  document.body.style.backgroundRepeat="no-repeat";
  document.body.style.backgroundPosition = "center right";
  document.body.style.backgroundSize = "300px 260px";
  document.getElementById("visual").title="Visualise selection sort";
  document.getElementById("visual").addEventListener('click', v3);

}
function v3(){
  window.location.href="visual3.html";
}

//-----------------


imgshowSlides(bslideIndex);

function imgplusSlides(n) {
  document.getElementById("popi").style.display = "none";
  document.getElementById("popb").style.display = "none";

  document.getElementById("pops").style.display = "none";
  imgshowSlides(imgslideIndex += n);
}
function currentSlide(n) {
  imgshowSlides(imgslideIndex = n);
}



function imgshowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("imgmySlides");
  if (n > slides.length) {imgslideIndex = 1}
  if (n < 1) {imgslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[imgslideIndex-1].style.display = "block";
}