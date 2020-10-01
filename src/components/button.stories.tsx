import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Button from './Button';
storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Buttons</Button>
  ))
  .add('with some emoji', () => (
    <Button>😀 😎 👍 💯</Button>
  ));
