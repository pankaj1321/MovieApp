import './App.css';
import Header from './component/Header/Header';
import {Form, Outlet} from 'react-router-dom';
import Home from './pages/home/Home';

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
