import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import UserPage from './pages/User/UserPage.jsx'
import AddBook from './pages/AddBook/AddBook.jsx'
import LoginPage from './pages/Login/LoginPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/user",
    element: <UserPage/>
  },
  {
    path: "/addbook",
    element: <AddBook/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
