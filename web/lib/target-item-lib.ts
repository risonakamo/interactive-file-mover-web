import _ from "lodash";

/** convert list of target items into grouped items */
export function groupTargetItems(items:TargetItem[]):GroupedTargetItems
{
    return _.groupBy(items,(item:TargetItem):string=>{
        return item.folder;
    });
}