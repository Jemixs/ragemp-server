let authBrowser = mp.browsers.new("http://localhost:8080/");

mp.events.add({
    "AUTH::CHECK_AUTH": (login, password) => {
        mp.events.callRemote("AUTH::CHECK_AUTH", login, password);
    },
    "AUTH::ALERT_MESSAGE": (message) => {
        authBrowser.execute(`window.auth.errors('${message}')`);
    },
    "AUTH::SHOW_SPAWN": () => {
        authBrowser.execute(`window.auth.hide(false)`);
        mp.gui.cursor.show(false, false);
        mp.gui.chat.activate(true);
        mp.game.graphics.transitionFromBlurred(10);
        mp.game.ui.displayRadar(true);

        loginCamera.destroy(true);
        mp.game.cam.renderScriptCams(false, true, 1000, true, false);
    }
});