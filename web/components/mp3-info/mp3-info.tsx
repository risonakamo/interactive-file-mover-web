import "./mp3-info.less";

export interface Mp3InfoProps
{
  title:string
  folder:string
  duration:string

  coverImg:string
}

export function Mp3Info(props:Mp3InfoProps):JSX.Element
{
  return <div className="mp3-info">
    <div className="top">
      <div className="img-zone">
        <img src={props.coverImg}/>
      </div>

      <div className="details">
        <h1>{props.title}</h1>
        <h2>{props.folder}</h2>
        <h3>{props.duration}</h3>
      </div>
    </div>

    <div className="bot">
      {/* mp3 player goes here */}
    </div>
  </div>;
}