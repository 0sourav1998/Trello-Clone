import React from 'react'

const ClerkLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='flex min-h-screen justify-center items-center'>
        {children}
    </div>
  )
}

export default ClerkLayout ;