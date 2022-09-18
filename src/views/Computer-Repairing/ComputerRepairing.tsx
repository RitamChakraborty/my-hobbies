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
                    Since I started my college I found myself very intrigued by computers. I craved to
                    build a computer of my own. The opportunity arrived when I was given a decommissioned computer
                    from our computer lab. The journey began from there. I rebuilt the computer for myself. I fixed my
                    own laptop countless times, and helped my friends to repair and upgrade their own as well. I
                    have some of the pictures of my computers and some of my friend's computers that I've fixed. The last
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