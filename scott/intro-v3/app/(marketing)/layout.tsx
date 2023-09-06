import React from 'react'

const MarketingLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <h1>marketing</h1>
      <div>{children}</div>
    </div>
  )
}

export default MarketingLayout
