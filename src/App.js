import { Provider } from "react-redux";
import Body from"./Components/Body"
import store from "./utils/store";


function App() {
  return (
    <div className="App">
     <Provider store={store}>
    <Body/>
   </Provider>
    </div>
  );
}

export default App;
