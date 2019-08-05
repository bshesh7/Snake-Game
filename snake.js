var _canvas = document.getElementById('canvas');
var _context = _canvas.getContext("2d");
var snake_w = 10;
var snake_h = 10;


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

function draw(){
    _context.clearRect(0,0,_canvas.width,_canvas.height)    
    for(i=0;i<len;i++){
    var X = snake[i].x;
    var Y = snake[i].y;
    drawSnake(X,Y)
}


//snake head
snakeX = snake[0].x;
snakeY = snake[0].y;
snakeX++
snake.pop();
// new head
var newHead = {
    x: snakeX,
    y: snakeY
}

snake.unshift(newHead);
}
setInterval(draw,1000);
