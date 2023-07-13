import "./button-1.less";

export interface Button1Props
{
  text:string
}

export function Button1(props:Button1Props):JSX.Element
{
  return <div className="button-1">{props.text}</div>;
}