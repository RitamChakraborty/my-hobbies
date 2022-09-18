import Header from "../../component/Header/Header";
import headerImage from "../../assets/computer-repairing/header.gif";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import GlobalNav from "../../component/Global-Nav/GlobalNav";

export default function Cycling() {
    return (
        <>
            <Header title="Computer Repairing" img={headerImage}/>
            <div class="container">
                <div class="description">
                    Since I started my college I found myself very interested about computers. I always wanted to
                    build a computer of my own. The opportunity arrived when I'm given a decommissioned computer
                    from our computer lap. The journey began from there. I rebuild the computer for myself. I fixed my
                    own laptop countless amount of times, and help my friend to repair and upgrade their own as well. I
                    have some of the pictures of my computers and some of my friend computer that I've fixed. The last
                    picture is my current setup at home which I use on regular basis.
                </div>
                <div class="title">
                    Photos of computers and laptops I've made or repaired
                </div>
                <ImageGallery imagesLocation="computer-repairing" imagesCount={12} imagesExtension="jpg"/>
            </div>
            <GlobalNav/>
        </>
    )
}