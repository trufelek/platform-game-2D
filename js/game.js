var fps;
var canvas;
var ctx;
var stop = false;

var game = {
    fps: 0,
    tile: null,
    collision: false,
    collisions: [],
    tiles: [],
    keys: [],
    dt: 1,
    g: 10,
    gravity: 0.2,
    a: 0,
    μ: -0.01,
    m: 1,
    k: -0.02,

    init: function() {
        fps = window.requestAnimationFrame;

        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        canvas.width = 1200;
        canvas.height = 600

        player.y = canvas.height - 300;
        tile.y = canvas.height - 50

        document.body.addEventListener("keydown", function(e) {
            game.keys[e.keyCode] = true;
        });

        document.body.addEventListener("keyup", function(e) {
            game.keys[e.keyCode] = false;

            if(!player.jump){
                game.a = 0;
                player.vx = 0;
            }

        });

        loop.call();
    },

    collisionDetection: function(a, x, y) {
        var b;
        game.collisions = [];
        for (var i = 0; i < game.tiles.length; i++) {
            b = game.tiles[i];
            if(x < b.x + b.width && x + a.width > b.x && y < b.y + b.height && y + a.height > b.y) {
                if(b.type == 'candy') {
                    if(confirm('Sukces! Chcesz zagrać ponownie?')) {
                        game.replay();
                    } else {
                        game.over();
                    }
                } else {
                    game.collision = true;
                    game.collisions.push(b);
                }

            }
        }

        return game.collisions;
    },

    intersect: function(x1,x2,y1,y2){
        var i1 = Math.min(Math.max(x1, y1), x2);
        var i2 = Math.max(Math.min(x2, y2), x1);
        return [i1, i2];
    },

    replay: function() {
        location.reload();
    },

    over: function() {
        stop = true;
        canvas.style.display = 'none';
        var gameover = document.getElementById('gameover');
        gameover.style.display = 'block';
    }


};



