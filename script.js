'use script';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
  [
  'Neuer',
  'Pavard',
  'Martinez',
  'Alaba',
  'Davies',
  'Kimmich',
  'Goretzka',
  'Coman',
  'Muller',
  'Gnarby',
  'Lewandowski',
  ],
  [
  'Burki',
  'Schulz',
  'Hummels',
  'Akanji',
  'Hakimi',
  'Weigl',
  'Witsel',
  'Hazard',
  'Brandt',
  'Sancho',
  'Gotze',
  ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
  'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
  team1: 1.33,
  x: 3.25,
  team2: 6.5,
  },
  };

// challenge1
//step 1
let playerOne = [];
let playerTwo = [];
// step 2
const [gk, ...fieldPlayers] = game.players[0];

//step 3
const allPlayers = [...game.players[0], ...game.players[0]]

//step 4
const playersOneFinal = [...fieldPlayers,'Thiago','Coutinho','Perisic'];

//step 5
const {team1:teamOne,x:draw,team2:teamTwo} = game.odds;

// step 6
const printGoals = function(players){
  for(let i=0;i<players.length;i++){
    console.log(`Goal ${i+1} scored by ${players[i]}`);
  }
}

printGoals(game.scored);

// step 7
(teamOne < teamTwo) && console.log(`Team 1 wins !!!`);

(teamOne > teamTwo) && console.log(`Team 2 wins !!!`);

// challenge 2
//step 1 --> is same as step 6

// step 2
let avgOdds = 0,count =0;
for(const odd of Object.values(game.odds)){
  avgOdds += odd;
  count++;
}
console.log(`Average odd value : ${(avgOdds/count).toFixed(2)}`);

// step 3
for(const[key,value] of Object.entries(game.odds)){
  const oddKey = (key in game) ? key : "draw";
  console.log(`odd of ${oddKey}: ${game.odds[key]}`)
}

// step 4
let scorers = {};
for(let i=0;i<game.scored.length;i++){
  let count=1;
  for(let j=i+1;j<game.scored.length;j++){
    if(game.scored[i] === game.scored[j]){
      count+=1;
    }
  }
  if(!(game.scored[i] in scorers)){
    scorers[game.scored[i]] = count;
  }
}
console.table(scorers);