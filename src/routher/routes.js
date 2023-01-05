import About from "../components/pages/About";
import { Navigate } from "react-router-dom";
import Error from "../components/pages/Error";
import Posts from "../components/pages/Posts";
import PostIdPage from "../components/pages/PostIdPage";
import Login from "../components/pages/Login";

export const privateRoutes = [
    { id: 1, path: '/', element: <Posts /> },
    { id: 2, path: '/about', element: <About /> },
    { id: 3, path: '/posts', element: <Posts /> },
    { id: 4, path: '/error', element: <Error /> },
    { id: 5, path: '/posts/:id', element: <PostIdPage /> },
    { id: 6, path: '/*', element: <Navigate to="/posts" /> },
]

export const publicRoutes = [
    { id: 1, path: '/*', element: <Navigate to="/login" /> },
    { id: 2, path: '/login', element: <Login /> },
]