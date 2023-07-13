import type {Meta,StoryObj} from "@storybook/react";

import {TargetFileList,TargetFileListProps} from "components/target-file-list/target-file-list";

type Story=StoryObj<TargetFileListProps>;

const meta:Meta<TargetFileListProps>={
  title:"target file list",
  component:TargetFileList,
  args:{
    items:[
      {
        folder:"dir 1",
        name:"asdasd.mp3"
      },
      {
        folder:"dir 1",
        name:"asdasd.mp3"
      },
      {
        folder:"dir 1",
        name:"asdasd.mp3"
      },
      {
        folder:"dir 2",
        name:"asdasd.mp3"
      },
      {
        folder:"dir 2",
        name:"asdasd.mp3"
      },
      {
        folder:"dir 3",
        name:"asdasd.mp3"
      },
    ]
  }
};
export default meta;

export const normal:Story={

};