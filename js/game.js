var fps;
var canvas;
var ctx;
var player;
var keys = [];
var tile;
var tiles = [];

var dt = 1;
var g = 10;

var gravity = 0.2;
var friction = 0.2;

var t = 0;


function init() {
	fps = window.requestAnimationFrame;
	canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");

	canvas.width = 1300;
	canvas.height = 600;

	player = {
		x : canvas.width  / 2,
		y : canvas.height - 25,
		width : 25,
		height : 25,
		vx: 0,
		a: 0,
		speed: 50,
		vy: 0,
		jump: false,
		move: 'right'
	}

	tile = {
		x: 0,
		y: canvas.height - 25,
		width: 25,
		height: 25,
		color: '#000'
	}

	document.body.addEventListener("keydown", function(e) {
		keys[e.keyCode] = true;
	});

	document.body.addEventListener("keyup", function(e) {
		keys[e.keyCode] = false;

		if(!player.jump){
			player.a = 0;
		}
		
	});

	update();
}

function update() {
	// skok
	if (keys[38]) {
		if(!player.jump) {
			player.jump = true;
			// Vn+1 = Vn - g * dt
			player.vy -= g * dt;
		}
	}

	// w prawo
	if (keys[39]) {
		if(!player.jump) {
			player.move = 'right';

			// Vn+1 = Vn - g * dt
			if(player.vx < player.speed) {
				player.vx += g * dt + player.a;
			}

			//przyspieszenie liniowe
			if(player.vx < player.speed) {
				player.a += 0.5;
			}
		}
	}

	// w lewo
	if (keys[37]) {
		if(!player.jump) {
			player.move = 'left';

			// Vn+1 = Vn - g * dt
			if(player.vx > -player.speed) {
				player.vx -= g * dt + player.a;
			}

			//przyspieszenie liniowe
			if(player.vx > -player.speed) {
				player.a += 0.5;
			}
		}
	}

		console.log(player.vx, player.a);

	// grawitacja
	if (player.jump) {
		player.vy += gravity;

		if(player.move == 'right') {
			if(player.vx < player.speed) {
				player.vx += g * dt + player.a;
			}
		}

		if (player.move == 'left') {
			if(player.vx > -player.speed) {
				player.vx -= g * dt + player.a;
			}
		}
	} else {
		player.vy = 0;
	}

	//tarcie
	player.vx *= friction;



	// Yn+1 = Yn + Vn * dt
	player.x += player.vx * dt;
	player.y += player.vy * dt;

	if (player.x >= canvas.width - player.width) {
		player.x = canvas.width - player.width;
	} else if (player.x <= 0) {
		player.x = 0;
	}

	if (player.y >= canvas.height - player.height){
		player.y = canvas.height - player.height;
		player.jump = false;
		player.vx = 0;
	}

	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#F7AAAA";
	ctx.fillRect(player.x, player.y, player.width, player.height);

	//drawTiles(tile);

	fps(update);
}

function collisionDetection(a, tiles) {
	for (i = 0; i <= tiles.length; i++) {

	}

	if(a.x < b.x + b.width && a.x + a.width > b.x && a.y < b.y + b.height && a.y + a.height > b.y) {
		collision = true;
	}
}


function drawTiles(tile) {
	var cnt = canvas.width / tile.width;
	tiles.push(tile);

	ctx.fillStyle = tile.color;
	ctx.beginPath();

	for(i = 0; i <= cnt; i++){
		ctx.rect(tile.x + i * tile.width, tile.y, tile.width, tile.height);
	}

	ctx.fill();
}

window.onload = function() {
	init();
}
