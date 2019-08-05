var _canvas = document.getElementById('canvas');
var _context = _canvas.getContext("2d");
var snake_w = 10;
var snake_h = 10;
var dir = "right";

function drawSnake(x,y){
_context.fillStyle= "white";
_context.fillRect(x*snake_w,y*snake_h,snake_w, snake_h)
_context.fillStyle = "black";
_context.strokeRect(x*snake_w,y*snake_h,snake_w, snake_h)
}



var len = 4;
snake = [];
for(var i = len-1;i>=0;i--){
    snake.push({
        x:i,
        y:0
    })
}

document.addEventListener("keydown",dirControl)

function dirControl(e)
{
    if(e.keyCode==37){
        dir="left";
    }
    else if(e.keyCode==38){
        dir="up";
    }
    else if(e.keyCode==39){
        dir="right";
    }
    else if(e.keyCode==40){
        dir="down";
    }
   
}
//create apples

    var apple = {
        x:Math.floor(Math.random() * 49) + 1,
        y:Math.floor(Math.random() * 49) + 1
    }

//draw apple
function drawApple(x,y){
    _context.fillStyle= "red";
    _context.fillRect(x*snake_w,y*snake_h,snake_w, snake_h)
    _context.fillStyle = "black";
    _context.strokeRect(x*snake_w,y*snake_h,snake_w, snake_h)
    
}

function draw(){
    _context.clearRect(0,0,_canvas.width,_canvas.height)    
    for(i=0;i<len;i++){
    var X = snake[i].x;
    var Y = snake[i].y;
    drawSnake(X,Y)

}

drawApple(apple.x,apple.y);

//snake head
snakeX = snake[0].x;
snakeY = snake[0].y;






if(dir=="right"){
    snakeX++
}

else if(dir=="left"){
    snakeX--
}
else if(dir=="up"){
    snakeY--
}
else if(dir=="down"){
    snakeY++
}

snake.pop();
// new head
var newHead = {
    x: snakeX,
    y: snakeY
}

snake.unshift(newHead);
}
setInterval(draw,100);


    