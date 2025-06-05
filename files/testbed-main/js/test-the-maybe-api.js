import { box } from './maybeapi/box.js'

var myboxjson = await box.readAsync(4);
console.log(myboxjson)
var myboxjsonAll = await box.readAllAsync();
console.log(myboxjsonAll.length);

// works:
/*var as_postres = await box.createAsync({
    title: "This is a box title, hello! (2)",
    description: "Now the description."
});
console.log(as_postres);*/



