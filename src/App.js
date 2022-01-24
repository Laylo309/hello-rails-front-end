import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './redux/configureStore';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={'Home!'} />
          <Route path="/greetings" element={<Greeting />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
