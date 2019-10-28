let fs = require('fs');

class SvgGenerator
{
    
    constructor()
    {

    }
    initializeSvg()
    {
        // load all the svgs in the folder
    }
    saveSvg()
    {

    }
    static createSvg(body,res)
    {
        fs.writeFileSync('./images/'+body.filename,body.data,{encoding:'utf8'});
        return res.status(200).send({"message":"Succesfully created svg !"})
    }
    static readSvg(filename,res)
    {
        let data =fs.readFileSync('./images/'+filename,{encoding:'utf8'});
        return res.status(200).send(JSON.stringify(data));
    }
}
module.exports = SvgGenerator;