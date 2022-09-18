import Header from "../../component/Header/Header";
import homeHeader from "../../assets/home/home.gif";
import {Link} from "@solidjs/router";
import cyclingIcon from "../../assets/cycling/icon.png";
import cycleRepairingIcon from "../../assets/cycle-repairing/icon.png";
import mobileRepairingIcon from "../../assets/mobile-repairing/icon.png";
import computerRepairingIcon from "../../assets/computer-repairing/icon.png";
import speakerRepairingIcon from "../../assets/speakers-repairing/icon.png";
import otherRepairingIcon from "../../assets/electronics-repairing/icon.png";
import kiteIcon from "../../assets/flying-kites/icon.png";
import "./Home.scss";

export default function Home() {
    return (
        <div id="Home">
            <Header title="A List of My Hobbies" img={homeHeader}/>
            <div class="container">
                <nav>
                    <Link href={"/cycling"}>
                        <img src={cyclingIcon} alt="Cycling"/>
                        <span>Cycling</span>
                    </Link>
                    <Link href={"/cycle-repairing"}>
                        <img src={cycleRepairingIcon} alt="Cycle Repairing"/>
                        <span>Cycle Repairing</span>
                    </Link>
                    <Link href={"/mobile-repairing"}>
                        <img src={mobileRepairingIcon} alt="Mobile Repairing"/>
                        <span>Mobile Repairing</span>
                    </Link>
                    <Link href={"/computer-repairing"}>
                        <img src={computerRepairingIcon} alt="Computer Repairing"/>
                        <span>Computer Repairing</span>
                    </Link>
                    <Link href={"/speakers-repairing"}>
                        <img src={speakerRepairingIcon} alt="Headphone Repairing"/>
                        <span>Headphone Repairing</span>
                    </Link>
                    <Link href={"/electronics-repairing"}>
                        <img src={otherRepairingIcon} alt="Electronics Repairing"/>
                        <span>Electronics Repairing</span>
                    </Link>
                    <Link href={"/flying-kites"}>
                        <img src={kiteIcon} alt="Flying Kites"/>
                        <span>Flying Kites</span>
                    </Link>
                </nav>
            </div>
        </div>
    );
}