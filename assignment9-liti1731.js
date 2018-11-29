var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var arr=[];


canvas.addEventListener("mousemove",start);


function start(event){
	arr.push( new Point(event.offsetX,event.offsetY));
}	

function Point(x,y){
    	this.x=x;
        this.y=y;
        this.random1=(Math.round(Math.random() * 254)).toString();
	    this.random2=(Math.round(Math.random() * 254)).toString();
	    this.random3=(Math.round(Math.random() * 254)).toString();//get random color
	    this.opacity = 1;
	    this.radius = 5;//?
    }
    

function draw(){
    ctx.clearRect(0,0,600,600);
    arr.forEach(function(v,i){
  	    ctx.fillStyle = "rgba("+v.random1+","+v.random2+","+v.random3+","+v.opacity+")";
	    ctx.beginPath();
	    ctx.arc(v.x, v.y,v.radius,0,2*Math.PI,true);//x,y,radius,begin,finish,true
	    ctx.fill();
	    if (v.radius>0) {
		   v.opacity-=0.1;
		   v.radius--;
	    }
   });
   requestAnimationFrame(draw);
}
		
draw();