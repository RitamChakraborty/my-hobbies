import {Route, Router, Routes} from "@solidjs/router";
import "./App.scss";
import Home from "../Home/Home";

export default function App() {
    return (
        <div id="App">
            <Router>
                <Routes>
                    <Route path="/" component={Home}/>
                </Routes>
            </Router>
        </div>
    );
}