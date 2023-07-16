import {TestCover1} from "lib/sample-img";

import "./mp3-info.less";

export interface Mp3InfoProps
{

}

export function Mp3Info(props:Mp3InfoProps):JSX.Element
{
  return <div className="mp3-info">
    <div className="top">
      <div className="img-zone">
        <img src={TestCover1}/>
      </div>

      <div className="details">
        <h1>title of thing</h1>
        <h2>folder location</h2>
        <h3>03:04</h3>
      </div>
    </div>

    <div className="bot">
      {/* mp3 player goes here */}
    </div>
  </div>;
}