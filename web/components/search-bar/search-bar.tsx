import {Button1} from "components/button-1/button-1";

import "./search-bar.less";

export interface SearchBarProps
{

}

export function SearchBar(props:SearchBarProps):JSX.Element
{
  return <div className="search-bar">
    <input type="text"/>
    {/* button goes here */}
  </div>;
}