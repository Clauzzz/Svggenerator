class Svg
{
    constructor(paths,strokeColor,fillColor)
    {
        this.paths = paths;
        this.width = 0;
        this.height = 0;
        this.maxY = 0;
        this.maxX = 0;
        this.minY = 0;
        this.minX = 0;
    }

    calculateWidth()
    {
        for(let i =0;i<this.paths.length;i++)
        {
            if(this.paths[i].y <= this.minY)
            {
                this.paths[i].y = this.minY;
                this.height = this.maxY - this.minY;
            }
            if(this.path[i].y >= this.maxY)
            {
                this.maxY[i] = this.paths[i].y;
                this.height = this.maxY - this.minY;
            }
        }
    }
    calculateHeight()
    {
        for(let i =0;i<this.paths.length;i++)
        {
            if(this.paths[i].x <= this.minX)
            {
                this.paths[i].x = this.minX;
                this.width = this.maxX - this.minX;
            }
            if(this.path[i].x >= this.maxX)
            {
                this.maxX[i] = this.paths[i].x;
                this.width = this.maxX - this.minX;
            }
        }
    }
    addPoint(point)
    {
        this.points.push(point);
    }
    static generateSvg()
    {
        this.body ='<svg width="'+this.width+'" height ="'+this.height+'">';
        for(let i=0;i<this.paths.length;i++)
        {

        }
        '<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="red" stroke-width="4" fill="yellow" /></svg>'
    }
    showBody()
    {
        
    }
    /*autoConnect()
    {
        for(let i=0;i<this.paths.length;i++)
        {
            for(let j=0;i<this.paths.length)
        }
    }*/
}