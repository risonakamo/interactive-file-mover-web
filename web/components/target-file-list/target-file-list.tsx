import _ from "lodash";

import {groupTargetItems} from "lib/target-item-lib";

import "./target-file-list.less";

export interface TargetFileListProps
{
  items:TargetItem[]
}

export function TargetFileList(props:TargetFileListProps):JSX.Element
{
  const groupedItems:GroupedTargetItems=groupTargetItems(props.items);

  /** render item sections */
  function r_itemSections():JSX.Element[]
  {
    return _.map(groupedItems,(items:TargetItem[],folderName:string):JSX.Element=>{
      return <div className="item-section" key={folderName}>
        <h2>{folderName}</h2>
        {_.map(items,(item:TargetItem,i:number):JSX.Element=>{
          return <p key={i}>{item.name}</p>;
        })}
      </div>;
    });
  }

  /** render when there are no items */
  function r_noItems():JSX.Element
  {
    return <div className="no-items">
      No Results
    </div>;
  }

  /** conditional selection of what to render */
  function r_conditionalInterior():JSX.Element
  {
    if (props.items.length)
    {
      return <>
        {r_itemSections()}
      </>;
    }

    return r_noItems();
  }

  return <div className="target-file-list">
    {r_conditionalInterior()}
  </div>;
}