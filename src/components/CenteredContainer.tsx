import React from 'react'

const CenteredContainer = ({ children }: any) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mb-4">
    <div className="flex items-center justify-center">
      { children }
    </div>
  </div>
)

export default CenteredContainer
