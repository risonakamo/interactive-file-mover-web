// types mirror with api.rs

interface SearchMp3Request
{
    searchPath:string
    includeMaybe:boolean
}

/** target item from backend */
interface IfmTargetItem
{
    path:string
    parent:string
    itemName:string
}

/** request to submit items */
interface SubmitItemsRequest
{
    items:IfmTargetItem[]
}