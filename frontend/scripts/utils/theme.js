class Theme
{
    static selectedTheme = "d1";
    static themesList = ["l1","l2","l3","l4","l5","d1","d2","d3","d4","d5"];
    constructor()
    {

    }
    static initialize()
    {
        Theme.addThemeListeners();
    }
    static addThemeListeners()
    {
        let themeButtons = document.getElementsByClassName("theme_button")
        for(let i = 0; i< themeButtons.length;i++)
        {
            themeButtons[i].addEventListener("click", Theme.changeTheme)
        }
    }
    static changeTheme(event)
    {
        let themeName = event.target.dataset.theme;
        if( themeName !== Theme.selectedTheme)
        {
            let shadeClass1 = "theme_" + Theme.selectedTheme + "_1";
            let shadeClass2 = "theme_" + Theme.selectedTheme + "_2";
            let shadeClass3 = "theme_" + Theme.selectedTheme + "_3";
            let shadeClass4 = "theme_" + Theme.selectedTheme + "_4";
            let shadeClass5 = "theme_" + Theme.selectedTheme + "_5";

            let newShadeClass1 = "theme_" + themeName + "_1";
            let newShadeClass2 = "theme_" + themeName + "_2";
            let newShadeClass3 = "theme_" + themeName + "_3";
            let newShadeClass4 = "theme_" + themeName + "_4";
            let newShadeClass5 = "theme_" + themeName + "_5";

            let themeElementsShade1 = document.getElementsByClassName("theme_" + Theme.selectedTheme + "_1");
            let themeElementsShade2 = document.getElementsByClassName("theme_" + Theme.selectedTheme + "_2");
            let themeElementsShade3 = document.getElementsByClassName("theme_" + Theme.selectedTheme + "_3");
            let themeElementsShade4 = document.getElementsByClassName("theme_" + Theme.selectedTheme + "_4");
            let themeElementsShade5 = document.getElementsByClassName("theme_" + Theme.selectedTheme + "_5");

            for(let i=0; i < themeElementsShade1.length; )
            {
                console.log(themeElementsShade1);
                themeElementsShade1[i].classList.add(newShadeClass1);
                themeElementsShade1[i].classList.remove(shadeClass1);
                
            }
            for(let i=0; i < themeElementsShade2.length;)
            {
                themeElementsShade2[i].classList.add(newShadeClass2);
                themeElementsShade2[i].classList.remove(shadeClass2);
                
            }
            for(let i=0; i < themeElementsShade3.length; )
            {
                themeElementsShade3[i].classList.add(newShadeClass3);
                themeElementsShade3[i].classList.remove(shadeClass3);
                
            }
            for(let i=0; i < themeElementsShade4.length; )
            {
                themeElementsShade4[i].classList.add(newShadeClass4);
                themeElementsShade4[i].classList.remove(shadeClass4);
                
            }
            for(let i=0; i < themeElementsShade5.length;)
            {
                themeElementsShade5[i].classList.add(newShadeClass5);
                themeElementsShade5[i].classList.remove(shadeClass5);
                
            }
            Theme.selectedTheme = themeName;
        }
    }

}