/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appWrite/auth'
import {logout} from '../../store/authSlice'

function LogoutButton() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }
    return (
        <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-300 rounded-full'
        onClick={logoutHandler}
        >Logout</button>
    )
}

export default LogoutButton
