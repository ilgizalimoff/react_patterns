import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from './context/context';
import './App.css'
import AppRouther from './components/AppRouther';
import Navbar from './components/UI/navbar/Navbar';
import { addCustomerAction, removeCustomerAction } from './redux/customerReducer';

function App() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash.cash)
  const customers = useSelector(state => state.customers.customers)
  function addValue(cash) {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  function getValue(cash) {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  function addCustomer(name) {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))

  }
  function removeCustomer(customer) {
    dispatch(removeCustomerAction(customer.id))
  }
  // const [isAuth, setIsAuth] = useState(false)
  // const [isLoading, setLoading] = useState(true)
  // useEffect(() => {
  //   if (localStorage.getItem('auth')) {
  //     setIsAuth(true)
  //   }
  //   setLoading(false)
  // }, [])
  return (
    <div className='app'>
      <div style={{ fontSize: '2rem' }}>{cash}</div>
      <button onClick={() => addValue(Number(prompt()))}>Добавить деньги</button>
      <button onClick={() => getValue(Number(prompt()))}>Убавить деньги</button>
      <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>

      {customers.length > 0
        ? <div>
          {customers.map(cus =>
            <div key={cus.id} onClick={() => removeCustomer(cus)}>{cus.name}</div>)}
        </div>
        : <div>Клиенты отсуствуют</div>
      }
    </div>
    // <AuthContext.Provider value={{
    //   isAuth,
    //   setIsAuth,
    //   isLoading
    // }}>
    //   <BrowserRouter>
    //     <Navbar />
    //     <AppRouther />
    //   </BrowserRouter>
    // </AuthContext.Provider>
  )
}

export default App;