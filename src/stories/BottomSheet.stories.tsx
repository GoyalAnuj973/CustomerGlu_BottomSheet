import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { DemoChild } from "../AppStyles";
import { BottomSheet } from "../components/BottomSheet";
import { generatePlaceholderContent } from "../data";
import { closedTheme, openTheme } from "../theme";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "BottomSheet",
  component: BottomSheet,
} as ComponentMeta<typeof BottomSheet>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BottomSheet> = (args) => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  return (
    <ThemeProvider theme={isOpen ? openTheme : closedTheme}>
      <BottomSheet
        {...args}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <DemoChild>{generatePlaceholderContent(0).join(", ")}</DemoChild>
      </BottomSheet>
    </ThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Google Keep",
  subtitle: "Add to a note",
};

export const DebugMode = Template.bind({});
DebugMode.args = {
  title: "Google Keep",
  subtitle: "Add to a note",
  isDebugMode: true,
};

export const ShortBoi = Template.bind({});
ShortBoi.args = {
  title: "Google Keep",
  subtitle: "Add to a note",
  initialDrawerDistanceTop: 600,
};

export const NoTitleOrSubtitle = Template.bind({});
NoTitleOrSubtitle.args = {};
