import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import About from './Components/About';
import Books from './Components/Books';

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/about",
        element:<About/>
      }
      ,
      {
        path:"/books",
        element:<Books/>,
        loader:()=> fetch("https://api.itbook.store/1.0/new")
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
