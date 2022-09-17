import {Link, Route, Router, Routes} from "@solidjs/router";
import "./App.scss";
import Home from "../Home/Home";

export default function App() {
    return (
        <Router>
            <nav>
                <Link href="/">Home</Link>
            </nav>
            <Routes>
                <Route path="/" component={Home}/>
            </Routes>
        </Router>
    );
}