function Rectangle(x,y,width,height,color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.render = function (){
        context.fillRect(rectangle.x, rectangle.y, rectangle.width, rectangle.height, rectangle.color);
        context.fillStyle = "#000000";
        context.fill();
    }
}
