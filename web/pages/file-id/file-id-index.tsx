import {createRoot} from "react-dom/client";
import {useState,useEffect} from "react";
import {useMutation,QueryClientProvider,QueryClient} from "@tanstack/react-query";

import {SearchBar} from "components/search-bar/search-bar";
import {TargetFileList} from "components/target-file-list/target-file-list";
import {Button1} from "components/button-1/button-1";

import {searchMp3} from "apis/ifm-api";

import {ifmItemsToTargetItems} from "lib/target-item-lib";

import "./file-id-index.less";

function FileIdIndex():JSX.Element
{
  const getMp3sQuery=useMutation({
    async mutationFn(searchPath:string):Promise<TargetItem[]>
    {
      console.log("doing");
      return ifmItemsToTargetItems(await searchMp3(searchPath,false));
    },

    onError()
    {
      console.log("what face");
    }
  });

  /** clicked on search. use mp3 query to get mp3s and update the mp3 state */
  function h_searchSubmit(value:string):void
  {
    console.log("whjy");
    getMp3sQuery.mutate(value);
    console.log("???");
  }

  return <>
    <p>{getMp3sQuery.status}</p>
    <section className="title-zone">
      <h1>File ID</h1>
      <h2>Select files to be processed</h2>
    </section>

    <section className="search-zone">
      <SearchBar placeholder="MP3 Folder Path" onSubmit={h_searchSubmit}/>
    </section>

    <section className="result-zone">
      <TargetFileList items={getMp3sQuery.data || []}/>
    </section>

    <section className="button-zone">
      <Button1 text="Submit"/>
    </section>
  </>;
}

function main()
{
  createRoot(document.querySelector(".main")!).render(
    <QueryClientProvider client={new QueryClient()}>
      <FileIdIndex/>
    </QueryClientProvider>
  );
}

window.onload=main;