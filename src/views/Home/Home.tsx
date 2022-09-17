import Header from "../../component/Header/Header";
import homeHeader from "../../assets/home/home.gif";

export default function Home() {
    return (
        <>
            <Header title="A List of My Hobbies" img={homeHeader}/>
        </>
    );
}