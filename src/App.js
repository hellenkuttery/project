import "./App.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import Approuter from "./router/Approuter";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Approuter />
      </Provider>
    </div>
  );
}

export default App;
