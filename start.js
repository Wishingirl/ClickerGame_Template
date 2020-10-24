const nh = require('node-hill')

nh.startServer({
    gameId: 23891, // Your game id here
    
    port: 42480, // Your port id here (default is 42480)
    
    local: false, // Whether or not your server is local
    
    // map: './maps/mygame.brk', - Your .brk file location here
    
    scripts: './user_scripts', // Your .js files location
    
    modules=['flatfile'] // Your npm modules you want to add to the VM 
    
    // For more help: https://meta_data.gitlab.io/node-hill/interfaces/gamesettings.html
})
