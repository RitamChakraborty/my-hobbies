import Header from "../../component/Header/Header";
import headerImage from "../../assets/cycling/header.gif";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import GlobalNav from "../../component/Global-Nav/GlobalNav";
import video from "../../assets/cycling/video.mp4";
import Video from "../../component/Video/Video";

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
                <hr/>
                <div class="description">
                    This is me going out for cycling after rain to the nearby jungle with my friend.
                    <br/>
                </div>
                <Video source={video}/>.
            </div>
            <GlobalNav/>
        </>
    )
}