import "./styles/style.css"
import { createStore, compose, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import reducer from "./store/reducer";
import { BrowserRouter, Route } from "react-router-dom"
import {Home, ShoppingList, Customers} from "./pages";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware()))

// const store = createStore(reducer)

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