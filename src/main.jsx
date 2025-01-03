import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Movie from './pages/movielist/Movie.jsx';
import Moviedetail from './pages/moviedetail/Moviedetail.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<App />}>
      <Route index element={<Home />} />
        <Route path='movie/:id' element={<Moviedetail/>}/>
        <Route path='movies/:type' element={<Movie/>} />
      </Route>
    </>
  )
);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
