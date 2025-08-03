import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import List from '../src/pages/list/List'
import Hotel from '../src/pages/hotel/Hotel'
import Booking from './pages/booking/Booking';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hotels' element={<List />} />
        <Route path='/hotels/hotel' element={<Hotel />} />
        <Route path='/hotels/hotel/bookings' element={<Booking />} />
      </Routes>
  );
}

export default App;
