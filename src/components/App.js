import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import '../styles/App.css';

// Import components
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';

// react routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>
  },

  {
    path: '/quiz',
    element: <Quiz/>
  },

  {
    path: '/result',
    element: <Result/>
  }
]);


const App = () => {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App