import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import About from './About.jsx'
import Write from './Write.jsx'
import Home from './Home'
import { Provider } from 'react-redux'
import appStore from '../Componenets/appStore'
import ReadPage from './ReadPage'


const main=createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Write",
    element:<Write/>
  },
  {
    path:"/Read",
    element:<ReadPage/>
  },
]
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider  store={appStore}>
    <RouterProvider router={main} />
    </Provider>
  </React.StrictMode>
)
