import * as React from 'react'
import Button from './Button'
import { Center } from '../Center/Center'

export default {
  // title: 'Form/Control/Button',
  // decorators: [(story: any) => <Center>{story()}</Center>],
  title: 'Form/Button',
  component: Button,
  argTypes: {
    variantColor: { control: 'text' },
    children: { control: 'text' },
    onClick: { action: 'clicked' },
  },
}

export interface IButtonProps {
  children?: React.ReactNode
  variant?: any
  args: {
    children: string
    variant: string
  }
}
export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success"></Button>
export const Danger = () => <Button variant="danger">Danger</Button>

const Template = (args: IButtonProps) => <Button {...args} />

export const PrimaryA: any = Template.bind({})

PrimaryA.args = {
  variantColor: 'green',
  children: 'sucessss',
  onClick: { action: 'clicked' },
}
