import Header from "../../component/Header/Header";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import headerImage from "../../assets/flying-kites/header.gif";
import GlobalNav from "../../component/Global-Nav/GlobalNav";

export default function FlyingKites() {
    return (
        <>
            <Header title="Flying Kites" img={headerImage}/>
            <div class="container">
                <div class="description">
                    Flying kites is a childhood hobby where me, my cousin brother and maternal uncle used to enjoy a
                    lot. It grew on me with time. I can recall getting scolded by my mother for flying kites all day.
                    When I was younger I used to fly kites from the month of November to 14th of January, which is
                    Makar Sankranti. This is day is celebrated as kite festival. And now days me, my uncle and my friend
                    gather around on that day and have a lot of fun!
                </div>
                <div class="title">
                    Some photos taken during kite festival
                </div>
                <ImageGallery imagesLocation="flying-kites" imagesCount={10} imagesExtension="jpg"/>
            </div>
            <GlobalNav/>
        </>
    );
}