/// <reference path="../../../../../../typings/express-serve-static-core/express-serve-static-core.d.ts" />
/// <reference path="../../../../../../typings/node/node.d.ts" />

/// <reference path="../../../../../../typings/jquery/jquery.d.ts" />

import requester from './requester';
import observer from './observer';

let user = (function () {  
    function saveSession(userInfo) {
        let userAuth = userInfo._kmd.authtoken;
        sessionStorage.setItem('authToken', userAuth);
        let userId = userInfo._id;
        sessionStorage.setItem('userId', userId);
        let username = userInfo.username;
        sessionStorage.setItem('username', username);

        observer.onSessionUpdate();
    }

    function register(username, password, callback) {
        let userData = {
            username,
            password
        };

        requester.post('user', '', userData, 'basic')
            .then(registerSuccess);

        function registerSuccess(userInfo) {
            //observer.showSuccess('Successful registration.');
            observer.onSessionUpdate();
            saveSession(userInfo);
            callback(true);
        }
    }

    function login(username, password, callback) {  
        let userData = {
            username,
            password
        };

        requester.post('user', 'login', userData, 'basic')
            .then(loginSuccess);

        function loginSuccess(userInfo) {  
            //observer.showSuccess('Successful login');
            observer.onSessionUpdate();
            saveSession(userInfo);
            callback(true);
        }
    }

    function logout(callback) {
        requester.post('user', '_logout', null, 'kinvey')
            .then(logoutSuccess);


        function logoutSuccess(response) {
            sessionStorage.clear();
            observer.onSessionUpdate();
            callback(true);
        }
    }

    return{
        register,
        login,
        logout
    }
})()

export default user;