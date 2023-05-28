import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Components/Home';
import About from './Components/About';
import Books from './Components/Books';
import BookDetails from './Components/BookDetails';
import LoadingSpinner from './Components/LoadingSpinner';

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
      },
      {
        path:"book/:id",
        element:<BookDetails></BookDetails>,
        loader:({params})=>fetch(`https://api.itbook.store/1.0/books/${params.id}`)

      },
      {
        path:"/loadingSpinner",
        element:<LoadingSpinner></LoadingSpinner>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router}/>)
