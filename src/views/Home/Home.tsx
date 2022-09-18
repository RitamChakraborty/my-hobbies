import Header from "../../component/Header/Header";
import homeHeader from "../../assets/home/home.gif";
import {Link} from "@solidjs/router";
import "./Home.scss";

export default function Home() {
    return (
        <div id="Home">
            <Header title="A List of My Hobbies" img={homeHeader}/>
            <div class="container">
                <nav>
                    <Link href={"/cycling"}>Cycling</Link>
                    <Link href={"/cycle-repairing"}>Cycle Repairing</Link>
                    <Link href={"/mobile-repairing"}>Mobile Repairing</Link>
                    <Link href={"/computer-repairing"}>Computer and Laptop Repairing</Link>
                    <Link href={"/speaker-repairing"}>Speaker and Headphone Repairing</Link>
                    <Link href={"/cycle-repairing"}>Cycle Repairing</Link>
                    <Link href={"/flying-kites"}>Flying Kites</Link>
                </nav>
            </div>
        </div>
    );
}