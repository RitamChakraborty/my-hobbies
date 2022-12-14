import Header from "../../component/Header/Header";
import headerImage from "../../assets/cycling/header.gif";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import GlobalNav from "../../component/Global-Nav/GlobalNav";
import video from "../../assets/cycling/video.mp4";
import Video from "../../component/Video/Video";

export default function Cycling() {
    return (
        <>
            <Header title="Cycling" img={headerImage} />
            <div class="container">
                <div class="description">
                    From an early age I was fond of cycling. But during lock down I took that hobby seriously.
                    That time I used to go for cycling everyday and cover 20-30km daily. Thrice I challenged myself to go beyond
                    50km and was overjoyed to achieve it. 65km is my highest so far. Due to work pressure I couldn't continue it this year, but trying my very
                    best to get back to the habit.
                </div>
                <div class="title">
                    Here are some of my memories with my cycle
                </div>
                <ImageGallery imagesLocation="cycling" imagesCount={26} imagesExtension="jpg" />
                <hr />
                <div class="description" style={{ "text-align": "center" }}>
                    This is me going out for cycling after rain to the nearby jungle with my friend.
                    <br />
                </div>
                <Video source={video} />.
            </div>
            <GlobalNav />
        </>
    )
}