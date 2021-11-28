import { Outlet } from 'react-router';
import './App.css';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="">
      <div className='container-fluid'>
        <Outlet/>
      </div>
      <div className='footer fixed-bottom'>
        <Navbar/>
      </div>
    </div>
  );
}

export default App;
