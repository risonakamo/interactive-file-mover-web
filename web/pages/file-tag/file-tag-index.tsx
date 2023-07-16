import {createRoot} from "react-dom/client";
import {QueryClientProvider,QueryClient} from "@tanstack/react-query";

import "./file-tag-index.less";

function FileTagIndex():JSX.Element
{
  return <>
    hello
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