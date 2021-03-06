import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { Stack } from "../Stack";
import { Pane, PaneProps, PaneOption, PaneOptionProps } from ".";

export default { title: "Pane", component: Pane };

export const Default = () => (
  <States<Partial<PaneProps>>>
    <Pane>
      <PaneOption onClick={action("onClick")}>the enemy</PaneOption>
      <PaneOption onClick={action("onClick")}>is invisible</PaneOption>
      <PaneOption onClick={action("onClick")}>and insidious</PaneOption>
      <PaneOption
        onClick={action("onClick")}
        borderTop="1px solid"
        borderColor="hint"
      >
        gathering strength
      </PaneOption>
      <PaneOption onClick={action("onClick")}>from the bonds</PaneOption>
      <PaneOption onClick={action("onClick")}>of human connection</PaneOption>
    </Pane>
  </States>
);

export const Option = () => (
  <States<PaneOptionProps>
    states={[
      {},
      { hover: true },
      { active: true },
      { focus: true },
      { disabled: true },
    ]}
  >
    <PaneOption onClick={action("onClick")}>the enemy</PaneOption>
  </States>
);

export const Multiple = () => (
  <States>
    <Stack direction="horizontal">
      <Pane flex="1">
        <PaneOption>a</PaneOption>
        <PaneOption>b</PaneOption>
        <PaneOption>c</PaneOption>
        <PaneOption>d</PaneOption>
      </Pane>
      <Pane flex="1">
        <PaneOption>a</PaneOption>
        <PaneOption>b</PaneOption>
        <PaneOption>c</PaneOption>
        <PaneOption>d</PaneOption>
      </Pane>
    </Stack>
  </States>
);
