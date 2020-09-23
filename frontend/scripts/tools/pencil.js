class Pencil
{
    static strokeColor;
    constructor()
    {

    }
    static select = () =>
    {
        Main.canvas.element.style.cursor = "url(./frontend/images/cursors/pencil.svg) 0 32, auto";
    }
}