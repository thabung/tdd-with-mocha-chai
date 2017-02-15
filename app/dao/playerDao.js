let Player = require('../models/player');

/*
 * GET /player route to retrieve all the players.
 */
function getPlayers(req, res) {
//    return;
    let query = Player.find({});
    query.exec((err, players) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(players);
    });
}

/*
 * POST /player to save a new player.
 */
function postPlayer(req, res) {
//    return;
    var newPlayer = new Player(req.body);
    newPlayer.save((err,player) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({message: "Player successfully added!", player });
        }
    });
}

/*
 * GET /player/:id route to retrieve a player given its id.
 */
function getPlayer(req, res) {
    Player.findById(req.params.id, (err, player) => {
        if(err) res.send(err);
        res.json(player);
    });     
}

function deletePlayer(req, res) {
    Player.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "Player successfully deleted!", result });
    });
}

/*
 * PUT /player/:id to updatea a player given its id
 */
function updatePlayer(req, res) {
    Player.findById({_id: req.params.id}, (err, player) => {
        if(err) res.send(err);
        Object.assign(player, req.body).save((err, player) => {
            if(err) res.send(err);
            res.json({ message: 'Player updated!', player });
        }); 
    });
}

//export all the functions
module.exports = { getPlayers, postPlayer, getPlayer, deletePlayer, updatePlayer };