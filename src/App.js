import React from "react";
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage'

import './App.css'

import { createStore } from "redux";
import reducer from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { UserInfo } from "./pages/UserInfo";
import { UserRegister } from "./pages/UserRegister";
import Footer from "./components/Footer"
import Navigation from "./components/Navigation";
import Header from "./components/Header";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const persistor = persistStore(store);

export const MainLayout = ({ children }) => (
  <div className="main-container">
    <Header />
    <Navigation />
    <div className="section">{children}</div>
    <Footer />
  </div>
)

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          {/* <Header /> */}
          {/* <Navigation /> */}
          {/* <Footer /> */}
          <Switch>
            <Route exact path="/" component={UserRegister} />
            <Route exact path="/userinfo" component={UserInfo} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}
export default App;