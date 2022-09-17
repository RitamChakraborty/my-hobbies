import {Route, Router, Routes} from "@solidjs/router";
import "./App.scss";
import Home from "../Home/Home";
import Cycling from "../Cycling/Cycling";

export default function App() {
    return (
        <div id="App">
            <Router>
                <Routes>
                    <Route path="/" component={Home}/>
                    <Route path="/cycling" component={Cycling}/>
                </Routes>
            </Router>
        </div>
    );
}