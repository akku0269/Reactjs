/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { ReactPropTypes } from 'react'

Button.propTypes = {
    children: ReactPropTypes.node.isRequired,
    type: ReactPropTypes.oneOf(['button', 'submit', 'reset']),
    bgColor: ReactPropTypes.string,
    textColor: ReactPropTypes.string,
    className: ReactPropTypes.string,
  };

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`} {...props}>
            {children}
        </button>
    )
}

export default Button
