function gameObject(){
    const obj = {
        home : {
            teamName: "Brooklyn Nets",
            colors: ['black', 'white'],
            players: {
                "Alan Anderson": {Number: 0, Shoe: 16, Points: 22, Rebounds: 12, Assists: 12, steals: 3, Blocks: 1, 'Slam Dunks': 1},
                "Reggie Evans": {Number: 30, Shoe: 14, Points: 12, Rebounds: 12, Assists: 12, steals: 12, Blocks: 12, 'Slam Dunks': 7},
                "Brook Lopez": {Number: 11, Shoe: 17, Points: 17, Rebounds: 19, Assists: 10, steals: 3, Blocks: 1, 'Slam Dunks': 15},
                "Mason Plumlee": {Number: 1, Shoe: 19, Points: 26, Rebounds: 12, Assists: 6, steals: 3, Blocks: 8, 'Slam Dunks': 5},
                "Jason Terry": {Number: 31, Shoe: 15, Points: 19, Rebounds: 2, Assists: 2, steals: 4, Blocks: 11, 'Slam Dunks': 1},
            }
        },
        away : {
            teamName: "Charlotte Hornets",
            colors: ['turquoise', 'purple'],
            players: {
                "Jeff Adrien": {Number: 4, Shoe: 18, Points: 10, Rebounds: 1, Assists: 1, steals: 2, Blocks: 7, 'Slam Dunks': 2},
                "Bismak Biyombo": {Number: 0, Shoe: 16, Points: 12, Rebounds: 4, Assists: 7, steals: 7, Blocks: 15, 'Slam Dunks': 10},
                "DeSagna Diop": {Number: 2, Shoe: 14, Points: 24, Rebounds: 12, Assists: 12, steals: 4, Blocks: 5, 'Slam Dunks': 5},
                "Ben Gordon": {Number: 8, Shoe: 15, Points: 33, Rebounds: 3, Assists: 2, steals: 1, Blocks: 1, 'Slam Dunks': 0},
                "Brendan Haywood": {Number: 33, Shoe: 15, Points: 6, Rebounds: 12, Assists: 12, steals: 22, Blocks: 5, 'Slam Dunks': 12},
            }
        },
    }
    return obj
}
console.log(gameObject())

function homeTeamName(){
    let object = gameObject();
    return object['home']['teamName'];
}

function numPointsScored(player){
    for(let type in game){
       for(let name in game[type]['players']){
            if(player === name){
                return game[type]['players'][player]['Points']
            } 
        }
    }
}