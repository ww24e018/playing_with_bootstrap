import { api } from './maybeapi/backEndApiAccessorObjects.js'

console.log((await api.boxes.readAllAsync()).length);
console.log((await api.comments.readAllAsync()).length);
// am speechless.

console.log((await api.users.readAllAsync()).length);