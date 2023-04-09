// 设置画布

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 生成随机颜色值的函数

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}
// 定义 Shape 构造器
class Shape{
    constructor(x, y, velX, velY) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
     }
}
// 定义 EvilCircle 构造器
class EvilCircle extends Shape{
    constructor(x, y) {
        super(x, y,20,20)
    this.color="white";
    this.size=10;
    }
    
    draw() {
        ctx.beginPath();
        lineWidth=3;
        ctx. strokeStyle = this.color;
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
        ctx.stroke();
     }
     checkBounds() {
        if ((this.x + this.size) >= width) {
            this.x -= this.size;
        }
  
        if ((this.x - this.size) <= 0) {
            this.x += this.size;
        }
  
        if ((this.y + this.size) >= height) {
            this.y -= this.size;
        }
  
        if ((this.y - this.size) <= 0) {
            this.y += this.size;
        }
  
     }
     
     
}
window.addEventListener('keydown', (e) => {
    switch(e.key) {
      case 'a':
        this.x -= this.velX;
        break;
      case 'd':
        this.x += this.velX;
        break;
      case 'w':
        this.y -= this.velY;
        break;
      case 's':
        this.y += this.velY;
        break;
    }
  });


// 定义 Ball 构造器

class Ball extends Shape{

    constructor(x, y, velX, velY, color, size) {
        super(x, y, velX, velY);
    
        this.color = color;
        this.size = size;
        this.exists = true;
      }
    
// 定义彩球绘制函数

   draw() {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
   }
// 定义彩球更新函数

   update() {
      if ((this.x + this.size) >= width) {
         this.velX = -(Math.abs(this.velX));
      }

      if ((this.x - this.size) <= 0) {
         this.velX = Math.abs(this.velX);
      }

      if ((this.y + this.size) >= height) {
         this.velY = -(Math.abs(this.velY));
      }

      if ((this.y - this.size) <= 0) {
         this.velY = Math.abs(this.velY);
      }

      this.x += this.velX;
      this.y += this.velY;
   }
// 定义碰撞检测函数

   collisionDetect() {
      for (const ball of balls) {
         if (!(this === ball)) {
            const dx = this.x - ball.x;
            const dy = this.y - ball.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + ball.size) {
              ball.color = this.color = randomRGB();
            }
         }
      }
   }

}
// 定义一个数组，生成并保存所有的球

const balls = [];

while (balls.length < 25) {
   const size = random(10,20);
   const ball = new Ball(
    // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离

      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      randomRGB(),
      size
   );

  balls.push(ball);
}
// 定义一个循环来不停地播放

function loop() {
   ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
   ctx.fillRect(0, 0,  width, height);

   for (const ball of balls) {
     ball.draw();
     ball.update();
     ball.collisionDetect();
   }

   requestAnimationFrame(loop);
}

loop();