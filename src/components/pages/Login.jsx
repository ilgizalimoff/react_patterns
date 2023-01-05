import React, { useContext } from 'react'
import { AuthContext } from '../../context/context'
import MyButton from '../UI/button/MyButton'
import MyInput from '../UI/input/MyInput'

export default function () {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }
  return (
    <div>
        <h1>Login Page</h1>
        <form onSubmit={login}>
            <MyInput type='text' placeholder='Введите логин'/>
            <MyInput type='password' placeholder='Введите пароль'/>
            <MyButton>Войти</MyButton>
        </form>
    </div>
  )
}
