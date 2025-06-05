import { backendUrls } from "./backendUrls.js";


export var box = {
    readAsync: function(id){
        return fetch(`${backendUrls.box}/${id}`)
            .then(
                function(res){return res.json()},
                function(err){ console.error(err); return err;}
            )
            .then(
                function(json){ return json;},
                function(err){console.error(err); return err;}
            )

    },
    readAllAsync: function(){
        return fetch(`${backendUrls.box}`)
            .then(
                function(res){return res.json()},
                function(err){ console.error(err); return err;}
            )
            .then(
                function(json){ return json;},
                function(err){console.error(err); return err;}
            )

    }
}