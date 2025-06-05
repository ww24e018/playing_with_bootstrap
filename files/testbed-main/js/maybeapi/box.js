import { backendUrls } from "./backendUrls.js";

// current thinking: it seems easier to read and debug if one only generalizes the error handlers
let promiseHandler_request_success = function(res) { return res.json() } ;
let promiseHandler_request_fail = function(err) { console.error(err); return err; };

let promiseHandler_json_success = function(json) { return json } ;
let promiseHandler_json_fail = function(err) { console.error(err); return err; };


export var box = {
    read: function(id) {
        return fetch(`${backendUrls.box}/${id}`)
            .then((res) => res.json(), promiseHandler_request_fail)
    },
    readAsync: function(id){
        return this.read(id)
            .then((json) => json, promiseHandler_json_fail);
    },

    readAll: function() {
        return fetch(`${backendUrls.box}`)
            .then(
                function(res){return res.json()},
                function(err){ console.error(err); return err;}
            )
    },
    readAllAsync: function(){
        return this.readAll()
            .then(
                function(json){ return json;},
                function(err){console.error(err); return err;}
            )

    }
}