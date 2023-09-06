import React from 'react'

const DashboardLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <div>
      <h1>dashboard</h1>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout
