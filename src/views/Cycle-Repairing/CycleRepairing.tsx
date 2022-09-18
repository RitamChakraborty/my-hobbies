import Header from "../../component/Header/Header";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import headerImage from "../../assets/cycle-repairing/header.gif";
import GlobalNav from "../../component/Global-Nav/GlobalNav";

export default function CycleRepairing() {
    return (
        <>
            <Header title="Cycle Repairing" img={headerImage}/>
            <div class="container">
                <div class="description">
                    Since I got my first cycle, I was hesitant to take it to the shop for repairing. Instead I was
                    always determined to fix it by my own. With that motivation I started to repair or rebuild a whole
                    cycle all by myself. I've posted the pictures of my one and only cycle, gradually upgraded by me. If you
                    scroll through the images you'll see it change in color and structure. Where the first picture was
                    taken when I bought my cycle, and the last one is after 10 years. Still ride it everyday and still
                    modifying.
                </div>
                <div class="title">
                    This is how I rebuild my cycle over the years
                </div>
                <ImageGallery imagesLocation="cycle-repairing" imagesCount={12} imagesExtension="jpg"/>
            </div>
            <GlobalNav/>
        </>
    );
}