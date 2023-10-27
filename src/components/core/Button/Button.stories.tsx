import { useState } from "react";

// import { onClickEvent } from "./Button.spec";
import { Button } from "components/core";
import { Flex, VStack } from "generated/panda/jsx";

import type { Meta, StoryObj } from "@storybook/react";

type Story = StoryObj<typeof Button>;

const ButtonTest = () => {
  const [count, setCount] = useState(0);

  return (
    <Button onClick={() => setCount(count + 1)}>🏝️ Clicks: {count}</Button>
  );
};

export const Variants: Story = {
  render: () => (
    <Flex gap={2}>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="default">Default</Button>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap={2}>
      <Button variant="primary" size="xs">
        Button
      </Button>
      <Button variant="primary" size="sm">
        Button
      </Button>
      <Button variant="primary">Button</Button>
      <Button variant="primary" size="lg">
        Button
      </Button>
    </Flex>
  ),
};

// export const OnClickEvent: Story = {
//   render: () => <ButtonTest />,
//   play: onClickEvent,
//   name: "[TEST] onClick Event",
//   tags: ["test"],
// };

const meta = {
  title: "Components/Core/Button",
  component: Button,
  tags: ["autodocs"],
  decorators: [(Story) => <Story />],
} satisfies Meta<typeof Button>;

export default meta;
