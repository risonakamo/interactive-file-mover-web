import {Button1} from "components/button-1/button-1";

import "./search-bar.less";

export interface SearchBarProps
{
  placeholder:string
}

export function SearchBar(props:SearchBarProps):JSX.Element
{
  return <div className="search-bar">
    <input type="text" placeholder={props.placeholder}/>
    <Button1 text="Search"/>
  </div>;
}