import type {Meta,StoryObj} from "@storybook/react";

import {Button1,Button1Props} from "components/button-1/button-1";

type Story=StoryObj<Button1Props>;

const meta:Meta<Button1Props>={
  title:"button 1",
  component:Button1,
  args:{
    text:"text"
  }
};
export default meta;

export const normal:Story={

};

export const normal2:Story={
  args:{
    text:"Search"
  }
};

export const normal3:Story={
  args:{
    text:"Submit"
  }
};