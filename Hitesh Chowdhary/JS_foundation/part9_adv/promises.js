// creating a promise
function fetchData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let success =false;
            if(success){
                resolve("data fetch successsfully");
            }else{
                reject("data fetch failed");
            }
        },3000);
    });
}

// consuming a promse

fetchData()
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.error(error);
})





