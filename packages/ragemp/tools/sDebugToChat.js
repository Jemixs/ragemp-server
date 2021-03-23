mp.events.add("playerCommand", (player, command) => {
	const args = command.split(/[ ]+/);
	const commName = args.splice(0, 1)[0];
		
	if (commName === "pos") {
		console.log(player.position);
	}
});