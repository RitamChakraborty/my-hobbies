import Header from "../../component/Header/Header";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import headerImage from "../../assets/electronics-repairing/header.gif";
import GlobalNav from "../../component/Global-Nav/GlobalNav";

export default function ElectronicsRepairing() {
    return (
        <>
            <Header title="Electronics Repairing" position="top" img={headerImage}/>
            <div class="container">
                <div class="description">
                    I was always been a very curious person. I always used to open up any electronics gadget I could
                    grab and mostly ended up breaking then. But by breaking things I learned to fix them. In my family
                    hardly every we call an electrician. And there many electronics appliances I had fixed.
                </div>
                <div class="title">
                    These are some of such experiences of fixing things
                </div>
                <ImageGallery imagesLocation="electronics-repairing" imagesCount={5} imagesExtension="jpg"/>
            </div>
            <GlobalNav/>
        </>
    );
}