export async function searchMp3(searchPath:string,includeMaybe:boolean):Promise<void>
{
    const request:SearchMp3Request={
        searchPath:"/",
        includeMaybe:false
    };

    console.log("ad");

    fetch(`http://localhost:4080/search-mp3`,{
        method:"POST",
        body:JSON.stringify(request),
        headers:{
            "content-type":"application/json"
        }
    });
}