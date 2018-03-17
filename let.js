var funcs = [];
var i = 0;
for (i = 0; i < 10; i++){
    funcs.push(function(){console.log(i)})
    funcs[0]();
}

funcs.forEach(function(func){
    func();
})

// var i = 0;
// function hello(){
//      i = 5;
//     console.log(i);
// }
// hello();