function fetchPostData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("post data fetched");
        },2000)
    });
}

function fetchCommonData(){
        return new Promise((resolve,reject) => {
          setTimeout(() => {
            resolve("Common data fetched.");
        }, 3000);
        });
}

async function getBlogData(){
    try{
        console.log("Fetching blog data...");
        const blogdata = await fetchPostData();
        const commonData = await fetchCommonData();
        console.log(blogdata);
        console.log(commonData);
        console.log("fetch complete");
    }catch(error){
        console.log("error fetching blog data",error);
        
    }
}

getBlogData();