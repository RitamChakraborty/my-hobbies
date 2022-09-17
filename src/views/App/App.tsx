import {Route, Router, Routes} from "@solidjs/router";
import "./App.scss";
import Home from "../Home/Home";
import Cycling from "../Cycling/Cycling";
import ImageViewer from "../../component/ImageViwer/ImageViewer";

export default function App() {
    return (
        <div id="App">
            <Router>
                <Routes>
                    <Route path="/" component={Home}/>
                    <Route path="/cycling" component={Cycling}/>
                    <Route path="/:location/:id" component={ImageViewer}/>
                </Routes>
            </Router>
        </div>
    );
}