
var a = 1;
var b = 2;

{

    //console.log(b);

    var a = 11; // the scope is global
    let b = 22; // the scope is inside the block

    console.log(a); // 11
    console.log(b); // 22
}

console.log(a); // 11
console.log(b); // 2