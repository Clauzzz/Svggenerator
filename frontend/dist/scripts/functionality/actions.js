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
                action:() =>{console.log('start drawing');}
            },
            action :
            {
                element: element,
                event:"mousemove",
                action: (event)=>{ console.log('drawiiing');}
            },
            stop: 
            {
                element: element,
                event:"mouseup",
                action:() =>{console.log('stop drawing');}
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