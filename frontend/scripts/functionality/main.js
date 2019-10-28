static class Main
{
    
    initialize()
    {
        Main.canvases = [];
        Main.tools = [];
        let canvas = new Canvas();
        Main.canvases.push(canvas);
    }
}
Array.prototype.getCanvas(id)
{
    for(let i=0;i<Main.canvases.length;i+=1)
    {
        if(Main.canvases[i].id === id)
        {
            return Main.canvases[i];
            break;
        }
    }
    return null;
}
Array.prototype.getTool(id)
{
    for(let i=0;i<Main.tools.length;i+=1)
    {
        if(Main.tools[i].id === id)
        {
            return Main.tools[i];
            break;
        }
    }
    return null;
}