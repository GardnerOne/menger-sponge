// Colour scheme
const dark = 30;
const black = 0;
const light = 200;
const white = 255;
const primary = [8, 146, 208];
const secondary = [2, 222, 172];
const alt = [209, 29, 53];

class Utils {
    static randomColor() {
        let r, g, b;
        r = random(150, 255) * primary[0] / 255;
        g = random(150, 255) * primary[1] / 255;
        b = random(150, 255) * primary[2] / 255;
        alpha = 210;
        return [r, g, b, alpha];
    }
}
