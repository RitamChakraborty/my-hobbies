import Header from "../../component/Header/Header";
import homeHeader from "../../assets/home/home.gif";
import {Link} from "@solidjs/router";

export default function Home() {
    return (
        <>
            <Header title="A List of My Hobbies" img={homeHeader}/>
            <div class="container">
                <nav>
                    <ul>
                        <li>
                            <Link href={"/cycling"}>Cycling</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}