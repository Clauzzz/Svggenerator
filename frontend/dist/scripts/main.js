

Main.initialize();













let toolButton = document.getElementsByClassName('button');
// ColorPickers
let colorPicker = document.getElementById('colorPicker');
let colorPicker2 = document.getElementById('colorPicker2');
let currentColorDiv = document.getElementById('currentColor');

// Boards

//let inputBoard = document.getElementById('inputBoard');
//let outputBoard = document.getElementById('outputBoard');

// Contexts
//let contextInput = inputBoard.getContext("2d");
//let contextOutput = outputBoard.getContext("2d");

let currentTool = null;

// Drawing

let pathPoints = [];
let prevPosX = null;
let prevPosY = null;

triggerAction = (e)=>
{
    if(currentTool)
    {
        currentTool.classList.remove('button-active');
    }
    
    currentTool = e.target;
    e.target.classList.add('button-active');
    switch(currentTool.dataset.action)
    {
        case "changeColor":
            toggleColorPicker(e,1);
            break;
        case "line":
            inputBoard.addEventListener('mousedown',mouseDown);
            break;
    }
}
function toggleColorPicker(e,toggleValue)
{
    console.log(toggleValue);
    if(toggleValue)
    {
        
        colorPicker.style.top = (e.pageY - 220) + "px";
        colorPicker.style.left = e.pageX+"px";
        colorPicker.style.display ="block";

        console.log(Number(colorPicker.style.height));
        colorPicker.addEventListener("click",toggleColorPicker);
    }
    else
    {
        colorPicker.removeEventListener("click",toggleColorPicker);
        colorPicker.style.display = 'none';
    }
    console.log(e);
}
function line(e)
{
    console.log(e);
}
for(let i =0; i<toolButton.length;i++)
{
    toolButton[i].addEventListener('click',triggerAction);
}





//inputBoard.addEventListener('contextmenu',mouseContextMenu);

function mouseMove(e)
{
    contextInput.fillstyle ="black";
    if(prevPosX && prevPosY)
    {
        contextInput.moveTo(prevPosX,prevPosY);
        contextInput.lineTo(e.offsetX/500 * inputBoard.width,e.offsetY/ 500 * inputBoard.height );
        contextInput.stroke();
    }
    prevPosX = e.offsetX/500 * inputBoard.width ;
    prevPosY = e.offsetY/500 * inputBoard.height;

    pathPoints.push(new Point(prevPosX,prevPosY));
}

function mouseDown(e)
{
    inputBoard.addEventListener('mousemove',mouseMove);
    inputBoard.addEventListener('mouseup',mouseUp);
}
function mouseUp(e)
{
    prevPosX = null;
    prevPosY = null;
    inputBoard.removeEventListener('mousemove',mouseMove);
    inputBoard.removeEventListener('mouseup',mouseUp);
    inputBoard.addEventListener('mousedown',mouseDown);
    drawSvg();
}
function mouseContextMenu(e)
{
    e.preventDefault();
    console.log(e);
}
function generalAjax(json)
{
	let ajax = new XMLHttpRequest();
	ajax.onreadystatechange=function()
	{	
		if(this.readyState==4 && this.status==200)
		{
			if(json.fcallback)
			{
				json.fcallback(JSON.parse(this.response),json.args);
			}
		}
	}
	ajax.open(json.method,json.url,true);
	ajax.setRequestHeader("Content-Type","application/json");
	if(json.method=="POST")
	{	
		ajax.send(JSON.stringify(json.body));
	}
	else
	{
		ajax.send();
	}
}
function getSvg()
{
    let json = {};
    json.filename = 'test.svg';
    json.method = "GET";
    json.url ="/getSvg" + "/"+json.filename;
    json.fcallback = receivedSvg;
    generalAjax(json);
}
function receivedSvg(args)
{
    console.log(args);
}

function drawSvg()
{
    let json = {};
    json.body = {
        "filename":"test.svg",
        "data":'<svg width="100" height="100"><circle cx="50" cy="50" r="40" stroke="red" stroke-width="4" fill="yellow" /></svg>'
    };
    json.method = "POST";
    json.url ="/createSvg";
    json.fcallback = sentSvg;
    generalAjax(json);
}
function sentSvg(args)
{
    if(args.message.indexOf('Succes')!==-1)
    {
        getSvg();
    }  
}

