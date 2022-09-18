import Header from "../../component/Header/Header";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import headerImage from "../../assets/mobile-repairing/header.gif";

export default function MobileRepairing() {
    return (
        <>
            <Header title="Mobile Repairing" img={headerImage}/>
            <div class="container">
                <div class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae consequuntur deleniti ducimus
                    incidunt ipsa nihil officia, quis tempore totam.
                </div>
                <div class="title">
                    Here are some of my memories with my cycle
                </div>
                <ImageGallery imagesLocation="mobile-repairing" imagesCount={11} imagesExtension="jpg"/>
            </div>
        </>
    );
}