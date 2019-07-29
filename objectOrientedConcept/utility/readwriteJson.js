let fs=require('fs');
let readJson=(path)=>
{
    try {
        jsonCon = JSON.parse(fs.readFileSync(path));
       return jsonCon;
    } catch (e) {
        console.log(e)
    }
}
let writeJson=(path,content)=>
{
    try {
        content=JSON.stringify(content);
     fs.writeFileSync(path,content);
    } catch (e) {
        console.log(e)
    }
}
module.exports={readJson,writeJson}