import { box } from './maybeapi/box.js'

var myboxjson = await box.readAsync(4);
console.log(myboxjson)
var myboxjsonAll = await box.readAllAsync();
console.log(myboxjsonAll.length);

