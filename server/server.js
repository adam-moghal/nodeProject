const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = express.Router();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: "*" }));


app.use("/", router);

router.get("/api/player/", function (req, res) {

    console.log(res.json(arsenalPlayers))

});

router.get("/api/player/:id", (req, res) => {
    const playerID = req.params.id;
    const currentPlayer = arsenalPlayers.find((player) => player.id == playerID);
    if (currentPlayer) {
        res.json(currentPlayer);
    } else {
        res.sendStatus(404);
    }
});

router.post("/api/player/", (req, res) => {
    const newPlayer = req.body;
    const isValid = isValidPlayer(newPlayer) && !arsenalPlayers.find((a) => a.id == newPlayer.id);
    if (isValid) {
        arsenalPlayers.push(newPlayer);
        res.send(newPlayer);
    } else {
        res.sendStatus(500);
    }
});


router.put("/api/player/:id", (req, res) => {
    const playerID = req.params.id;
    const currentPlayer = arsenalPlayers.find((player) => player.id == playerID);
    if (currentPlayer) {
        const putPlayer = req.body;
        const isValid = isValidPlayer(putPlayer);
        if (isValid) {
            currentPlayer.name = putPlayer.name;
            currentPlayer.age = putPlayer.age;
            currentPlayer.position = putPlayer.position;
            res.sendStatus(204);
        } else {
            res.sendStatus(404);
        }
    }
});

router.delete("/api/player/:id", (req, res) => {
    const playerID = req.params.id;
    const currentPlayer = arsenalPlayers.findIndex((player) => player.id == playerID);
    if (currentPlayer !== -1) {
        arsenalPlayers.splice(currentPlayer, 1);
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});


let arsenalPlayers = [
    {
        id: 1,
        name: "Petr Cech",
        age: 35,
        position: "Goalkeeper"
    },
    {
        id: 2,
        name: "Laurent koscielny",
        age: 32,
        position: "Centre Midfielder"
    },
    {
        id: 3,
        name: "Jack Wilshere",
        age: 25,
        position: "Attacking Midfielder"
    },
    {
        id: 4,
        name: "Mesut Ozil",
        age: 29,
        position: "Attacking Midfielder"
    },
    {
        id: 5,
        name: "Alexander Lacazette",
        age: 26,
        position: "Striker"
    }
]

function isValidPlayer(player) {
    return "id" in player && "name" in player && "age" in player && "position" in player;
}

app.listen(3000, function () {

    console.log("started on port 3000")

});



