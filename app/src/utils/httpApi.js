function get(endpoint) {
    return fetch(endpoint, {
        method: 'GET',
    });
}

function post(endpoint, body = {}) {
    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
}

export default {
    post,
    get
};
