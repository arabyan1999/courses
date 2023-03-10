import "./styles/style.css"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux"
import filterReducer from "./store/filterSlice"
import { BrowserRouter, Route } from "react-router-dom"
import {Home, ShoppingList, Customers} from "./pages";

const store = configureStore({
  reducer: filterReducer,
})

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/shopping-list" exact component={ShoppingList} />
          <Route path="/customers" exact component={Customers} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;