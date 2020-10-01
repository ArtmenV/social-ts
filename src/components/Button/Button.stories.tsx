import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Button from './Button'

export default {
  title: 'Form/Control/Button',
  component: Button,
}

export const Primary = () => <Button variant="primary">Primary</Button>
export const Secondary = () => <Button variant="secondary">Secondary</Button>
export const Success = () => <Button variant="success">Success</Button>
export const Danger = () => <Button variant="danger">Danger</Button>

storiesOf('Button', module)
  .add('with text', () => <Button>Hello Buttons</Button>)
  .add('with some emoji', () => <Button>😀 😎 👍 💯</Button>)
