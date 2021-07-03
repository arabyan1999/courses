import "./styles/style.css"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "./store/reducer";
import { BrowserRouter, Route } from "react-router-dom"
import Home from "./components/Home";
const store = createStore(reducer)
function App() {
  return (
    <div className="main">
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;