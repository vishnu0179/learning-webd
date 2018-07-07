//////deferred resove//////
/*
function downloadPromise(){
    return new Promise(function(resolve , reject){
        console.log("Starting to download the file")
        setTimeout(function(){
            console.log("download is complete");
            resolve()
        },3000)
    })
}

let downloadFile = downloadPromise()

setTimeout(function(){
    downloadFile.then(function(){
        console.log("After Download")
    })
},5000)

*/


function downloadFile(url){
    return new Promise(function(resolve, reject){
        if(!url.startsWith("http")){
            reject(new Error("url does not start with  http"))
        }else{
            setTimeout(function(){
                let file=url.split('/').pop()
                resolve(file)
            },3000)
        }
    })
}

function resizeFile(filepath){
    return new Promise(function(resolve,reject){
        if(!filepath.endsWith(".png")){
            reject(new Error("File not supported"))
        }else{
            setTimeout(function(){
                let resize=filepath.split(".")[0]+"-resized.png"
                resolve(resize)
            },3000)
        }
    })
}

function uploadFile(upload){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            let uploadPath="https://www.imgur.com/"+upload
            resolve(uploadPath)
        })
    })
}

downloadFile("http://cb.lk/image.png")
    .then(resizeFile)
    .then(uploadFile)
    .then(function(file){
        console.log("Your file has been uploaded to" + file)
    })
    .catch(function(err){
        console.error(err);
    })