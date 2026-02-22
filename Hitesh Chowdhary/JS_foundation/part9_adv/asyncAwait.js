function fetchUserdata(){
    return new Promise ((resolve, reject) =>{
        setTimeout(() =>{
            reject({name: "chaicode", url: "https://chaicode.com"})
        },3000);
    })
}


async function getUserdata(){
    try{
        console.log("fetching user data...");
        const userData=await fetchUserdata();
        console.log("User data fetched successfully");
        
        console.log("User Data:",userData);
        
    } catch(error){
        console.log("Error fetching data:", error);
    }
}

getUserdata();