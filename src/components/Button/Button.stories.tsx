import * as React from 'react'
import Button from './Button'
import { Center } from '../Center/Center'

export default {
  title: 'Form/Control/Button',
  component: Button,
  decorators: [(story: any) => <Center>{story()}</Center>],
}

export interface IButtonProps {
  children?: React.ReactNode
  variant?: any
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  args: {
    children: string
    variant: string
  }
}
export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

const Template = (args: IButtonProps) => <Button {...args} />

export const PrimaryA: any = Template.bind({})

PrimaryA.args = {
  variant: 'primary',
  children: 'primary Args',
}
