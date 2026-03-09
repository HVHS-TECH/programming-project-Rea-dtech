const Interaction = {
    Inside: "Inside",
    Outside: "Outside",
}
class Menu {
    constructor(x, y, w, h, items) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.items = [...items];
    }
    addItem(item) {
        this.items.push(item);
    }
    draw()
{
    push();
    translate(this.x, this.y);
    stroke(0);
    fill(255);
    rect(0, 0, this.w, this.h);
    for (let i = 0; i < this.items.length; i++) {
        {
            this.items[i].draw();
        }
        pop();
    }
    interact(mx, my)
    {
        for (let i = this.items.length; i > 0; i--) {
            let item = this.items[i];
            let inter = item.interact(mx - this.x, my - this.y);
            if (inter == Interaction.Inside) return item;
        }
        return null;
    }
    shift(dx, dy)
    {
        this.x += dx;
        this.y += dy;
    }

}

class Item {
    constructor(x, y, w, h,) {



    }






}
function setup() {
    cnv = new Canvas(windowWidth, windowHeight);

}
function draw() {
    background(220);
}