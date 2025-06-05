import { backendUrls } from "./backendUrls.js";


export var box = {
    read: function(id) {
        return fetch(`${backendUrls.box}/${id}`)
            .then(
                function(res){return res.json()},
                function(err){ console.error(err); return err;}
            )
    },
    readAsync: function(id){
        return this.read(id)
            .then(
                function(json){ return json;},
                function(err){console.error(err); return err;}
            )

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