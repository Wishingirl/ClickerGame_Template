var db = flatfile('/db/Score.db');


let tool = new Tool("Credit Card")
tool.model = 136999
Game.on("playerJoin", (player) => {
    player.on("initialSpawn", () => {
        player.equipTool(tool)
    })
})
tool.on("activated", (p) => {
    console.log(p.username + " HAS TAKEN MONERS");
    p.setScore(p.score + 1)
    db.put(p.userId, p.score)
})
