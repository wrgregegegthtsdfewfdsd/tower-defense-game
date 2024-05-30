class Enemy {
    // ваш код...

    move() {
        // Проверка, достиг ли враг края игрового поля
        if (this.x + this.speed < canvas.width) {
            this.x += this.speed;
        } else {
            // Удаление врага, если он ушел за кадр
            let index = enemies.indexOf(this);
            if (index > -1) {
                enemies.splice(index, 1);
            }
        }
    }

    // ваш код...
}

function gameLoop() {
    // ваш код...

    // Перебираем врагов
    for (let i = enemies.length - 1; i >= 0; i--) {
        let enemy = enemies[i];
        enemy.move();
        enemy.draw();
    }

    // ваш код...
}
