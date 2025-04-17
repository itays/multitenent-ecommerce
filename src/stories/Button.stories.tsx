import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "UI/Button", // Adjusted title to reflect location within UI components
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "noShadow", "neutral", "reverse"],
    },
    size: {
      control: "select",
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: { control: "boolean" },
    children: { control: "text" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() }, // You can uncomment this if you need to test onClick actions
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    variant: "default",
    children: "Default Button",
  },
};

export const Neutral: Story = {
  args: {
    variant: "neutral",
    children: "Neutral Button",
  },
};

export const Reverse: Story = {
  args: {
    variant: "reverse",
    children: "Reverse Button",
  },
};

export const NoShadow: Story = {
  args: {
    variant: "noShadow",
    children: "No Shadow Button",
  },
};

// Example of small size
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

// Example of large size
export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

// Example of Icon size (typically used with an icon inside)
export const Icon: Story = {
  args: {
    size: "icon",
    children: "Icn", // Placeholder, usually an <Icon /> component
  },
};

// Example of disabled state
export const Disabled: Story = {
  args: {
    variant: "default",
    children: "Disabled Button",
    disabled: true,
  },
};

// Example with asChild prop
// export const AsChild: Story = {
//     args: {
//         asChild: true,
//         children: <a>Link Button</a>
//     }
// };
