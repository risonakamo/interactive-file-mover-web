/** target items grouped by folder
 *  key: folder name
 *  val: the items */
type GroupedTargetItems=Record<string,TargetItem[]>

interface TargetItem
{
    folder:string
    name:string
}