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

/** count target items into target items count obj */
export function countTargetItems(items:TargetItem[]):TargetItemsCount
{
    return {
        folders:_.keys(_.countBy(items,(item:TargetItem):string=>{
            return item.folder;
        })).length,
        items:items.length
    };
}