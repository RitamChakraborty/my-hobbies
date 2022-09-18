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
                    From an very early age I was fond of cycling. But during lock down I took that hobby seriously. On
                    that time I used to go to cycling everyday around 20-30km everyday. Three times I went more than
                    50km. 65km is my highest. Due to work pressure I couldn't continue it this year, but tying my very
                    best to get back to the habit.
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