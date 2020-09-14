import React, {
  useEffect,
  createContext,
  useReducer,
  useContext
} from "react";
import {
  Route,
  Switch
} from "react-router-dom";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar";
import Signin from "./components/Login";

/*const Routing = () => {
  const history = useHistory();
  //const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      //dispatch({ type: "USER", payload: user });
    } else {
      if (!history.location.pathname.startsWith("/reset"))
        history.push("/signin");
    }
  }, []); */

function App() {
  return ( <
    div >
    <
    NavBar / >
    <
    Switch >
    <
    Route exact path = "/" >
    <
    Signin / >
    <
    /Route> < /
    Switch > <
    /div>
  );
}

export default App;