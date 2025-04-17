import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/ui/input";

const meta = {
  title: "UI/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search", "tel", "url"],
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    className: { control: "text" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "text",
  },
};

export const WithPlaceholder: Story = {
  args: {
    type: "text",
    placeholder: "Enter text here...",
  },
};

export const Disabled: Story = {
  args: {
    type: "text",
    placeholder: "Cannot type here",
    disabled: true,
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
  },
};
