import httpApi from '../service/httpApi.js';
const api = new httpApi();

export function someOneIsLoggedIn() {
    return !!localStorage.getItem('user');
}

export function getLoggedInUser() {
    return JSON.parse(localStorage.getItem('user'));
}

export async function getUserByName(firstname, lastname) {
    const allUsers = await getAllUsers();
    
    return allUsers.find(user => {
        const firstnameMatches = user.firstname === firstname;
        const lastnameMatches = user.lastname === lastname;
        
        return firstnameMatches && lastnameMatches;
    })
}

function getAllUsers() {
    return api.get('/user/getAll');
}