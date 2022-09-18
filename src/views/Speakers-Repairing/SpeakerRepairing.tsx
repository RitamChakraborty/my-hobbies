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
                    If there is something that is destined to stop working that must be your earphones. I was not any excpetion to that. 
                    Quite a lot of my earphones got damaged, and instead of throwing them I emerge as their savior. I used to take old 
                    earphones from my friends who decided to throw them away and fixed those earphones for them. 
                </div>
                <div class="title">
                   My home laboratory for repairing earphones and speakers
                </div>
                <ImageGallery imagesLocation="speakers-repairing" imagesCount={12} imagesExtension="jpg"/>
            </div>
            <GlobalNav/>
        </>
    );
}