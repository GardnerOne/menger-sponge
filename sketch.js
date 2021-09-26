let a = 0;
let depth;
let boxes = [];

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    depth = height;

    boxes.push(new Box(0, 0, 0, width * 0.4));
}

function draw() {
    background(dark);

    rotateX(a);
    rotateY(a);
    rotateZ(a);

    lights();

    for (let b of boxes) {
        b.render();
    }
    a += 0.01;
}

function mousePressed() {
    let next = [];
    for (let b of boxes) {
        next.push(...b.generate());
    }
    boxes = next;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
