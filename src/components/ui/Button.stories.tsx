import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  args: {
    children: "원격 이동 명령",
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: { variant: "primary" },
};

export const Secondary: Story = {
  args: { variant: "secondary" },
};

export const Danger: Story = {
  args: { variant: "danger", children: "긴급 정지" },
};
