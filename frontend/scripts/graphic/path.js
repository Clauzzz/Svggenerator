class Path
{
    //<path d="M150 0 L75 200 L225 200 Z" />
    static paths = [];
    constructor(id)
    {
        this.points = [];
        this.path = null;
        this.id = id;
        Path.paths.push(this);
    }
    
    addPoint = (point) =>
    {
        try
        {
            if(typeof point ==="object" && typeof point.x ==='number' && typeof point.y ==='number')
            {
                this.points.push(point);
            }
            else throw "Not a valid point !";
            
        }
        catch(err)
        {
            console.error(err);
        }
    }
    static resetPaths = () =>
    {
        this.paths = null;
        this.points = [];
    }
    static checkAutofill = () =>
    {
        if(Options.autofill ===true)
        {
            
        }
    }
    calculateMaxHeightDiff = () =>
    {
        let maxDiff = 0;
        for(let i=0;i<this.points.length;i++)
        {
            for(let j=0;j<this.points.length;j++)
            {
                let diff =0;
                diff = Math.abs(this.points[i].y - this.points[j].y);
                if(diff>=maxDiff)
                {
                    maxDiff = diff;
                }
            }

        }
        return maxDiff;
    }
    calculateMaxWidthDiff = () =>
    {
        let maxDiff = 0;
        for(let i=0;i<this.points.length;i++)
        {
            for(let j=0;j<this.points.length;j++)
            {
                let diff =0;
                diff = Math.abs(this.points[i].x - this.points[j].x);
                if(diff>=maxDiff)
                {
                    maxDiff = diff;
                }
            }

        }
        return maxDiff;
    }
    optimizePath = () =>
    {
        let ratio = 0.1; // this is temporary. it will be taken from Options.js
        let maxYDiff = this.calculateMaxHeightDiff();
        let maxXDiff = this.calculateMaxWidthDiff();
        let finalPoints = [];

        let pointsCopy = {};
        pointsCopy = Object.assign(pointsCopy,this.points);
        pointsCopy = Object.values(pointsCopy);

        finalPoints.push(pointsCopy[0]);

        for(let i=1;i<pointsCopy.length-1;i++)
        {
            if(Math.abs(pointsCopy[i-1].x-pointsCopy[i].x) >= maxXDiff * ratio ||
                Math.abs(pointsCopy[i-1].y-pointsCopy[i].y) >= maxYDiff * ratio)
            {
                finalPoints.push(pointsCopy[i]);
            }
            else{
                pointsCopy.splice(i,1);
                i-=1;
            }
        }
        finalPoints.push(pointsCopy[pointsCopy.length-1]);
        return finalPoints;
    }
    startPoint = (point) =>
    {
        this.points.push(point);
    }
    createLinePath = (points) =>
    {
        // <path d="M150 0 L75 200 L225 200 Z" />
        let optimizedPoints = this.optimizePath();
        this.path = [];
        for(let i = 1; i< optimizedPoints.length; i+=1)
        {
            let optimizedX="L"+optimizedPoints[i].x;
            this.path.push(optimizedX);
            this.path.push(optimizedPoints[i].y);
        }
        for(let i=0;i<optimizedPoints.length-1;i++)
        {
            Main.canvas.drawLine(optimizedPoints[i],optimizedPoints[i+1]);
        }
        
        //this.path.push(" Z");
        this.path = this.path.join(" ");
        this.path = "M"+optimizedPoints[0].x +" "+optimizedPoints[0].y+" " +this.path;
        this.pathBody ="<path d=\""+this.path +"\" />";
        Path.writePath(this.pathBody);
    }
    static writePath = (path) =>
    {
        document.getElementById('codepanel').getElementsByClassName('svgcontainer')[0].innerText = path;
    }
}