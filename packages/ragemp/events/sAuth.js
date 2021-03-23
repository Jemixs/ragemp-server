let User = require('../user/userModel').User;

mp.events.add('AUTH::CHECK_AUTH', (player, login, password) => {
    if (login.length < 4 || password.length < 8) {
        player.call("AUTH::ALERT_MESSAGE", ["Login or password incorrect SERVER"]);
        return false;
    }

    User.authorize(login, password, (err, user) => {
        if (err) {
            if (err === 404) {
                player.call("AUTH::ALERT_MESSAGE", ["Login or password incorrect"]); return false;
            } else {
                player.call("AUTH::ALERT_MESSAGE", ["SERVER - Error"]); return false;
            }
        } else {
            authorization(player, user, password);
        }
    });
});

let authorization = function (player, user, password) {
    if(!mp.players.exists(player)) return;

    player.call("AUTH::SHOW_SPAWN");
    player.mongoUser = user;
    player.password = password;
}