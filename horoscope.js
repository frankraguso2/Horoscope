
let playerMonth = '';
let currentMonth = '';
let luckyNumber = '';
let today = '';

let curr = new Date();
let currMonth = curr.getMonth();
let currDate = curr.getDate();
let currYear = curr.getFullYear();
today = `${currMonth} ${currDate} ${currYear}`;
console.log(today);

let ship = [
  //2 = love, 1 = friends, 0 = nothing
  //cap, aqu, pis, ari, tau, gem, can, leo, vir, lib, sco, sag

  //https://theeverygirl.com/zodiac-compatability/

  //cap
  [1, 1, 0, 0, 1, 0, 1, 0, 2, 1, 2, 1],
  //aqu
  [1, 2, 1, 2, 1, 2, 0, 2, 1, 2, 0, 2],
  //pis
  [0, 1, 2, 0, 2, 0, 2, 2, 2, 2, 2, 0],
  //ari
  [0, 2, 0, 2, 1, 2, 0, 1, 1, 2, 1, 2],
  //tau
  [1, 1, 2, 1, 0, 1, 2, 0, 2, 2, 2, 0],
  //gem
  [0, 2, 0, 2, 1, 1, 2, 2, 0, 2, 0, 1],
  //can
  [1, 0, 2, 0, 2, 2, 2, 1, 2, 2, 2, 2],
  //leo
  [0, 2, 2, 2, 0, 2, 1, 2, 1, 2, 1, 2],
  //vir
  [2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 1, 0],
  //lib
  [1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 2],
  //sco
  [2, 0, 2, 1, 2, 0, 2, 1, 1, 0, 0, 2],
  //sag
  [1, 2, 0, 1, 0, 1, 2, 2, 0, 2, 1, 2]
];

let month = [
  //1
  [0, 'Capricorn', 0],
  //2
  [1, 'Aquarius', 0],
  //3
  [2, 'Pisces', 0],
  //4
  [3, 'Aries', 0],
  //5
  [4, 'Taurus', 0],
  //6
  [5, 'Gemeni', 0],
  //7
  [6, 'Cancer', 0],
  //8
  [7, 'Leo', 0],
  //9
  [8, 'Virgo', 0],
  //10
  [9, 'Libra', 0],
  //11
  [10, 'Scorpio', 0],
  //12
  [11, 'Sagittarius', 0],
];

localStorage.getItem('today');
console.log(localStorage.getItem('today'));

if (localStorage.getItem('today') != `${currMonth} ${currDate} ${currYear}`) {
  console.log('get new numbers');
  getLuckyNumber();
  localStorage.setItem('today', `${currMonth} ${currDate} ${currYear}`);
};

localStorage.getItem('CapricornLN');
localStorage.getItem('AquariusLN');
localStorage.getItem('PiscesLN');
localStorage.getItem('AriesLN');
localStorage.getItem('TaurusLN');
localStorage.getItem('GemeniLN');
localStorage.getItem('CancerLN');
localStorage.getItem('LeoLN');
localStorage.getItem('VirgoLN');
localStorage.getItem('LibraLN');
localStorage.getItem('ScorpioLN');
localStorage.getItem('SagittariusLN');

function getLuckyNumber () {
  console.log('here are the new numbers');
  //1
  month[0][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('CapriconLN', month[0][2]);
  //2
  month[1][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('AquariusLN', month[0][2]);
  //3
  month[2][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('PiscesLN', month[0][2]);
  //4
  month[3][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('AriesLN', month[0][2]);
  //5
  month[4][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('TaurusLN', month[0][2]);
  //6
  month[5][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('GemeniLN', month[0][2]);
  //7
  month[6][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('CancerLN', month[0][2]);
  //8
  month[7][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('LeoLN', month[0][2]);
  //9
  month[8][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('VirgoLN', month[0][2]);
  //10
  month[9][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('LibraLN', month[0][2]);
  //11
  month[10][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('ScorpioLN', month[0][2]);
  //12
  month[11][2] = Math.floor(Math.random() * 124);
  localStorage.setItem('SagittariusLN', month[0][2]);

  console.log(month);
};

function fplayerMonth (playerMonth) {
  console.log(playerMonth);

  console.log(playerName = document.querySelector('.input').value);

  document.getElementById("output").classList.add('output');

  let love = [];
  let loveMonth = '';
  let currentMonth = [];
  let currentShip=[];

  for (let i=0; i<12; i++) {
    if (playerMonth === month[i][1]) {
      currentMonth = month[i][0];
      currentShip = ship[i];
      luckyNumber = month[i][2];
    };
  };

  console.log(currentMonth);
  console.log(currentShip);

  for (let i=0; i<12; i++) {
    if (currentShip[i] === 2) {
      console.log(i);
      love.push(i);
    };
  };

  console.log(love);

  for (j=0; j<12; j++) {
    for (i=0; i<12; i++) {
      if (month[i][0] === love[j]) {
        console.log(month[i][1]);
        loveMonth = `${loveMonth} ${month[i][1]}`
        console.log(loveMonth);
      };
    };
  };

  if (playerMonth === "Aquarius" || playerMonth === "Aries") {
    document.querySelector('.output').innerHTML = `${playerName}, you are an ${playerMonth}. <br> You are most compatable with the following: ${loveMonth}. <br> Your lucky number is ${luckyNumber}.`
  } else {
    document.querySelector('.output').innerHTML = `${playerName}, you are a ${playerMonth}. <br> You are most compatable with the following: ${loveMonth}. <br> Your lucky number is ${luckyNumber}.`;
  };

  document.querySelector('.paragraph1').innerHTML = 'Choose another Zodiac Sign';
};
