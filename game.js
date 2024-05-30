const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

class Enemy {
    constructor(x, y, speed) {
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    move() {
        this.x += this.speed;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 20, 20);
    }
}

class Tower {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, 40, 40);
    }
}

const enemies = [new Enemy(0, 100, 1)];
const towers = [new Tower(200, 200)];

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let enemy of enemies) {
        enemy.move();
        enemy.draw();
    }

    for (let tower of towers) {
        tower.draw();
    }

    requestAnimationFrame(gameLoop);
}

gameLoop();
