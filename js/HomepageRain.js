// G L O B A L
var c,ctx,rain;

// R A I N

class Rain{
    //coordiante + Lunhezzaa + Velocity
    constructor(x,y,l,v){

        this.x=x;
        this.y=y;
        this.vy=v;
        this.l=l;

    }
    show(){ // D E S I G N

        ctx.beginPath();
        ctx.strokeStyle="white";
        ctx.moveTo(this.x,this.y);
        ctx.lineTo(this.x,this.y+this.l);
        ctx.stroke();
    }

    // Inser Graavity
    fall(){

        this.y+=this.vy;

        if(this.y>c.height){
            this.x=Math.floor(Math.random()*c.width)+5;
            this.y=Math.floor(Math.random()*100)-100;
            this.l=Math.floor(Math.random()*30)*1;
            this.vy=Math.floor(Math.random()*12)*4;

        }

    }
}

// L O O P
function loop(){

    ctx.clearRect(0,0,c.width,c.height);
    rain.show();
    rain.fall();

}

// S E T U P
function setup(){

    c = document.getElementById("canvas");
    ctx = c.getContext("2d");

    rain = new Rain(10,10,20,6)

    setInterval(loop,10);

}