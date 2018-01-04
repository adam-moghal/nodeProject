const baseUrl = "http://localhost:3000/api/";

let onSuccess = (response) => {
    return response.json();
};
let onError = (error) => {
    console.log(error);
};

function get(url) {
    return fetch(baseUrl + url).then(onSuccess, onError);
}   

function create(player, url) {
    const request = new Request(baseUrl + url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(player)
    });
    return fetch(request).then(onSuccess, onError);
}

function del(url) {
    const request = new Request(baseUrl + url, {
        method: "DELETE"
    });
    return fetch(request).then(onSuccess, onError);
}

function put(player, url) {
    const request = new Request(baseUrl + url, {
        method: "PUT",
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(player)
    });
    return fetch(request).then(onSuccess, onError);
}

export function getPlayers() {
    return get("player");
}

export function createPlayer(player) {
    return create(player, "player");
}

export function deletePlayer(id) {
    return del(`player/${id}`);
}

export function updatePlayer(id) {
    return put(`player/${id}`);
}