import httpApi from '../utils/httpApi.utils.js';
const api = new httpApi();

const button = document.getElementById('create-user-btn');
button.addEventListener('click', handeFormSubmit)

function handeFormSubmit(event) {
    event.preventDefault();
    
    const userInformation = getUserInformation();
    createUser(userInformation);
}

function getUserInformation() {
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    
    return {
        firstname,
        lastname
    }
}

function createUser(user) {
    api.post('/user/create', user);
}
