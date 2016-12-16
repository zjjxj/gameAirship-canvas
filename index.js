var  canvas = document.getElementById('canvas');
var  ctx = canvas.getContext('2d');
var  chips=[];      //存放碎片
var  size=20;       //碎片及飞船大小
var isOver=false;
var airShip={       //飞船位置
    x:140,
    y:190
};

var timer=setInterval(createChip,50);

function createChip(){
    var x1=Math.random()*300;
    var y1=10;
    if(Math.ceil(x1)%5===0){
        chips.push({x:x1,y:y1});
    }
    ctx.clearRect(0, 0, 300, 400);
    ctx.fillStyle="white";
    ctx.fillRect(airShip.x, airShip.y, size,size);
    createNewchip();
}

function createNewchip(){
    chips.map(function(data){
        ctx.fillStyle="red";
        ctx.fillRect(data.x, data.y, size,size);
        if(Math.abs(airShip.x-data.x)<size&&Math.abs(airShip.y-data.y)<=size){
            gameOver();
        }
        data.y += 5;
    })
}

function gameOver(){
    clearInterval(timer);
    ctx.fillStyle="blue";
    ctx.font="50px Arial";
    ctx.fillText("Game Over!",15,200);
}

document.onkeydown= function(event){
    if(event.keyCode == 37){
        if(airShip.x<=0)
        {
            airShip.x=canvas.width-size;
        }
        else
            airShip.x-=5;
    }
    else if(event.keyCode == 38 && airShip.y>0){
        airShip.y-=5;
    }
    else if(event.keyCode == 39){
        if(airShip.x>=280)
        {
            airShip.x=0;
        }
        airShip.x+=5;
    }
    else if(event.keyCode == 40&&airShip.y<canvas.height-size){
        airShip.y+=5;
    }
}











