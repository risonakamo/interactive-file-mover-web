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

/** use backend to submit items */
export async function submitItems(items:IfmTargetItem[]):Promise<string>
{
    const request:SubmitItemsRequest={
        items
    };

    const result:Response=await fetch(`http://localhost:4080/submit-items`,{
        method:"POST",
        body:JSON.stringify(request),
        headers:{
            "content-type":"application/json"
        }
    });

    if (result.status!=200)
    {
        throw await result.text();
    }

    return result.text();
}