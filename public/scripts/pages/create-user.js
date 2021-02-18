import getInputValue from '../helper/input.js';
import httpApi from '../service/httpApi.js';
const api = new httpApi();

const button = document.getElementById('create-user-btn');
button.addEventListener('click', handeFormSubmit)

function handeFormSubmit(event) {
    event.preventDefault();
    
    const userInformation = getUserInformation();
    createUser(userInformation);
}

function getUserInformation() {
    const firstname = getInputValue(document.getElementById('firstname'));
    const lastname = getInputValue(document.getElementById('lastname'));
    
    return {
        firstname,
        lastname
    }
}

function createUser(user) {
    api.post('/user/create', user);
}
