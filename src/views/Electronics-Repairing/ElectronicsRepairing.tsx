import Header from "../../component/Header/Header";
import ImageGallery from "../../component/Image-Gallery/ImageGallery";
import headerImage from "../../assets/electronics-repairing/header.gif";

export default function ElectronicsRepairing() {
    return (
        <>
<<<<<<< HEAD
            <Header title="Cycling" img={headerImage}/>
=======
            <Header title="Electronics Repairing" position="top" img={headerImage}/>
>>>>>>> 0402277c17a76984a3b7dfa232d803df5138d79d
            <div class="container">
                <div class="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae consequuntur deleniti ducimus
                    incidunt ipsa nihil officia, quis tempore totam.
                </div>
                <div class="title">
                    Here are some of my memories with my cycle
                </div>
                <ImageGallery imagesLocation="electronics-repairing" imagesCount={5} imagesExtension="jpg"/>
            </div>
        </>
    );
}