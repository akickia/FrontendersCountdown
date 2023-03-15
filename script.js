//Global variables
let hideEl
let showEl

// Set the date we're counting down to and current date + differance
let countDownDate = new Date("Jun 7, 2024").getTime();
let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  // Calculate days (from w3schools.com)
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  days = days+1
  //Show countdown
  document.getElementById("days-left").innerHTML = days + " dagar "

  //variables for conditions, refactor later
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

//Displaying currently done days
document.getElementById("days-done").innerHTML = daysLeftBeforeIntro-1-days + " dagar ";


//Calling function with conditions for each course
  ifCalc(days, daysLeftBeforeUX1, ".upcomming .intro", ".done .intro")
  ifCalc(days, daysLeftBeforeHTML, ".upcomming .ux1", ".done .ux1")
  ifCalc(days, daysBeforeChristmas, ".upcomming .html", ".done .html")
  ifCalc(days, daysLeftBeforeJs, ".upcomming .progr", ".done .progr")
  ifCalc(days, daysLeftBeforeAgile, ".upcomming .js", ".done .js")
  ifCalc(days, daysLeftBeforeReact, ".upcomming .agile", ".done .agile")
  ifCalc(days, daysLeftBeforeNode, ".upcomming .react", ".done .react")
  ifCalc(days, daysBeforeSummer, ".upcomming .node", ".done .node")
  ifCalc(days, daysLeftBeforeUX2, ".upcomming .cloud", ".done .cloud")
  ifCalc(days, daysLeftBeforeFullstack, ".upcomming .ux2", ".done .ux2")
  ifCalc(days, daysLeftBeforeLia1, ".upcomming .fullstack", ".done .fullstack")
  ifCalc(days, daysLeftBeforeExam, ".upcomming .lia1", ".done .lia1")
  ifCalc(days, daysLeftBeforeLIA2, ".upcomming .exam", ".done .exam")
  ifCalc(days, examinationDay, ".upcomming .lia2", ".done .lia2")

  // If the count down is finished
  if (days <= 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXAMEN!";
  }
}, 1000);

//Comparing function to hide/show courses in different ul's
function ifCalc(presentDays, numberOfDays, hideEl, showEl) {
  if (presentDays <= numberOfDays) {
    let hide = document.querySelector(hideEl)
    let show = document.querySelector(showEl)
    hide.style.display = "none"
    show.style.display = "flex"
  }
}
