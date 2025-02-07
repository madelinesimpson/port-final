import './App.css';
import Home from './Home.jsx'
import smoothscroll from 'smoothscroll-polyfill'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"


function App() {
  smoothscroll.polyfill();
  
  const router = createBrowserRouter([
    { path: "/", element: <Home/> },
  ]);

  return (
    <main className='main-page-content'>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
