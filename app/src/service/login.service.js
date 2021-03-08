export default class LoginService {
    login(user) {
        localStorage.setItem('user', JSON.stringify(user));
    }

    logout() {
        localStorage.removeItem('user');
    }

    isLoggedIn() {
        return !!localStorage.getItem('user');
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}
