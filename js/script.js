function loop() {
    if(stop) {
        game.init();
    }

    player.drawPlayer();
    board.drawTiles();

    oldX = player.x;
    oldY = player.y;

    // skok
    if (game.keys[38]) {
        if(!player.jump) {
            player.jump = true;

            // prędkość w osi y: Vn+1 = Vn - g * dt
            player.vy -= game.g * game.dt;
        }
    }

    // w prawo
    if (game.keys[39]) {
        if(!player.jump) {
            player.move = 'right';

            // prędkość w osi x: Vn+1 = Vn - g * dt
            if(player.vx < player.speed) {
                player.vx += game.g * game.dt + game.a;
            }

            //przyspieszenie liniowe
            if(player.vx < player.speed) {
                game.a += 0.5;
            }

            //tarcie: Ft = -μmq
            var friction = -game.μ * game.m * game.g
            player.vx *= friction;
        }
    }

    // w lewo
    if (game.keys[37]) {
        if(!player.jump) {
            player.move = 'left';

            // prędkość w osi x: Vn+1 = Vn - g * dt
            if(player.vx > -player.speed) {
                player.vx -= game.g * game.dt + game.a;
            }

            //przyspieszenie liniowe
            if(player.vx > -player.speed) {
                game.a += 0.5;
            }

            //tarcie: Ft = -μmq
            var friction = -game.μ * game.m * game.g
            player.vx *= friction;
        }
    }

    // grawitacja
    player.vy += game.gravity;


    //detekcja kolizji
    var newX = player.x + player.vx * game.dt
    var newY = player.y + player.vy * game.dt;
    var collisions = game.collisionDetection(player, newX, newY);
    var i = 0;

    if(collisions.length) {
        while(i < collisions.length > 0) {
            var collision = collisions[i];
            i++;

            var collisionBox = {
                x1: collision.x,
                y1: collision.y,
                x2: collision.x + collision.width,
                y2:  collision.y + collision.height
            };

            var xx = game.intersect(newX, newX + player.width, collisionBox.x1,collisionBox.x2);
            var yy = game.intersect(newY, newY + player.height, collisionBox.y1,collisionBox.y2);

            var diffx = (xx[0] === newX)? xx[0]-xx[1] : xx[1]-xx[0];
            var diffy = (yy[0] === newY)? yy[0]-yy[1] : yy[1]-yy[0];

            if (Math.abs(diffx) >= Math.abs(diffy)){
                player.jump = false;
                player.vy = 0;
            } else {
                player.jump = false;
                player.vx = 0;
            }
        }
    }

    if (player.jump) {
        if(player.move == 'right') {
            if(player.vx < player.speed) {
                player.vx += game.g * game.dt;

                //opór powietrza: -kv
                var resistance = -game.k * player.vx;
                player.vx *= resistance;
            }
        }

        if (player.move == 'left') {
            if(player.vx > -player.speed) {
                player.vx -= game.g * game.dt;

                //opór powietrza: -kv
                var resistance = game.k * player.vx;
                player.vx *= resistance;
            }
        }
    } else {
        resistance = 0;
    }

    // Yn+1 = Yn + Vn * dt
    player.x += player.vx * game.dt;
    player.y += player.vy * game.dt;

    if (player.x >= canvas.width - player.width) {
        player.x = canvas.width - player.width;
    } else if (player.x <= 0) {
        player.x = 0;
    }

    if (player.y >= canvas.height - player.height){
        player.y = canvas.height + player.height;
        game.over();
    }

    fps(loop);
};

window.onload = function() {
    game.init();
}
