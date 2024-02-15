import React from 'react'

const ErrorChildren = ({children}) => {
    return (
        <div className='bg-red-800 text-white font-bold rounded-md p-3 mb-3 text-center uppercase'>
            <p>
                {children}
            </p>
        </div>
    )
}

export default ErrorChildren