import {backendUrls as baseurls, backendUrls} from "./backendUrls.js";

// current thinking: it seems easier to read and debug if one only generalizes the error handlers
let promiseHandler_fail = function(err) { console.error(err); return err; };


export var box = {
    read: function(id) {
        return fetch(`${backendUrls.box}/${id}`).then( (res) => res.json(), promiseHandler_fail)
    },
    readAsync: function(id){ return this.read(id).then( (json) => json, promiseHandler_fail); },

    readAll: function() {
        return fetch(`${backendUrls.box}`).then((res) => res.json(), promiseHandler_fail)
    },
    readAllAsync: function(){ return this.readAll().then( (json) => json, promiseHandler_fail); },

    create: function(reqBody) {
        let request = new Request(baseurls.box, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": "application/json"
            }
        });
        return fetch(request).then( (res) => res.json(), promiseHandler_fail);
    },
    createAsync: function(reqBody) { return this.create(reqBody).then( (json) => json, promiseHandler_fail) },

}