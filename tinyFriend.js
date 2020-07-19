function tinyFriend(names){
    var smallest = names[0];
    for(var i = 0; i <names.length; i++){
        var currentName = names [i];
        if(currentName > smallest){
            smallest = currentName;
        }
    }
    return smallest;
}
var smallestName = tinyFriend(["jabbar","kamal","mim","abdullah","nahid"]);
console.log(smallestName);