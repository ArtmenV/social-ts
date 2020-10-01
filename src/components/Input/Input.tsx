import * as React from 'react'

import './Input.css'

export interface IButtonProps {
  children?: React.ReactNode
  size?: any
  placeholder: string
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FunctionComponent<IButtonProps> = ({
  onClick,
  children,
  size,
  ...rest
}) => {
  return <input onClick={onClick} className={`input ${size}`} {...rest} />
}

Button.defaultProps = {
  children: null,
  size: 'medium',
  placeholder: 'asd',
  onClick: () => {},
}

export default Button
