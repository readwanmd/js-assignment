// tiny friend name in array

function tinyFriend(friends) {
    let shortLength = Infinity;
    let shortest = "";

    if (friends.length > 0) {
        for (let i = 0; i < friends.length; i++) {
            if (typeof friends[i] === 'string' && friends[i].length < shortLength) {
                shortest = friends[i];
                shortLength = friends[i].length;
            }
        }
    }
    return shortest;
}
var friendName = ["a", "salman", "sayam", "fahim", "rana", "shafe", "rajib", "enu", "riad"];

var tinyFriendName = tinyFriend(friendName);
console.log(tinyFriendName);