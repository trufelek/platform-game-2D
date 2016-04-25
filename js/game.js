var fps;
var canvas;
var ctx;

var game = {
    fps: 0,
    tile: null,
    collision: false,
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

        canvas.width = 1200;
        canvas.height = 600;

        player.x = canvas.width / 2;
        player.y = canvas.height - 50;

        tile.y = canvas.height - 50

        document.body.addEventListener("keydown", function(e) {
            game.keys[e.keyCode] = true;
        });

        document.body.addEventListener("keyup", function(e) {
            game.keys[e.keyCode] = false;

            if(!player.jump){
                game.a = 0;
            }

        });

        //board.drawTiles();

        loop.call();
    },

    collisionDetection: function(a, x, y) {
        var b;
        for (var i = 0; i < game.tiles.length; i++) {
            b = game.tiles[i];
            if(x < b.x + b.width && x + a.width > b.x && y < b.y + b.height && y + a.height > b.y) {
                game.collision = true;
            }else{
                game.collision = false;
            }
        }

        //console.log(game.collision);
    }


};



