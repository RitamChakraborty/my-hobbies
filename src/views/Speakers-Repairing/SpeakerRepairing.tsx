import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import Header from "../../component/Header/Header";
import headerImage from "../../assets/speakers-repairing/header.gif";
import GlobalNav from "../../component/Global-Nav/GlobalNav";

export default function SpeakerRepairing() {
    return (
        <>
            <Header title="Speaker Repairing" img={headerImage}/>
            <div class="container">
                <div class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae consequuntur deleniti ducimus
                    incidunt ipsa nihil officia, quis tempore totam.
                </div>
                <div class="title">
                    Here are some of my memories with my cycle
                </div>
                <ImageGallery imagesLocation="speakers-repairing" imagesCount={12} imagesExtension="jpg"/>
            </div>
            <GlobalNav/>
        </>
    );
}