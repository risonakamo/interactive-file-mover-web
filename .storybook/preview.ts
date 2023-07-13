import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds:{
      default:"white",
      values:[
        {
          name:"white",
          value:"#fff"
        },
        {
          name:"sr",
          value:"#36363e"
        }
      ]
    }
    // layout: "centered"
  },
};

export default preview;
