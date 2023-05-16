class Food {
    constructor(x, y){
        this.x = x
        this.y = y
    }
    // 2.2. Hệ thống vẽ thức ăn
    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, UNIT, UNIT)
    }
    clear() {
        ctx.fillStyle = BACKGROUND_COLOR
        ctx.fillRect(this.x, this.y, UNIT, UNIT)
    }
    getRandomNumber() {
        let randomNumber = Math.floor(Math.random() * (GAME_WIDTH - 40))
        randomNumber -= randomNumber % UNIT
        return randomNumber + 40

    }
    // 4.2. Xóa thức ăn cũ, tạo thức ăn mới
    spawn() {
        this.clear()
        this.x = this.getRandomNumber();
        this.y = this.getRandomNumber();
        this.draw()
    }
}