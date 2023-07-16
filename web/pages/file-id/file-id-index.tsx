import {createRoot} from "react-dom/client";
import {useState,useEffect,useRef} from "react";
import {useMutation,QueryClientProvider,QueryClient,
  useQuery,useQueryClient} from "@tanstack/react-query";
import pluralize from "pluralize";

import {SearchBar} from "components/search-bar/search-bar";
import {TargetFileList} from "components/target-file-list/target-file-list";
import {Button1} from "components/button-1/button-1";

import {searchMp3,submitItems} from "apis/ifm-api";

import {ifmItemsToTargetItems,countTargetItems} from "lib/target-item-lib";

import "./file-id-index.less";

function FileIdIndex():JSX.Element
{
  const [firstSearch,setFirstSearch]=useState<boolean>(false);
  const savedResults=useRef<IfmTargetItem[]>([]);

  /** get search results. updates self data and some other states */
  const getMp3sQuery=useMutation({
    networkMode:"always",
    async mutationFn(searchPath:string):Promise<TargetItem[]>
    {
      const ifmitems:IfmTargetItem[]=await searchMp3(searchPath,false);
      savedResults.current=ifmitems;
      return ifmItemsToTargetItems(ifmitems);
    },

    onSuccess()
    {
      setFirstSearch(false);
    },

    onError()
    {
      console.log("what face");
    }
  });


  /** submit the last saved items. navigates to new page if successful */
  const submitItemsQuery=useMutation({
    networkMode:"always",
    async mutationFn():Promise<string>
    {
      if (!savedResults.current.length)
      {
        console.warn("no results to submit");
        return "no results";
      }

      return submitItems(savedResults.current);
    }
  });

  /** clicked on search. use mp3 query to get mp3s and update the mp3 state */
  function h_searchSubmit(value:string):void
  {
    getMp3sQuery.mutate(value);
  }

  /** clicked submit. submit the items */
  function h_clickSubmit():void
  {
    submitItemsQuery.mutateAsync();
  }

  var searchStatusText:string="No Search";

  if (getMp3sQuery.data)
  {
    const itemsCount:TargetItemsCount=countTargetItems(getMp3sQuery.data);

    searchStatusText=`${itemsCount.folders} `
      +`${pluralize("folder",itemsCount.folders)}, `
      +`${itemsCount.items} `
      +`${pluralize("item",itemsCount.items)}`;
  }

  // if first search has happened, but the data is empty, then search gave no results. change
  // status text accordingly
  if (getMp3sQuery.data!=undefined && !getMp3sQuery.data.length && !firstSearch)
  {
    searchStatusText="Search found no results";
  }

  return <>
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
      <div className="left">
        <p>{searchStatusText}</p>
      </div>
      <div className="right">
        <Button1 text="Submit" onClick={h_clickSubmit}/>
      </div>
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