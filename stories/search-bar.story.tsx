import type {Meta,StoryObj} from "@storybook/react";

import {SearchBar,SearchBarProps} from "components/search-bar/search-bar";

type Story=StoryObj<SearchBarProps>;

const meta:Meta<SearchBarProps>={
  title:"search bar",
  component:SearchBar,
  args:{
    placeholder:"MP3 Target Dir"
  }
};
export default meta;

export const normal:Story={

};