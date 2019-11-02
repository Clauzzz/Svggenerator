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
                    // create path and add the first point
                }
            },
            action :
            {
                element: element,
                event:"mousemove",
                action: (event)=>
                {
                    // add the points
                }
            },
            stop: 
            {
                element: element,
                event:"mouseup",
                action:(event) =>
                {
                // optimize shit}
                }
            }
        };
    }
    static line = (element) =>
    {
        return{
            start :
            {
                element: element,
                event:"mousedown",
                action:(event)=>{console.log('start line');}
            },
            stop: {
                element: element,
                event:"mouseup",
                action:() =>{ console.log('stop line');}
            }
        };
    }
    static fill = () =>
    {
        return {
            start :
            {
                event:"click",
                action:()=>{}
            }
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