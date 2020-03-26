import React from "react";
import { action } from "@storybook/addon-actions";
import { States } from "storybook-states";
import { PaneOption } from "../Pane";
import { Stack } from "../Stack";
import { Button } from "../Button";
import { Dropdown, DropdownProps } from "./Dropdown";

export default { title: "Dropdown", component: Dropdown };

export const Default = () => (
  <States<Partial<DropdownProps>>
    states={[{}, { children: <PaneOption>alone</PaneOption> }]}
  >
    <Dropdown label="the past">
      <PaneOption as="a" href="#markov">
        a markov blanket
      </PaneOption>

      <PaneOption as="a" href="#insulation">
        scattered insulation
      </PaneOption>
      <PaneOption onClick={action("onClick")}>a speech act</PaneOption>
    </Dropdown>
  </States>
);

export const InContext = () => (
  <States>
    <Stack direction="horizontal">
      <Button flex="1">within</Button>

      <Dropdown flex="1" label="the past">
        <PaneOption as="a" href="#markov">
          a markov blanket
        </PaneOption>

        <PaneOption as="a" href="#insulation">
          scattered insulation
        </PaneOption>
        <PaneOption onClick={action("onClick")}>a speech act</PaneOption>
      </Dropdown>

      <Button flex="1">and throughout</Button>
    </Stack>
  </States>
);
