import {useRef} from "react";

import {Button1} from "components/button-1/button-1";

import "./search-bar.less";

export interface SearchBarProps
{
  placeholder:string

  onSubmit(value:string):void
}

export function SearchBar(props:SearchBarProps):JSX.Element
{
  const inputElement=useRef<HTMLInputElement>(null);

  /** clicked search button. trigger submit event with the value of the input element */
  function h_buttonClick():void
  {
    if (!inputElement.current?.value)
    {
      return;
    }

    props.onSubmit(inputElement.current?.value);
  }

  return <div className="search-bar">
    <input type="text" placeholder={props.placeholder} ref={inputElement}/>
    <Button1 text="Search" onClick={h_buttonClick}/>
  </div>;
}