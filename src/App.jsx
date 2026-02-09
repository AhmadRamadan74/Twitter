import { useState } from 'react'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './context/authuser'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      { index: true, element: <ProtectedRoute><Home/></ProtectedRoute>}
    ]
  }
])





function App() {

  return (
      <>
          <AuthProvider>
            <RouterProvider router={routers}></RouterProvider>
            <Toaster position='top-center'/> 
          </AuthProvider>    
      </>
  )
}

export default App
