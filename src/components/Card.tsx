import React from 'react'

const Card = ({ children, title = '' }: any) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:px-6">
      { title }
    </div>
    <div className="bg-gray-50 px-4 py-5 sm:p-6">
    { children }
    </div>
  </div>
)

export default Card
