import _ from "lodash";

/** convert list of target items into grouped items */
export function groupTargetItems(items:TargetItem[]):GroupedTargetItems
{
    return _.groupBy(items,(item:TargetItem):string=>{
        return item.folder;
    });
}

/** convert ifm target items to our target item */
export function ifmItemsToTargetItems(items:IfmTargetItem[]):TargetItem[]
{
    return _.map(items,(item:IfmTargetItem):TargetItem=>{
        return {
            folder:item.parent,
            name:item.itemName
        };
    });
}