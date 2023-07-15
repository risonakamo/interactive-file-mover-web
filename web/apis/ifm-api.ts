/** use backend to search for mp3s */
export async function searchMp3(searchPath:string,includeMaybe:boolean):Promise<IfmTargetItem[]>
{
    const request:SearchMp3Request={
        searchPath,
        includeMaybe
    };

    const result:Response=await fetch(`http://localhost:4080/search-mp3`,{
        method:"POST",
        body:JSON.stringify(request),
        headers:{
            "content-type":"application/json"
        }
    });

    return result.json();
}