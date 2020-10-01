import * as React from 'react'

import './Center.css'

interface IAppProps {}

export const Center: React.FC<IAppProps> = ({ children }) => {
  const [state, setstate] = React.useState()

  return <div className="center">{children}</div>
}

// export default Center
