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
    fill: '#F7AAAA',
    drawPlayer: function() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = player.fill;
        ctx.fillRect(player.x, player.y, player.width, player.height);
    }
}