var db = flatfile('/db/Score.db');
let readydb = 0
db.on('open', function() {
    readydb = 1
});
Game.on("playerJoin", (p) => {
    p.setEnvironment({
        skyColor: "6ff542"
    })
    
    p.on("initialSpawn", () => {
        let vaildate = db.has(p.userId) // check if key exists
        if (vaildate == true) {
            score = db.get(p.userId) // get current score
            p.message(`\\c5Loaded save data with ${score} Points`)
            p.message(`is data loaded? please confirm`)
            p.setScore(score) // and load it in
        } else { // create key if no key is found
            p.message(`\\c5WARN: \\c0Save data not found! Creating save data.`)
            db.put(p.userId, p.score) // save the key and score (default 0)
        }
    })
})
