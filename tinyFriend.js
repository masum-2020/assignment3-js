function tinyFriend(names){
    var tiny = names(0);
    for(var i = 0; i <names.length; i++){
        list =names [i];
        if(list.length < tiny.length){
            tiny = flist;
        }
    }
    return tiny;
}
var friendsList = tinyFriend[("jabbar","kamal","mim","abdullah","nahid")];
console.log(tinyFriend(friendsList));