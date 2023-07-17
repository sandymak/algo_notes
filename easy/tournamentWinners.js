function tournamentWinner(competitions, results) {
  /*
  competitions [[homeTeamName, awayTeamName], [homeTeamName, awayTeamName],]
  results = [0,1] ---> 1 = home team won | 0 = away team won

  larger idea, create a dictionary that stores team names & their winnings.
  at the end loop through the dictionary to find the team with the largest winning.

  (for later... 
  1. maybe I can use a variable to track the current team with the highest winning
  so I don't have to loop through my dictionary later
  2. there is something about this being a round robin... 
  like there is a set number of competitions between a number of teams...
  is this info that I can use later on to quickly determine the winner already without having to complete the search?)


steps:
1. initiate dictionary
2. create a single loop for competitions & results
    at every index, 
    a. determine who is winner
    b. check if winning team is already in the dictionary? 
        if yes, increment their score by 3
3. at the end of the loop, loop through the dictionary to find the tesam with the highest score.
  

  return name of team who has won the most competitions

  [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
  ]

  [0,0,1]

  {"C#": 3, "python": 6, }

  T: O(n) S: O(k)
  */

  const HOME_TEAM_WON = 1;
  let currentBestTeam = '';
  const scores = {[currentBestTeam] : 0};
  for (let index = 0; index < competitions.length; index += 1) {
    const [homeTeam, awayTeam] = competitions[index];
    const winner = results[index] === HOME_TEAM_WON ? homeTeam : awayTeam;

    if (!scores[winner]) {
      scores[winner] = 3;
    } else {
      scores[winner] +=3;
    }
    if (scores[winner] > scores[currentBestTeam]) {
      currentBestTeam = winner;
    }
  }

  return currentBestTeam;
}


const w =   [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"]
  ];
const r =   [0,0,1];

// console.log("TournamentWinner", tournamentWinner(w,r))