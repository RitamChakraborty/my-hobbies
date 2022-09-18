import Header from "../../component/Header/Header";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import headerImage from "../../assets/mobile-repairing/header.gif";
import GlobalNav from "../../component/Global-Nav/GlobalNav";

export default function MobileRepairing() {
    return (
        <>
            <Header title="Mobile Repairing" img={headerImage} />
            <div class="container">
                <div class="description">
                    Mobile phones grew on me from my high school days. I got one from my parents, and sooner or later I ended up breaking it.
                    Not having money to buy a new one, I decided to fix it myself. Time to time I've fixed many of my phones and my friends and
                    relatives phones. And for that skill I was appreciated many a time.
                </div>
                <div class="title">
                    Some images of my adventures of fixing mobile phones
                </div>
                <ImageGallery imagesLocation="mobile-repairing" imagesCount={11} imagesExtension="jpg" />
            </div>
            <GlobalNav />
        </>
    );
}