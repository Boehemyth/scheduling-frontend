import React from 'react';
import { Provider } from "react-redux";
import { configureStore } from "../store";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./Navbar";
import Main from "./Main";

const store = configureStore();

// if(localStorage.jwtToken) {
//   setAuthorizationToken(localStorage.jwtToken);
//   //prevent someone from manually tampering w/ key of jwtToken in localStorage
//   try {
//     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
//   } catch (err) {
//     store.dispatch(setCurrentUser({}));
//   }
// }

const App = () => (
  <Provider store={store}>
    <Router>
      <div> 
        <Navbar />
        <Main />
      </div>
    </Router>
  </Provider>
);

export default App;