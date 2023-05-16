class Snake {
    constructor() {
        this.body = [
            new Vector2d(UNIT * 6, UNIT * 3),
            new Vector2d(UNIT * 7, UNIT * 3),
            new Vector2d(UNIT * 8, UNIT * 3),
        ]
        this.head = this.body[0];
        this.speed = new Vector2d(-1, 0)
    }
    // 2.1. Hệ thống vẽ rắn
    draw() {
        ctx.fillStyle = 'blue'
        ctx.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT)
        ctx.fillStyle = SNAKE_COLOR;
        for(let i = 1; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x,this.body[i].y, UNIT, UNIT)
        }
    }
    clear() {
        ctx.fillStyle = BACKGROUND_COLOR
        ctx.fillRect(this.body[0].x, this.body[0].y, UNIT, UNIT)
        ctx.fillStyle = BACKGROUND_COLOR;
        for(let i = 1; i < this.body.length; i++) {
            ctx.fillRect(this.body[i].x,this.body[i].y, UNIT, UNIT)
        }
    }
    move() {
        this.clear();

        for (let i = this.body.length - 1; i >= 1; i--) {
            this.body[i].x = this.body[i - 1].x
            this.body[i].y = this.body[i - 1].y
        }

        this.body[0].x += this.speed.x * UNIT
        this.body[0].y += this.speed.y * UNIT

        this.draw();
    }
    // 4. Kiểm tra và chạm với thức ăn
    checkEat(food) {
        let head = this.body[0]
        return food.x === head.x && food.y === head.y
    }
    //4.1. tăng chiều dài rắn
    grow() {
        this.clear();
        
        let snakeLength = this.body.length
        let mountX = this.body[snakeLength - 1].x - this.body[snakeLength - 2].x
        let mountY = this.body[snakeLength - 1].y - this.body[snakeLength - 2].y
    
        let newPart = new Vector2d(
            this.body[snakeLength -1].x + mountX,
            this.body[snakeLength -1].y + mountY,
        )
        this.body.push(newPart)

        this.draw();
    }
    // 5. Kiểm tra với tường và chính nó
    checkCollisionWithWall() {
        let head = this.body[0];
        if (head.y < 40 || head.y >= GAME_WIDTH - 40) {
            return true;
          }
          if (head.x < 40 || head.x >= GAME_WIDTH - 40) {
            return true;
          }
        for (let i = 1; i < this.body.length; i++) {
            if (head.x === this.body[i].x && head.y === this.body[i].y) {
                return true;
            }
        }
        return false;
    }
     
}
