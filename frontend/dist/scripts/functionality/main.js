class Main
{
    static canvas; 
    static initialize()
    {
        Main.createCanvas();
        Main.createTools();
        Options.initialize();
    }
    static createCanvas()
    {
        Main.canvases = [];
        let mainCanvas = document.getElementById('main');
        Main.canvas = new Canvas('main',700,1000,mainCanvas,1);
    }
    static createTools()
    {
        Main.tools  = [];
        let toolbar = document.getElementById('toolbar');
        let columns = toolbar.getElementsByClassName('line');
        let tools   = columns[0].getElementsByClassName('tool-button');

        let line    = new Tool('line'   ,Actions.draw(Main.canvas.element)  ,tools[0], './frontend/images/tools/line.svg');
        let curve   = new Tool('curve'  ,[]                                 ,tools[1],'./frontend/images/tools/curve.svg');
        let grab    = new Tool('grab'   ,[]                                 ,tools[2],'./frontend/images/tools/grab.svg');
        let rotate  = new Tool('rotate' ,[]                                 ,tools[3],'./frontend/images/tools/rotate.svg');
        let zoom    = new Tool('zoom'   ,[]                                 ,tools[4],'./frontend/images/tools/zoom.svg');

        Main.tools.push(line);
        Main.tools.push(grab);
        Main.tools.push(curve);
        Main.tools.push(rotate);
        Main.tools.push(zoom);
    }

}