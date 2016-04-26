// gracz
var player = {
    x : 0,
    y : 0,
    width : 50,
    height : 50,
    vx: 0,
    speed: 50,
    vy: 0,
    jump: false,
    move: 'right',
    img: 'img/bear.png',
    drawPlayer: function() {
        var img = new Image;
        img.src = player.img;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, player.x, player.y, player.width, player.height);
    }
}