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

  return <div className="target-file-list">
    {r_itemSections()}
  </div>;
}