class Tool
{
    constructor(element, name, image)
    {

    }
    selectTool()
    {
        for(let i = 0;i<this.eventActions.length;i++)
        {
            if(this.eventActions[i].activator === true)
            {
                Main.canvases.getId('main').addEventListener(this.eventActions[i].event,this.eventActions[i].action);
            }
        }
    }
    unselectTool()
    {
        for()
    }
    setSpecialFunctions(eventActions)
    {
        /*
        {
            "activator":true,
            "event":"mousedown",
            "action":""
        }
        */

    }
}