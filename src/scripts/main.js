const links = [
  "https://www.linkedin.com/in/jeff-woda-1033933/",
  "./assets/Woda_CV_Main.pdf",
  "https://github.com/wodaje",
  "lottoNum()",
];

let refEl =
  '<a onClick="miX();return false;" href="#">PLAY ***PowerBall Numbers*** PLAY </a>';

$(".wildCard").append(refEl);

function miX() {
  let y = Math.floor(Math.random() * links.length);
  // array adjustment
  y = y + 1;

  if (y === 1) {
    alert("My Lucky Link ;o) ! - but keep trying!!");
    window.location.assign("https://www.linkedin.com/in/jeff-woda-1033933/");
  } else if (y === 2) {
    alert("Yes it's 3 pages!! - Don't give up!");
    window.location.assign("./assets/Woda_CV_Main.pdf");
  } else if (y === 3) {
    alert("Gitty UP! - but don't give up - try again!!");
    window.location.assign("https://github.com/wodaje");
  } else if (y === 4) {
    alert("*** Winner ***  =  Here come your PowerBall Numbers!");
    lottoNum();
  }
}

// This could have been written easier by just pulling double digit numbers at random but the programming challenge was more interesting this way = live and learn
function lottoNum() {
  var lottoArray = [];
  var power;
  var nums = "";

  // numbers assigned for duplicate removal has to be outside possible range to avoide error looping
  var num1 = 70;
  var num2 = 71;
  var num3 = 72;
  var num4 = 73;
  var num5 = 74;

  // generate first number
  let x1 = 0;
  let x2 = 0;
  let xa = "";
  let xb = "";

  do {
    x1 = Math.floor(Math.random() * 10);
  } while (x1 > 6);

  if (x1 === 0) {
    do {
      x2 = Math.floor(Math.random() * 10);
    } while (x2 === 0);
  }

  xa = x1.toString();
  xb = x2.toString();
  nums = xa + xb;
  lottoArray = [nums];
  num = parseInt(nums);
  eval("num" + 1 + "= " + num);

  // generate next 4 while avoiding dupes
  for (c = 2; c < 6; c = c) {
    do {
      x1 = Math.floor(Math.random() * 10);
    } while (x1 > 6);

    x2 = Math.floor(Math.random() * 10);

    if (x1 === 0) {
      do {
        x2 = Math.floor(Math.random() * 10);
      } while (x2 === 0);
    }
    xa = x1.toString();
    xb = x2.toString();
    nums = xa + xb;
    num = parseInt(nums);
    eval("num" + c + "= " + num);

    if (
      num1 === num2 ||
      num1 === num3 ||
      num1 === num4 ||
      num1 === num5 ||
      num2 === num3 ||
      num2 === num4 ||
      num2 === num5 ||
      num3 === num4 ||
      num3 === num5 ||
      num4 === num5
    ) {
      console.log(
        "dupe caught " +
          num1 +
          " " +
          num2 +
          " " +
          num3 +
          " " +
          num4 +
          " " +
          num5
      );
    } else {
      lottoArray.push(nums);
      c = c + 1;
    }
  }
  // generate power ball
  for (x = 1; x < 2; x = x) {
    do {
      x1 = Math.floor(Math.random() * 10);
    } while (x1 > 2);

    x2 = Math.floor(Math.random() * 10);

    if (x1 === 0) {
      do {
        x2 = Math.floor(Math.random() * 10);
      } while (x2 === 0);
    }

    xa = x1.toString();
    xb = x2.toString();
    num = xa + xb;
    num = parseInt(num);

    if (num < 27) {
      num = num.toString();
      power = num;
      x = x + 1;
    }
  }
  lottoArray.sort();
  console.log(" Final Numbers: " + lottoArray + " Power :" + power);
  alert("Your Lotto number suggestion: " + lottoArray + " PowerBall: " + power);
}

// Modal Control

var modal = document.getElementById("simpleModal");
var modalBtn = document.getElementById("logo");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", closeOutModal);

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

function closeOutModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
