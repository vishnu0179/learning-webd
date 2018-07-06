function task(done){
    console.log("We are doing a task")
    setTimeout(done,550)
}
 task(function(){
     console.log("Task Was Done");
 })


console.log("we did a task")

/////////////////////////////////////////
////Async Function Practical Example////
///////////////////////////////////////

function downloadFile(url, downloaded){
    console.log("File to be downloaded: " + url)
    
    setTimeout(function(){
        let filepath="C:\\Windows\\"+url.split("/").pop()
        console.log("Your file was downloaded at : "+ filepath)
        downloaded(filepath)
    },3000)
}

function resizeFile(filepath,resized){
    console.log("File to be resized: "+ filepath)
    setTimeout(function(){
        let newPath= filepath.split(".")[0]+"-resized."+filepath.split(".")[1]
        resized(newPath);
    },2000)
}

function uploadFile(path,upload){
    
    setTimeout(function(){
        let s = "https://www.cb.lk/"+ path.split("\\").pop()
        console.log("Your File is uploading to: "+s )
        upload(s)
    })
}

downloadFile("https://www.google.com/logo.png",function(downloadFile){
    //console.log("download: "+ downloadFile)
    resizeFile(downloadFile,function(path){
        //console.log("Resized File : " + path )
        uploadFile(path,function(up){
            console.log("successfully uploaded: " + up)
        })
    })
    
})