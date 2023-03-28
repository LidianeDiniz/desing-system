import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ignite-ui/react'

export default {
  title: 'Data/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/LidianeDiniz.png',
    alt: 'Lidiane Diniz',
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WhthFallback: StoryObj<AvatarProps> = {
  args: {
    src: 'undefined',
  },
}
