import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import View from "./components/Views";

function App() {
  return (
    <>
      <Provider store={store}>
        <View />
      </Provider>
    </>
  );
}

export default App;
