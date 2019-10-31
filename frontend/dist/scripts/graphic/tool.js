class Tool
{
    constructor(id, actions,element, imageSrc)
    {
        this.id = name;
        this.image= imageSrc;
        this.actions = actions;
        this.element = element;
        this.addElement();

    }
    addElement = () =>
    {
        let image = document.createElement("IMG");
        image.src = this.image;
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
        this.addToolFunctionality();
        
    }
    addToolFunctionality = () =>
    {
        let x = this.actions;
        if(typeof x.start!=='undefined')
        {
            if(typeof x.start.element!=='undefined' 
            && typeof x.start.event!=='undefined' )
            {
                if(typeof x.start.action!=='undefined')
                {
                    if(typeof x.action!=='undefined' 
                    && typeof x.action.element!=='undefined'
                    && typeof x.action.event!=='undefined'
                    && typeof x.action.action!=='undefined')
                    {
                        this.actionReminder = true;
                    }
                    x.start.element.addEventListener(x.start.event,this.startAction);
                }
            }
        }
        if(typeof this.actions.stop!=='undefined')
        {
            let x = this.actions;
            if(typeof x.stop!=='undefined')
            {
                if(typeof x.stop.element!=='undefined' 
                && typeof x.stop.event!=='undefined' )
                {
                    if(typeof x.start.action!=='undefined')
                    {
                        x.stop.element.addEventListener(x.stop.event,this.stopFunction);
                    }
                }
            }
        }
    }
    startAction =(event)=>
    {
        let x = this.actions;
        if(typeof this.actionReminder!=='undefined')
        {
            x.action.element.addEventListener(x.action.event,x.action.action);
            delete this.actionReminder;
        }
        x.start.action(event);
    }
    stopFunction = (event) =>
    {
        let x = this.actions;
        if(typeof x.action!=='undefined' 
        && typeof x.action.element!=='undefined'
        && typeof x.action.event!=='undefined'
        && typeof x.action.action!=='undefined')
        {
            x.action.element.removeEventListener(x.action.event,x.action.action);
            this.actionReminder = true;
        }
        x.stop.action(event);
    }
    unselectTool = () =>
    {
        if(Main.selectedTool == this)
        {
            Main.selectedTool = null; 
        }
        this.element.addEventListener('click',this.selectTool);
        this.element.classList.remove('tool-button-focused');
        this.removeToolFunctionality();
    }
    removeToolFunctionality = () =>
    {
        let x = this.actions;
        if(typeof x.start!=='undefined')
        {
            if(typeof x.start.element!=='undefined' 
            && typeof x.start.event!=='undefined' )
            {
                if(typeof x.start.action!=='undefined')
                {
                    x.start.element.removeEventListener(x.start.event,this.startAction);   
                }
            }
        }
        if(typeof this.actions.stop!=='undefined')
        {
            let x = this.actions;
            if(typeof x.stop!=='undefined')
            {
                if(typeof x.stop.element!=='undefined' 
                && typeof x.stop.event!=='undefined' )
                {
                    if(typeof x.start.action!=='undefined')
                    {
                        x.stop.element.removeEventListener(x.stop.event,this.stopFunction);
                        x.action.element.removeEventListener(x.action.event,x.action.action);
                        delete this.actionReminder;
                    }
                }
            }
        }
    }
}