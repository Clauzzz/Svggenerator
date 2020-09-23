class Canvas
{
    id;
    element;
    type;
    contextInput;
    gridVertiWidth = 40;
    gridHorizWidth = 40;
    
    gridBackgroundColor ="#000000";
    gridForegroundColor ="#CCCCCC";

    infoWidth = 50;
    infoBackgroundColor = "#111111";
    infoForegroundColor ="#CCCCCC";
    canvasBackgroundColor = "#babbff";
    canvasForegroundColor = "#";

    objectsDrawn = [];

    constructor(id,element,type)
    {
        try
        {
            for(let i = 0; i < Main.canvases.length; i+=1)
            {
                if(Main.canvases[i].id === id)
                {
                    throw "Canvas with the same id already exists!";
                }
            }
            if(!(typeof element === "object" && element.tagName && element.tagName === "CANVAS"))
            {
                throw "Element is not a canvas!";
            }
            this.id = id;
            this.element = element;
            this.type = type;
            this.contextInput = this.element.getContext("2d");
            Main.canvases.push(this);
            this.calculateSizesBasedOnScreen();
            this.drawGrid();
            this.drawInfoBar();
            this.element.addEventListener("mousemove",this.moveOnCanvas);
        }
        catch(err)
        {
            console.error(err);
        }

    }
    moveOnCanvas = (event) =>
    {
        let w = event.x - event.target.offsetLeft -this.gridVertiWidth;
        let h = event.y - event.target.offsetTop -this.gridHorizWidth;
        w = w > 0 ? w : 0;
        h = h > 0 ? ( h < (this.height - this.infoWidth - this.gridHorizWidth) ? h : this.height - this.infoWidth  - this.gridHorizWidth) : 0;
        
        this.writeCoordinates(w,h);
    }
    clearCoordinates = () =>
    {
        let aux = this.contextInput.fillStyle;
        this.contextInput.fillStyle = this.infoBackgroundColor;
        this.contextInput.fillRect(this.gridHorizWidth , this.height - this.infoWidth,this.gridHorizWidth + 100, this.height );
        this.contextInput.fillStyle = aux;
    }
    writeCoordinates = (x,y) =>
    {
        this.clearCoordinates();
        let aux = this.contextInput.fillStyle;
        this.contextInput.fillStyle = this.infoForegroundColor;
        this.contextInput.font = "16px Roboto";
        this.contextInput.fillText(x +", "+ y, this.gridHorizWidth + 20 , this.height - this.infoWidth/2 +8);
        this.contextInput.fillStyle = aux;
    }
    calculateSizesBasedOnScreen = () =>
    {
        this.width = Number(getComputedStyle(this.element).width.replace('px',''));
        this.height = Number(getComputedStyle(this.element).height.replace('px',''));
        this.element.width = this.width;
        this.element.height = this.height;
    }
    drawGrid = () =>
    {
        this.drawGridBar();
        this.drawGridLines();
    }
    drawGridBar = () =>
    {
        let aux = this.contextInput.fillStyle;
        this.contextInput.fillStyle = this.gridBackgroundColor;
        this.contextInput.fillRect(0,0,this.width, this.gridHorizWidth);
        this.contextInput.fillRect(0,0,this.gridVertiWidth,this.height - this.infoWidth);
        this.contextInput.fillStyle = aux;
    }
    drawGridLines = () =>
    {
        let maxWidth = this.width - this.gridVertiWidth;
        for(let i = 0; i < maxWidth; i++)
        {
            if( i % 100 == 0)
            {
                this.drawHFullGridLine(this.gridVertiWidth + i, this.gridHorizWidth);
            }
            else if( i % 50 == 0)
            {
                this.drawHHalfFullGridLine(this.gridVertiWidth + i, this.gridHorizWidth);
            }
            if( i % 10 == 0)
            {
                this.drawHLongGridLine(this.gridVertiWidth + i, this.gridHorizWidth);
            }
        }
        let maxHeight= this.height - this.infoWidth;
        for(let i = this.gridHorizWidth; i < maxHeight; i++)
        {
            if( (i - this.gridHorizWidth) % 100 == 0)
            {
                this.drawVFullGridLine(this.gridVertiWidth, i);
            }
            else if( (i- this.gridHorizWidth) % 50 == 0)
            {
                this.drawVHalfFullGridLine(this.gridVertiWidth, i);
            }
            if( (i - this.gridHorizWidth) % 10 == 0)
            {
                this.drawVLongGridLine(this.gridVertiWidth, i);
            }
        }
    }

    drawHFullGridLine = (x, y) =>
    {
        this.contextInput.strokeStyle = this.gridForegroundColor;
        this.contextInput.lineWidth = 1;
        this.contextInput.moveTo(x+1, y-5);
        this.contextInput.lineTo(x+1, 0);
        this.contextInput.stroke();
    }
    drawHHalfFullGridLine = (x, y) =>
    {
        this.contextInput.strokeStyle = this.gridForegroundColor;
        this.contextInput.lineWidth = 1;
        this.contextInput.moveTo(x+1, y-5);
        this.contextInput.lineTo(x+1, this.gridHorizWidth/2 - 5);
        this.contextInput.stroke();
    }
    drawHLongGridLine = (x, y) =>
    {
        this.contextInput.strokeStyle = this.gridForegroundColor;
        this.contextInput.lineWidth = 1;
        this.contextInput.moveTo(x+1, y-5);
        this.contextInput.lineTo(x+1, y-12);
        this.contextInput.stroke();
    }
    drawVFullGridLine = (x, y) =>
    {
        this.contextInput.strokeStyle = this.gridForegroundColor;
        this.contextInput.lineWidth = 1;
        this.contextInput.moveTo(x-5, y);
        this.contextInput.lineTo(0, y);
        this.contextInput.stroke();
    }
    drawVHalfFullGridLine = (x, y) =>
    {
        this.contextInput.strokeStyle = this.gridForegroundColor;
        this.contextInput.lineWidth = 1;
        this.contextInput.moveTo(x-5, y);
        this.contextInput.lineTo(this.gridVertiWidth/2 - 5, y);
        this.contextInput.stroke();
    }
    drawVLongGridLine = (x, y) =>
    {
        this.contextInput.strokeStyle = this.gridForegroundColor;
        this.contextInput.lineWidth = 1;
        this.contextInput.moveTo(x- 5, y);
        this.contextInput.lineTo(x- 12, y);
        this.contextInput.stroke();
    }

    drawInfoBar = () =>
    {
        let aux = this.contextInput.fillStyle;
        this.contextInput.fillStyle = this.infoBackgroundColor;
        this.contextInput.fillRect(0,this.height - this.infoWidth,this.width,this.height);
        this.contextInput.fillStyle = aux;
    }

    setSizes = (width, height) =>
    {
        this.width = width;
        this.height = height;
        this.element.width = this.width;
        this.element.height= this.height;
    }
    clearCanvas()
    {
        this.contextInput.clearRect(this.gridVertiWidth, this.gridHorizWidth, this.width, this.height - this.infoWidth);
    }
    drawLine(pointA, pointB)
    {
        let aux = this.contextInput.strokeStyle;
        let path = new Path2D();
        this.contextInput.strokeStyle = 'black';
        this.contextInput.lineWidth = 5;
        path.moveTo(pointA.x,pointA.y);
        path.lineTo(pointB.x,pointB.y);
        this.contextInput.stroke(path);
        this.contextInput.strokeStyle = aux;
    }
}