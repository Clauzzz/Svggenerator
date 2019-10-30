class Tool
{
    constructor(id, imageSrc, actions,element)
    {
        this.id = name;
        this.image= imageSrc;
        this.actions = actions;
        this.element = element;
        
        let image = document.createElement("IMG");
        image.src = imageSrc;
        image.classList.add("tool-icon");
        this.element.appendChild(image);
        this.element.addEventListener('click',this.selectTool);
    }
    selectTool = () =>
    {
        if(Main.selectedTool)
        {
            Main.selectedTool.unselectTool();
        }
        Main.selectedTool = this;
        this.element.removeEventListener('click',this.selectTool);
        this.element.addEventListener('click',this.unselectTool);
        this.element.classList.add('tool-button-focused');

        /*
        for(let i = 0;i<this.eventActions.length;i++)
        {
            if(this.eventActions[i].activator === true)
            {
                Main.canvases.getId('main').addEventListener(this.eventActions[i].event,this.eventActions[i].action);
            }
        }*/
    }
    unselectTool = () =>
    {
        if(Main.selectedTool == this)
        {
            Main.selectedTool = null; 
        }
        this.element.addEventListener('click',this.selectTool);
        this.element.classList.remove('tool-button-focused')
    }
    setSpecialFunctions = (eventActions) =>
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