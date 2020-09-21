

Main.initialize();


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