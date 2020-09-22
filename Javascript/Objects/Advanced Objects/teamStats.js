const team = {
    _players: [
      {
        firstName: 'John',
        lastName: 'Smith',
        age: 30
      },
      {
        firstName: 'Bob',
        lastName: 'Jones',
        age: 25
      },
      {
        firstName: 'Alex',
        lastName: 'Time',
        age: 23
      },
    ],
    _games: [
      {
        opponent: 'Celtic',
        teamPoints: 2,
        opponentPoints: 3
      }, 
      {
        opponent: 'Bolton',
        teamPoints: 4,
        opponentPoints: 0
      },
      {
        opponent: 'Dundee',
        teamPoints: 1,
        opponentPoints: 1
      },
    ],

    get players() {
      return this._players;
    },

    get games() {
      return this._games;
    },

    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints) {
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this.games.push(game);
    }

  };

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Rangers', 5, 0);
team.addGame('Manchester United', 2, 2);
team.addGame('Everton', 2, 0);

console.log(team.games);

