import httpApi from './httpApi.js';
const api = new httpApi();

async function login(user) {
    const allUsers = await fetchAllUsers().then(users => users);
    const isUserInDatabase = userExistsInDatabase(allUsers, user);;
    
    if (isLoggedIn(user) || !isUserInDatabase) {
        return;
    }

    localStorage.setItem('user', JSON.stringify(user));
}

function logout(user) {
    if (!isLoggedIn(user)) {
        return;
    }

    localStorage.removeItem('user');
}

function isLoggedIn(user) {
    const userInLocaleStorage = localStorage.getItem('user');

    if (!userInLocaleStorage) {
        return;
    }

    return userInLocaleStorage.firstname === user.firstname &&
        userInLocaleStorage.lastname === user.lastname;
}

function fetchAllUsers() {
    return api.get('/user/getAll');
}

function userExistsInDatabase(allUsers, user) {
    return allUsers.some(currentUser => {
        const firstnameMatches = currentUser.firstname === user.firstname;
        const lastnameMatches = currentUser.lastname === user.lastname;

        return firstnameMatches && lastnameMatches;
    })
}

export default {
    login,
    logout,
    isLoggedIn
};
