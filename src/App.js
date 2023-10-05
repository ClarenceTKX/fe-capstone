import {React} from 'react';
import {Route, Routes} from 'react-router-dom';
import pages from './utilities/pages';
import Layout from './react-components/layout/Layout';
import Home from './react-components/pages/Home';
import Bookings from './react-components/pages/Bookings';
import ConfirmedBooking from './react-components/pages/Bookings/ConfirmedBooking';
import NotFound from './react-components/pages/NotFound';
import UnderConstruction from './react-components/pages/UnderConstruction';


const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={pages.get('home').path} element={<Home />} />
          <Route 
            path={pages.get('about').path} 
            element={<UnderConstruction />} 
          />
          <Route 
            path={pages.get('menu').path} 
            element={<UnderConstruction />} 
          />
          <Route path={pages.get('bookings').path} element={<Bookings />} />
          <Route 
            path={pages.get('confirmedBooking').path} 
            element={<ConfirmedBooking />} 
          />
          <Route 
            path={pages.get('orderOnline').path} 
            element={<UnderConstruction />} 
          />
          <Route 
            path={pages.get('login').path} 
            element={<UnderConstruction />} 
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;