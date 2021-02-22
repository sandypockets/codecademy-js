const team = {
  // Player info
  _players: [
    {
      firstName: 'Pablo',
      lastName: 'Sanchez',
      age: 11,
    }, 
    {
      firstName: 'Rick',
      lastName: 'Snip',
      age: 54,
    },
    {
      firstName: 'Art',
      lastName: 'Vandelay',
      age: 44,
    }
  ],
  // Game info
  _games: [
    {
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27,
    },
    {
      opponent: 'Alley Cats',
      teamPoints: 100,
      opponentPoints: 101,
    },
    {
      opponent: 'Leafs',
      teamPoints: 32,
      opponentPoints: 0,
    },
  ],
  // Getter method for player info
  get players() {
    return this._players;
  },
  // Getter method for games info
  get games() {
    return this._games;
  },
  // Method to add players to the team object
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },
  // Method to add new games
  addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game);
  }
};

// Calling the addPlayer method on the team object to add new players to the team
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

// Return the updated list of players
console.log(team.players);

// Calling addGame method on the team object to add new games to the data
team.addGame('Team17', 24, 28);
team.addGame('Centennials', 21, 34);
team.addGame('Wolves', 13, 43);

// Return the updated list of games
console.log(team.games);
