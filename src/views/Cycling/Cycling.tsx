import Header from "../../component/Header/Header";
import cycling from "../../assets/cycling/header.gif";
import "./Cycling.scss";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";

export default function Cycling() {
    return (
        <div id="Cycling">
            <Header title="Cycling" img={cycling}/>
            <div class="container">
                <div class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae consequuntur deleniti ducimus
                    incidunt ipsa nihil officia, quis tempore totam.
                </div>
                <div class="title">
                    Here are some of my memories with my cycle
                </div>
                <ImageGallery imagesLocation="cycling" imagesCount={27} imagesExtension="jpg"/>
            </div>
        </div>
    )
}