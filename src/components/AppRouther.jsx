import React, { useContext } from 'react'
import { Route, Routes } from "react-router-dom";
import { AuthContext } from '../context/context';
import { privateRoutes, publicRoutes } from '../routher/routes';
import Loader from './UI/loader/Loader';

export default function AppRouther() {
    const { isAuth, isLoading } = useContext(AuthContext)
    if (isLoading) {
        return <Loader />
    }
    return (
        <Routes>
            {isAuth
                ? privateRoutes.map(route =>
                    <Route key={route.id} path={route.path} element={route.element} />)
                :
                publicRoutes.map(route =>
                    <Route key={route.id} path={route.path} element={route.element} />)
            }
        </Routes>
    )
}
