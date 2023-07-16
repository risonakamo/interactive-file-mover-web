import type {Meta,StoryObj} from "@storybook/react";

import {Mp3Info,Mp3InfoProps} from "components/mp3-info/mp3-info";

import {TestCover1} from "lib/sample-img";

type Story=StoryObj<Mp3InfoProps>;

const meta:Meta<Mp3InfoProps>={
  title:"mp3 info",
  component:Mp3Info,
  args:{
    title:"title of thing",
    folder:"folder location",
    duration:"03:04",

    coverImg:TestCover1
  }
};
export default meta;

export const normal:Story={

};

export const normal2:Story={
  args:{
    title:"01.どきどきアイデアをよろしく!.mp3",
    folder:"Do It Yourself!! THEME SONGS mp3",
    duration:"03:56",

    coverImg:TestCover1
  }
};