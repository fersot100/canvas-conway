
import Vector2 from './vectors';
import { setTimeout } from 'core-js/library/web/timers';
// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const play = document.querySelector('#play');
const stop = document.querySelector('#stop');
const clear = document.querySelector('#clear');
const speedSelect = document.querySelector('#speed');

canvas.width = innerWidth/2;
canvas.height = canvas.width;

const colors = [
    '#2a2a2a',
    '#6b7783',
    '#511c16',
    '#0c3c60',
    '#ff703f'
];
let speed = 400;
let paused = true;
play.addEventListener('click', () => {
    paused = false;
    update();
});
stop.addEventListener('click', () => {
    paused = true;
});
clear.addEventListener('click', () => {
    grid.cells.forEach((row) => {
        row.forEach((cell) => {
            cell.active = false;
            cell.draw();
        })
    })
});
speedSelect.addEventListener('mousemove', (e) => {
    const value = e.target.value;
    speed = 1000 / value;
    console.log(speed)
})
// Event Listeners
addEventListener('resize', () => {
    canvas.width = innerHeight/2;
    canvas.height = canvas.width;
    start()
});
canvas.addEventListener('click', (e) => {
    const mouse = new Vector2(e.clientX, e.clientY);
    const offset = new Vector2(e.target.offsetLeft, e.target.offsetTop)
    grid.toggleCell(grid.getIndexAtCoord(mouse.subtract(offset)));
});

// Utility 
function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
}

function distance(v1, v2) {
    const xDist = v2.x - v1.x;
    const yDist = v2.y - v1.y;

    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}
class Grid {
    constructor(width, height){
        this.width = width;
        this.height = height;
        this.cellDim = canvas.width / width;
        this.cells = [];
    }
    getIndexAtCoord(coord){
        return new Vector2(
            Math.floor(coord.x / this.cellDim),
            Math.floor(coord.y / this.cellDim) 
        );
    }
    toggleCell(index){
        console.log(index);
        this.cells[index.x][index.y].active =  !this.cells[index.x][index.y].active;
        this.cells[index.x][index.y].draw();
    }
    draw(){
        for(let x = 0; x < this.width; x++){
            this.cells[x] = [];
            for(let y = 0; y < this.height; y++){
                const pos = new Vector2(
                    canvas.width / grid.width * x,
                    canvas.height / grid.height * y
                )
                this.cells[x][y] = new Cell(pos);
                this.cells[x][y].draw();
            }
        }
    }
}
var grid = new Grid(30, 30);

class Cell {
    constructor(pos){
        this.pos = pos.copy();
        this.active = false;
        this.newState = false;
    }
    applyState(){
        this.active = this.newState;
    }
    draw(){
        console.log(this.active)
        c.beginPath();
        c.fillStyle = this.active ? 'yellow' : '#aaa';
        c.strokeStyle = 'black';
        c.rect(this.pos.x, this.pos.y,
            canvas.width / grid.width, canvas.height / grid.height,
        );
        c.fill();
        c.stroke();
        c.closePath();
    }
}
// Implementation
function start() {
    grid.draw();
}
const directions = {
    n: new Vector2(0,-1),
    ne: new Vector2(1,-1),
    e: new Vector2(1,0),
    se: new Vector2(1,1),
    s: new Vector2(0,1),
    sw: new Vector2(-1,1),
    w: new Vector2(-1,0),
    nw: new Vector2(-1,-1)
}
// Animation Loop
function update() {
    if(!paused){
        for(let x = 0; x < grid.cells.length; x++){
            for(let y = 0; y < grid.cells[0].length; y++){
                let neighbors = 0;
                for(let dir in directions){
                    const d = directions[dir];
                    try{
                        if(grid.cells[x + d.x][y + d.y].active)
                        neighbors++;
                    }catch(e){
                    }
                }
                if(neighbors <= 1 || neighbors >= 4){
                    grid.cells[x][y].newState = false;
                }
                else if(neighbors === 3){
                    grid.cells[x][y].newState = true;
                }else if (neighbors === 2) {
                    grid.cells[x][y].newState = true;
                }
            }
        }
        for(let x = 0; x < grid.cells.length; x++){
            for(let y = 0; y < grid.cells[0].length; y++){
                grid.cells[x][y].applyState();
                grid.cells[x][y].draw();
            }
        }
    }
    setTimeout(update, speed);
}

start();
update();