import {createRoot} from "react-dom/client";
import {useState,useEffect} from "react";

import {SearchBar} from "components/search-bar/search-bar";
import {TargetFileList} from "components/target-file-list/target-file-list";
import {Button1} from "components/button-1/button-1";

import {searchMp3} from "apis/ifm-api";

import "./file-id-index.less";

function FileIdIndex():JSX.Element
{
  const [selectedItems,setSelectedItems]=useState<TargetItem[]>([]);

  return <>
    <section className="title-zone">
      <h1>File ID</h1>
      <h2>Select files to be processed</h2>
    </section>

    <section className="search-zone">
      <SearchBar placeholder="MP3 Folder Path"/>
    </section>

    <section className="result-zone">
      <TargetFileList items={selectedItems}/>
    </section>

    <section className="button-zone">
      <Button1 text="Submit"/>
    </section>
  </>;
}

function main()
{
  createRoot(document.querySelector(".main")!).render(<FileIdIndex/>);
}

window.onload=main;