class Actions
{
    static straightLineActive = () =>
    {
        let canvas = document.getElementById('main');
        canvas.addEventListener()
    }
    static draw = (element) =>
    {
        return{
            start :
            {
                element: element,
                event:"mousedown",
                action:(event) =>
                {
                    let startPoint = new Point(event.offsetX,event.offsetY);
                    let path = new Path(1);
                    Path.pathInProgress = path;
                    path.startPoint(startPoint);
                }
            },
            action :
            [
                {
                    element: element,
                    event:"mousemove",
                    action: (event)=>
                    {
                        let path = Path.pathInProgress;
                        let newPoint = new Point(event.offsetX,event.offsetY);
                        path.addPoint(newPoint);
                        
                    }
                }
            ],
            stop: 
            {
                element: element,
                event:"mouseup",
                action:(event) =>
                {
                    let path = Path.pathInProgress;
                    for(let i=0;i<Path.paths.length;i++)
                    {
                        if(Path.paths[i].id === 1)
                        {
                            path = Path.paths[i];
                        }
                    }
                    path.createLinePath();
                    Path.pathInProgress = null
                }
            }
        };
    }
    static line = (element) =>
    {
        return{
            start :
            [
                {
                    element: element,
                    event:"mousedown",
                    action:(event)=>{console.log('start line');}
                }
            ],
            stop:
            [
                {
                    element: element,
                    event:"mouseup",
                    action:() =>{ console.log('stop line');}
                }
            ]
        };
    }
    static fill = () =>
    {
        return {
            start :
            [
                {
                    event:"click",
                    action:()=>{}
                }
            ]
        };

    }
    static drawLine = () =>
    {

    }
    static drawSvg = () =>
    {

    }
    static zoomIn = () =>
    {

    }
    static zoom = () =>
    {

    }
    static move = () =>
    {

    }
    static grab = () =>
    {

    }
    static release = () =>
    {
        
    }
}