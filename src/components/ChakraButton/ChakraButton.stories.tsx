import React from 'react'
import { Button } from '@chakra-ui/core'

export default {
  title: 'Chakra/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
}

const Template = (args: any) => <Button {...args} />

export const Success: any = Template.bind({})
Success.args = {
  variantColor: 'green',
  children: 'Success',
}

export const Danger: any = Template.bind({})
Danger.args = {
  variantColor: 'red',
  children: 'Danger',
}
