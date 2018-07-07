function downloadFile(url){
    return new Promise(function(resolve , reject){
        if(!url.startsWith("http")){
            reject(new Error("Url not starts with http"))
        }else{
            console.log("Downloading file from: " + url)
            setTimeout(function(){
                let filePath= url.split("/").pop()
                resolve(filePath)
            },1000)
        }
    })
}

function resizeFile(filePath){
    return new Promise(function(resolve , reject){
        if(!filePath.endsWith(".jpg")){
            reject(new Error("File not Supported"))
        }else{
            console.log("Resizing File: " + filePath)
            setTimeout(function(){
                let newPath = filePath.split(".")[0] +"-resized"+filePath.split(".")[1]
                resolve(newPath)
            },1000)
        }
    })
}

function uploadFile(file){
    return new Promise(function(resolve, reject){
        console.log("Uploading File to: "+ file)
        setTimeout(function(){
            uploadUrl = "http://imgur.com/"+file
            resolve(uploadUrl)
        },1000)
    })
}

Promise.all([
    downloadFile("http://www.cb.lk/img.jpg"),
    downloadFile("http://www.google.com/logo.jpg"),
    downloadFile("http://www.github.com/image.jpg")
]).then(function(downloadValues){
    return Promise.all(downloadValues.map(resizeFile))
}).then(function(resizedValues){
    return Promise.all(resizedValues.map(uploadFile))
}).then(function(uploadValues){
    console.log(uploadValues)
})
 .catch(function(err){
     console.error(err)
 })