const P1 = {x: 0, y: 0};
const P2 = {x: 0, y: 0};
const P3 = {x: 0, y: 0};
const P4 = {x: 0, y: 0};
const P5 = {x: 0, y: 0};
const P6 = {x: 0, y: 0};
const P7 = {x: 0, y: 0};
const P8 = {x: 0, y: 0};

function setup() {
    createCanvas(windowWidth, windowHeight)
    P2.x=windowWidth;
    P2.y=windowHeight;
    P3.y=windowHeight;
    P4.x=windowWidth;
    P5.x=Math.floor(windowWidth / 2);
    P6.x=Math.floor(windowWidth / 2);
    P6.y=windowHeight;
    P7.y=Math.floor(windowHeight / 2);
    P8.x=windowWidth;
    P8.y=Math.floor(windowHeight / 2);
}

function draw(){
	clear();
    ecuapp(P1, P2);
    ecuapp(P3, P4);
    ecuapp(P5, P6);
    ecuapp(P7, P8); 
}

function ecuapp(p1, p2){
    const dx = p2.x - p1.x;
    const dy = p2.y - p1.y;
    const m = dy / dx;
    const b = p1.y - m * p1.x;

    point(p1.x, p1.y);
    let x = p1.x;
    let y
    while(x != p2.x){
        y = m * x + b;
        point(x, y);
        x++;
    }
    if(p1.x == p2.x){
		y = p1.y 
		while(y != p2.y){
			point(x, y)
			y++
		}
	}    
}