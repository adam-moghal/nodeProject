import {getPlayers, createPlayer, deletePlayer, updatePlayer} from "./api/playerApi.js";

let playerIDCount = 1;

function players(playerList) {
    let totalPlayer = "";
    playerList.forEach((player) => {
        totalPlayer += showPlayers(player);
        playerIDCount++;
    });
    document
        .getElementById("playerDetails")
        .innerHTML = totalPlayer;
        applyDeleteEvents();
}

function showPlayers({id, name, age, position}) {
    return `
    <tr>
        <td> <a href = "#" data-id="${id}" class="deletePlayer"> X </a> </td>
        <td>${name}</td>
        <td>${age}</td>
        <td>${position}</td>
        <td> <a href = "#" data-id="${id}" class="editPlayerr"> Edit </a> </td>
    </tr>`;
}

function deletePlayerFromTableAndDB(event) {
    const element = event.target;
    event.preventDefault();
    deletePlayer(element.attributes["data-id"].value);
    const row = element.parentNode.parentNode;
    row
        .parentNode
        .removeChild(row);
}

function applyDeleteEvents() {
    // find all elements that have the classname "deleteDog" and give them onclick
    // events to delete them.
    const deleteLinks = document.getElementsByClassName("deletePlayer");
    Array.from(deleteLinks, (link) => {
        link.onclick = deletePlayerFromTableAndDB;
    });
}

function applyEditEvents() {
    const deleteLinks = document.getElementsByClassName("editPlayer");
    Array.from(deleteLinks, (link) => {
      //  link.onclick = deletePlayerFromTableAndDB;
    });
}

function createAndAppendPlayer() {
    const playerInput = getPlayerFromInputs();
    clearInputs();
    if (isValidPlayer(playerInput)) {
        Promise
            .resolve(createPlayer(playerInput))
            .then((newPlayer) => {
                document
                    .getElementById("playerDetails")
                    .innerHTML += showPlayers(newPlayer);
                applyDeleteEvents();
            });
    }
}

function clearInputs() {
    document
        .getElementById("inputPlayerName")
        .value = "";
    document
        .getElementById("inputPlayerAge")
        .value = "";
    document
        .getElementById("inputPlayerPosition")
        .value = "";
}

function getPlayerFromInputs() {
    return {
        
        id: playerIDCount++,
        name: document
            .getElementById("inputPlayerName")
            .value,
        age: document
            .getElementById("inputPlayerAge")
            .value,
        position: document
            .getElementById("inputPlayerPosition")
            .value
    }
}

function isValidPlayer(player) {
    return player.name && player.age && player.position;
}

window.createAndAppendPlayer = createAndAppendPlayer;

window.onload = function () {
    const playerList = getPlayers().then(players);
}