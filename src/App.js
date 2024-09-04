import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './ReduxState/store';
import LayoutComponent from './components/layout/layout';
import Sales from './components/sales/sales'; 
import Inventory from './components/inventory/Inventory';
import UserActivity from './components/userActivity/userActivity';

function App() {
  return (
    <Provider store={store}>
    {/* <LayoutComponent></LayoutComponent> */}
    <Router>
      <Routes>
        <Route path="/" element={<LayoutComponent />}>
          <Route path="sales" element={<Sales />} />
          <Route path="user" element={<UserActivity />} /> 
           <Route path="inventory" element={<Inventory />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
    {/* <Test/> */}
    </Provider>
  );
}

export default App;
