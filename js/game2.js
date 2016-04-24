var fps;
var canvas;
var ctx;

var game = {
    fps: 0,
    tile: null,
    tiles: [],
    keys: [],
    dt: 1,
    g: 10,
    gravity: 0.2,
    a: 0,
    μ: -0.02,
    m: 1,

    init: function() {
        fps = window.requestAnimationFrame;

        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        canvas.width = 1300;
        canvas.height = 600;

        player.x = canvas.width / 2;
        player.y = canvas.height - 25;

        document.body.addEventListener("keydown", function(e) {
            game.keys[e.keyCode] = true;
        });

        document.body.addEventListener("keyup", function(e) {
            game.keys[e.keyCode] = false;

            if(!player.jump){
                game.a = 0;
            }

        });

        loop.call();
    }

};


function collisionDetection(a, tiles) {
    for (i = 0; i <= tiles.length; i++) {

    }

    if(a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y) {
        collision = true;
    }
}


function drawTiles(tile) {
    var cnt = canvas.width / tile.width;
    game.tiles.push(tile);

    ctx.fillStyle = tile.color;
    ctx.beginPath();

    for(i = 0; i <= cnt; i++){
        ctx.rect(tile.x + i * tile.width, tile.y, tile.width, tile.height);
    }

    ctx.fill();
}

