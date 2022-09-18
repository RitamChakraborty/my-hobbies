import {Route, Router, Routes} from "@solidjs/router";
import "./App.scss";
import Home from "../Home/Home";
import Cycling from "../Cycling/Cycling";
import ImageViewer from "../../component/ImageViwer/ImageViewer";
import CycleRepairing from "../Cycle-Repairing/CycleRepairing";
import MobileRepairing from "../Mobile-Repairing/MobileRepairing";
import ComputerRepairing from "../Computer-Repairing/ComputerRepairing";
import SpeakerRepairing from "../Speakers-Repairing/SpeakerRepairing";
import ElectronicsRepairing from "../Electronics-Repairing/ElectronicsRepairing";
import FlyingKites from "../Flying-Kites/FlyingKites";

export default function App() {
    return (
        <div id="App">
            <Router>
                <Routes>
                    <Route path="/" component={Home}/>
                    <Route path="/cycling" component={Cycling}/>
                    <Route path="/cycle-repairing" component={CycleRepairing}/>
                    <Route path="/mobile-repairing" component={MobileRepairing}/>
                    <Route path="/computer-repairing" component={ComputerRepairing}/>
                    <Route path="/speaker-repairing" component={SpeakerRepairing}/>
                    <Route path="/electronics-repairing" component={ElectronicsRepairing}/>
                    <Route path="/flying-kites" component={FlyingKites}/>
                    <Route path="/:location/:id" component={ImageViewer}/>
                </Routes>
            </Router>
        </div>
    );
}