/// <reference path="../../../../../../typings/express-serve-static-core/express-serve-static-core.d.ts" />
/// <reference path="../../../../../../typings/node/node.d.ts" />

/// <reference path="../../../../../../typings/jquery/jquery.d.ts" />

import requester from './requester';
import observer from './observer';

let category = (function () {

    function create(title, text, callback) {
        let userData = {
            title,
            text,
            views: 0,
            answers: 0
        };

        requester.post('appdata', 'categories', userData, 'kinvey')
            .then(registerSuccess);

        function registerSuccess(userInfo) {
            //observer.showSuccess('Successful registration.');
            observer.onSessionUpdate();
            callback(true);
        }
    }

    return{
        create
    }
})()

export default category;