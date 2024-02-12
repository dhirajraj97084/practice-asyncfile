const fs=require("fs");//import file system
fs.writeFile("bio.txt","hello everone haaye ",(err)=>{ //Create file  AsyncFile_System
    console.log(err);
} )
//update async file_system
fs.appendFile("bio.txt"," how are you ",(err)=>{ 
    console.log(err);
 })

 fs.readFile("bio.txt","utf-8",(err,data)=>{ // find in terminal all data without buffer using utf-8
    console.log(data)
})
