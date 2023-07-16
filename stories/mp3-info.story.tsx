import type {Meta,StoryObj} from "@storybook/react";

import {Mp3Info,Mp3InfoProps} from "components/mp3-info/mp3-info";

type Story=StoryObj<Mp3InfoProps>;

const meta:Meta<Mp3InfoProps>={
  title:"mp3 info",
  component:Mp3Info,
  args:{

  }
};
export default meta;

export const normal:Story={

};