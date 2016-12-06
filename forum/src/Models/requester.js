/// <reference path="../../../../../../typings/express-serve-static-core/express-serve-static-core.d.ts" />
/// <reference path="../../../../../../typings/node/node.d.ts" />

/// <reference path="../../../../../../typings/jquery/jquery.d.ts" />

import $ from 'jquery';

let Requester = (function () {  
    let app_id = 'kid_r1h555zQl';
    let app_secret = 'fbf75c991ca146ba884a141423a85d83';
    let kinveyBaseUrl = 'https://baas.kinvey.com/';

    function makeAuth(type) {
        switch (type) {
            case 'basic':
                return { 'Authorization': "Basic " + btoa(app_id + ":" + app_secret)};
            case 'kinvey':
                return { 'Authorization': "Kinvey " + sessionStorage.getItem('authToken') };
            default: break;
        }
    }

    function get(module, uri, auth) {
        const kinveyLoginUrl = kinveyBaseUrl + module + "/" + app_id + "/" + uri;
        const kinveyAuthHeaders = makeAuth(auth);

        return $.ajax({
            method: "GET",
            url: kinveyLoginUrl,
            headers: kinveyAuthHeaders
        });
    }

    function post(module, uri, data, auth) {
        const kinveyLoginUrl = kinveyBaseUrl + module + "/" + app_id + "/" + uri;
        const kinveyAuthHeaders = makeAuth(auth);

        let request = {
            method: "POST",
            url: kinveyLoginUrl,
            headers: kinveyAuthHeaders
        };

        if (data !== null) {
            request.data = data;
        }
        return $.ajax(request);
    }

    return{
        get,
        post
    }
})()


export default Requester;