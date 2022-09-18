import Header from "../../component/Header/Header";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import headerImage from "../../assets/electronics-repairing/header.gif";
import GlobalNav from "../../component/Global-Nav/GlobalNav";

export default function ElectronicsRepairing() {
    return (
        <>
            <Header title="Electronics Repairing" img={headerImage}/>
            <div class="container">
                <div class="description">
                    I have always been a very curious person. I used to open up any electronic gadget I could
                    grab and mostly ended up breaking them. But by breaking things I learned to fix them. In my family, we
                    hardly ever call an electrician. And there are many electronic appliances I have fixed.
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