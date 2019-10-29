class Main
{
    
    static initialize()
    {

        Main.createCanvas();
        Main.createTools();
    }
    static createCanvas()
    {
        Main.canvases = [];
        let canvas = new Canvas('main',700,1000,'test',1);
        Main.canvases.push(canvas);
    }
    static createTools()
    {
        Main.tools = [];
        let toolbar = document.getElementById('toolbar');
        let columns = toolbar.getElementsByClassName('line');
        let tools = columns[0].getElementsByClassName('tool-button')

        let line = new Tool('line','./frontend/images/tools/line.svg',[],tools[0]);
        let curve = new Tool('curve','./frontend/images/tools/curve.svg',[],tools[1]);
        let grab = new Tool('grab','./frontend/images/tools/grab.svg',[],tools[2]);
        let rotate = new Tool('rotate','./frontend/images/tools/rotate.svg',[],tools[3]);
        let zoom = new Tool('zoom','./frontend/images/tools/zoom.svg',[],tools[4]);

        Main.tools.push(line);
        Main.tools.push(grab);
        Main.tools.push(curve);
        Main.tools.push(rotate);
        Main.tools.push(zoom);
    }

}