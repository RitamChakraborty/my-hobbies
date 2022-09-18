import Header from "../../component/Header/Header";
import headerImage from "../../assets/cycling/header.gif";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import GlobalNav from "../../component/Global-Nav/GlobalNav";

export default function Cycling() {
    return (
        <>
            <Header title="Cycling" img={headerImage}/>
            <div class="container">
                <div class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae consequuntur deleniti ducimus
                    incidunt ipsa nihil officia, quis tempore totam.
                </div>
                <div class="title">
                    Here are some of my memories with my cycle
                </div>
                <ImageGallery imagesLocation="cycling" imagesCount={26} imagesExtension="jpg"/>
            </div>
            <GlobalNav/>
        </>
    )
}