import "./Style.css";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Result from "./components/Result";
import { Provider } from "react-redux";
import store from "./Store/Store";

function Home(props) {
  return (
    <Provider store={store}>
      <div className="Home">
        <h2 style={{ marginBottom: "30px" }}>Welcome to Redux</h2>
        <Comp1 />
        <Comp2 />
        <Result />
      </div>
    </Provider> 
  );
}

export default Home;