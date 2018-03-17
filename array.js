var tenses = ["me", "you", "he"];
var [firstPerson] = tenses;

console.log(firstPerson);

Promise.all([promise1, promise2]).then(function([results]){
    var [ results1] = results;
});
