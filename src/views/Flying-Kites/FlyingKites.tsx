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
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae consequuntur deleniti ducimus
                    incidunt ipsa nihil officia, quis tempore totam.
                </div>
                <div class="title">
                    Here are some of my memories with my cycle
                </div>
                <ImageGallery imagesLocation="flying-kites" imagesCount={10} imagesExtension="jpg"/>
            </div>
            <GlobalNav/>
        </>
    );
}