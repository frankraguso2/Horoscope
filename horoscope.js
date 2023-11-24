
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
  [0, 'Capricorn'],
  //2
  [1, 'Aquarius'],
  //3
  [2, 'Pisces'],
  //4
  [3, 'Aries'],
  //5
  [4, 'Taurus'],
  //6
  [5, 'Gemeni'],
  //7
  [6, 'Cancer'],
  //8
  [7, 'Leo'],
  //9
  [8, 'Virgo'],
  //10
  [9, 'Libra'],
  //11
  [10, 'Scorpio'],
  //12
  [11, 'Sagittarius'],
]

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

  let randomNumber = Math.floor(Math.random() * 123);
  console.log(randomNumber);

  if (playerMonth === "Aquarius" || playerMonth === "Aries") {
    document.querySelector('.output').innerHTML = `${playerName}, you are an ${playerMonth}. You are most compatable with the following: ${loveMonth}. Your lucky number is ${randomNumber}.`
  } else {
    document.querySelector('.output').innerHTML = `${playerName}, you are a ${playerMonth}. You are most compatable with the following: ${loveMonth}. Your lucky number is ${randomNumber}.`;
  };

  document.querySelector('.paragraph1').innerHTML = 'Choose another Zodiac Sign';
};
