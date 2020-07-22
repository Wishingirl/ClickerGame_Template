Game.on("playerJoin", (player) => {
    player.on("initialSpawn", () => {
        player.topPrint("Click To Gain Points!")
    })
})
