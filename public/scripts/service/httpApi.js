export default class httpApi {
    constructor() {
        this.baseURL = 'http://localhost:8080'
    }
    
    _concatPath(endpoint) {
        return `${this.baseURL}${endpoint}`;
    }
    
    get(path) {
        return fetch(this._concatPath(path), {
                method: 'GET',
            }).then(respone => respone.json());
    }
    
    post(path, body) {
        return fetch(this._concatPath(path), {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    }
}