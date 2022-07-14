import React from "react";
import MyApp from "./components/MyApp";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";

/**
 * Wraps myApp with redux provider
 * @param {void} Nothing
 * @return {MyApp} MyApp with provider
 */
function App() {
  store.getState();
  return (
    <Provider store={store}>
      <MyApp />
    </Provider>
  );
}

export default App;
