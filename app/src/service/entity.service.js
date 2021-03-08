const BASE_PATH = 'http://localhost:8080/';

function getFullPath(path) {
    return BASE_PATH + path;
}

export function post(path, body) {
    return fetch(getFullPath(path), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => {
        if (response.ok) {
            return response;
        }

        throw new Error();
    });
}

export function get(path) {
    return fetch(getFullPath(path), {
        method: 'GET',
    }).then(response => response.json());
}
