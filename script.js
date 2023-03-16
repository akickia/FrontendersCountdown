//Global variables
let done
let point
let courses = [
  {
    name: "Introduktion till IT-branschen och frontendutveckling",
    points: 5,
    done: 643,
    start: 648,
  },
    {
    name: "UX/UI grunder",
    points: 30,
    done: 601,
    start: 641,
  },
    {
    name: "HTML & CSS",
    points: 40,
    done: 544,
    start: 599,
  },
    {
    name: "Introduktion till programmering och datalogiskt tänkande",
    points: 10,
    done: 530,
    start: 542,
  },
    {
    name: "JavaScript med ES6+",
    points: 40,
    done: 467,
    start: 521,
  },
    {
    name: "Arbeta agilt",
    points: 15,
    done: 446,
    start: 465,
  },
    {
    name: "Frontendramverk",
    points: 35,
    done: 398,
    start: 444,
  },
    {
    name: "Backend med Node.js",
    points: 25,
    done: 363,
    start: 396,
  },
      {
    name: "Utveckling & driftsättning i molnmiljö",
    points: 30,
    done: 244,
    start: 284,
  },
      {
    name: "UX/UI fördjupning",
    points: 20,
    done: 215,
    start: 242,
  },
  {
    name: "Full stack webbapplikation",
    points: 30,
    done: 173,
    start: 213,
  },
  {
    name: "LIA 1",
    points: 45,
    done: 103,
    start: 171,
  },
  {
    name: "Examensarbete",
    points: 25,
    done: 68,
    start: 101,
  },
  {
    name: "LIA 2",
    points: 50,
    done: 0,
    start: 66,
  },
]


// Set the date we're counting down to and current date + differance
let countDownDate = new Date("Jun 7, 2024 23:59:00");
let x = setInterval(function() {
  let now = new Date();
  let distance = countDownDate - now;
  // Calculate days (from w3schools.com)
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //Show number of days
  document.getElementById("days-left").innerHTML = days + " dagar "
  document.getElementById("days-done").innerHTML = 648-days + " dagar ";


setCourses(days)

  // If the countdown is finished
  if (days <= 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXAMEN!";
    document.getElementById("demo").style.display = "block";
    winner()
  }
}, 1000);


 
//Display courses
  function setCourses(days) {
    let totalDone = []
    let totalLeft = []
    let total = []
    let doneEl = document.querySelector(".done")
    let commingEl = document.querySelector(".upcomming")
    let currentEl = document.querySelector(".current")
    doneEl.innerHTML = ""
    commingEl.innerHTML = ""
    currentEl.innerHTML = ""
    courses.forEach(course => {
      total.push(course.points)
      let courseEl = document.createElement("li")
      courseEl.innerHTML = `
      <p>${course.name}</p>
      <p>${course.points} yhp</p>
      `
      if ((days > course.done) && (days <= course.start)) {
        currentEl.appendChild(courseEl)
      }
      else if (days <= course.done) {
        totalDone.push(course.points)
        doneEl.appendChild(courseEl)
      }
      else {
        totalLeft.push(course.points)
        commingEl.appendChild(courseEl)
      }
    })

    //Show total points
    let totalDoneEl = document.getElementById("total-done")
    totalDoneEl.textContent = calcTotals(totalDone) + " yhp"
    let totalLeftEl = document.getElementById("total-comming")
    totalLeftEl.textContent = calcTotals(totalLeft) + " yhp"
    let totalEl = document.getElementById("total")
    totalEl.textContent = calcTotals(total) + " yhp"
  }

  //Calculate sum off items in array
  function calcTotals(array) {
    let sum = 0;
    for (let i=0; i < array.length; i++) 
    { 
       sum += array[i]; 
    }
    return sum
  }

  