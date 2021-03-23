mp.events.add("playerReady", player => {
    global.loginCamera = mp.cameras.new('default', new mp.Vector3(-1912.1818, -576.2145, 19.5), new mp.Vector3(0,0,0), 90);
	loginCamera.setActive(true);
	
	mp.game.cam.renderScriptCams(true, false, 0, true, false);

	mp.gui.chat.activate(false);
	mp.gui.chat.show(false);
	mp.game.ui.displayRadar(false);

	setTimeout(() => {
		mp.gui.cursor.show(true, true);
	}, 500);
});

