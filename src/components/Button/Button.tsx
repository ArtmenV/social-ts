import * as React from 'react'

import './Button.css'

export interface IButtonProps {
  children?: React.ReactNode
  variant?: any
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

const Button: React.FunctionComponent<IButtonProps> = ({
  onClick,
  children,
  variant,
}) => {
  return (
    <button onClick={onClick} className={`button ${variant}`} type="button">
      {children}
    </button>
  )
}

Button.defaultProps = {
  children: null,
  variant: 'primary',
  onClick: () => {},
}

export default Button
