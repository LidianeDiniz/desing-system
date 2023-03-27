import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero aspernatur beatae dicta possimus, ut, nihil at, aperiam voluptate ab dolorum recusandae impedit laborum minus quasi officia praesentium maiores repellat debitis?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const Customtag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
