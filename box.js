class Box {
    constructor(x, y, z, r) {
        this.pos = createVector(x, y, z);
        this.r = r;
    }

    render() {
        fill(primary);
        noStroke();

        push();
        translate(this.pos.x, this.pos.y, this.pos.z);
        box(this.r);
        pop();
    }

    generate() {
        let boxes = [];
        for (let x = -1; x < 2; x++) {
            for (let y = -1; y < 2; y++) {
                for (let z = -1; z < 2; z++) {
                    // Only add boxes that aren't in the middle of a plane
                    let sum = abs(x) + abs(y) + abs(z);
                    if (sum > 1) {
                        let r = this.r / 3;
                        boxes.push(
                            new Box(
                                this.pos.x + x * r,
                                this.pos.y + y * r,
                                this.pos.z + z * r,
                                r)
                        );
                    }
                }
            }
        }
        return boxes;
    }
}
