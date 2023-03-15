let hideEl
let showEl

// Set the date we're counting down to
let countDownDate = new Date("Jun 7, 2024").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();

  // Find the distance between now and the count down date
  let distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  days = days+1
  // let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  // let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("days-left").innerHTML = days + " dagar "
  // + hours + " timmar " + minutes + " minuter " + seconds + " sekunder"
  // + hours + "h "+ minutes + "m " + seconds + "s ";64*7 (18*7 +  70 + 2)


let examinationDay = 0
let daysLeftBeforeLIA2 = examinationDay+69
let daysLeftBeforeExam = daysLeftBeforeLIA2+35
let daysLeftBeforeLia1 = daysLeftBeforeExam +70
let daysLeftBeforeFullstack = daysLeftBeforeLia1+42
let daysLeftBeforeUX2 = daysLeftBeforeFullstack+28
let daysLeftBeforeFCloud = daysLeftBeforeUX2+42
let daysBeforeSummer = daysLeftBeforeFCloud + 77
let daysLeftBeforeNode = daysBeforeSummer+35
let daysLeftBeforeReact = daysLeftBeforeNode+49
let daysLeftBeforeAgile = daysLeftBeforeReact+21
let daysLeftBeforeJs = daysLeftBeforeAgile+ 56
let daysBeforeChristmas = daysLeftBeforeJs+7
let daysLeftBeforeProg = daysBeforeChristmas+14
let daysLeftBeforeHTML = daysLeftBeforeProg+56
let daysLeftBeforeUX1 = daysLeftBeforeHTML+42
let daysLeftBeforeIntro = daysLeftBeforeUX1+5
document.getElementById("days-done").innerHTML = daysLeftBeforeIntro-1-days + " dagar ";



//1 veccka
  ifCalc(days, daysLeftBeforeUX1, ".upcomming .intro", ".done .intro")
  // 6 veckor
  ifCalc(days, daysLeftBeforeHTML, ".upcomming .ux1", ".done .ux1")
  // 8 veckor
  ifCalc(days, daysBeforeChristmas, ".upcomming .html", ".done .html")
  // 2veckor 
  ifCalc(days, daysLeftBeforeJs, ".upcomming .progr", ".done .progr")
  // 1 vecka lov + 8 veckor
  ifCalc(days, daysLeftBeforeAgile, ".upcomming .js", ".done .js")
  //3 veckor
  ifCalc(days, daysLeftBeforeReact, ".upcomming .agile", ".done .agile")
  //7 veckor
  ifCalc(days, daysLeftBeforeNode, ".upcomming .react", ".done .react")
  //5 veckor 
  ifCalc(days, daysBeforeSummer, ".upcomming .node", ".done .node")
  //11 veckor lov + 6 veckor
  ifCalc(days, daysLeftBeforeUX2, ".upcomming .cloud", ".done .cloud")
  //4 veckor
  ifCalc(days, daysLeftBeforeFullstack, ".upcomming .ux2", ".done .ux2")
  //6 veckor
  ifCalc(days, daysLeftBeforeLia1, ".upcomming .fullstack", ".done .fullstack")
  //9 veckor
  ifCalc(days, daysLeftBeforeExam, ".upcomming .lia1", ".done .lia1")
  //5 veckor
  ifCalc(days, daysLeftBeforeLIA2, ".upcomming .exam", ".done .exam")
  //9 veckor + 4 dagar
  ifCalc(days, examinationDay, ".upcomming .lia2", ".done .lia2")

  // If the count down is finished, write some text
  if (days <= 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXAMEN!";
  }
}, 1000);


function ifCalc(presentDays, numberOfDays, hideEl, showEl) {
  if (presentDays <= numberOfDays) {
    let hide = document.querySelector(hideEl)
    let show = document.querySelector(showEl)
    hide.style.display = "none"
    show.style.display = "flex"
  }
}