import { box } from './maybeapi/box.js'

var myboxjson = await box.readAsync(8);
console.log(myboxjson)
var myboxjsonAll = await box.readAllAsync();
console.log(myboxjsonAll.length);

// works:
/*var as_postres = await box.createAsync({
    title: "This is a box title, hello! (2)",
    description: "Now the description."
});
console.log(as_postres);*/

var box_for_update = await box.readAsync(8);
box_for_update.title += " (Updated!)";
box_for_update.description += " (Updated!)";
var update_result = await box.updateAsync(8, box_for_update);
console.log(update_result)
