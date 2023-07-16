import {createRoot} from "react-dom/client";
import {QueryClientProvider,QueryClient} from "@tanstack/react-query";

import {Button1} from "components/button-1/button-1";
import {Mp3Info} from "components/mp3-info/mp3-info";

import {TestCover1} from "lib/sample-img";

import "./file-tag-index.less";

function FileTagIndex():JSX.Element
{
  return <>
    <section className="title-zone">
      <h1>File Tag</h1>
      <h2>Select actions to perform on items</h2>
    </section>

    <section className="info-zone">
      <Mp3Info
        title="01.どきどきアイデアをよろしく!.mp3"
        folder="Do It Yourself!! THEME SONGS mp3"
        duration="03:56"
        coverImg={TestCover1}
      />
    </section>

    <section className="button-list">
      <div className="inner">
        <Button1 text="yes"/>
        <Button1 text="no"/>
        <Button1 text="maybe"/>
      </div>
    </section>

    <section className="status">
      <p>1/82 items</p>
    </section>
  </>;
}

function main()
{
  createRoot(document.querySelector(".main")!).render(
    <QueryClientProvider client={new QueryClient()}>
      <FileTagIndex/>
    </QueryClientProvider>
  );
}

window.onload=main;