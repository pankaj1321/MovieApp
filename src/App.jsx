import './App.css';
import {Form, Outlet} from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './component/header/Header';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
