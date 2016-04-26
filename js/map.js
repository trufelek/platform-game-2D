// kafelki
var tile = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    fill: '#000',
    img: 'img/tile.png',
    type: 'ground'
}

var candy = {
    x: 0,
    y: 0,
    width: 50,
    height: 50,
    fill: '#000',
    img: 'img/candy.png',
    type: 'candy'
}

//mapa
var board = {
    level: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

    drawTiles: function() {
        ctx.fillStyle = tile.fill;
        ctx.beginPath();

        for(var i = 0; i < board.level.length; i++) {
            for(var j = 0; j < board.level[i].length; j++) {
                if(board.level[i][j] == 1){
                    var t = {
                        x: j * tile.width,
                        y: i * tile.height,
                        width: tile.width,
                        height: tile.height,
                        type: tile.type
                    }

                    var img = new Image;
                    img.src = tile.img;

                    ctx.drawImage(img, t.x, t.y, t.width, t.height);
                    game.tiles.push(t);
                } else if(board.level[i][j] == 2) {
                    var t = {
                        x: j * candy.width,
                        y: i * candy.height,
                        width: candy.width,
                        height: candy.height,
                        type: candy.type
                    }

                    var img = new Image;
                    img.src = candy.img;

                    ctx.drawImage(img, t.x, t.y, t.width, t.height);
                    game.tiles.push(t);
                }
            }
        }

        ctx.fill();
    },
}