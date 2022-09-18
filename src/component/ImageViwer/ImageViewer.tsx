import {useLocation, useNavigate} from "@solidjs/router";
import "./ImageViewer.scss";
import IconButton from "../IconButton/IconButton";

type ImageInfo = {
    imageLocation: string,
    imageId: number,
    imageUrl: string,
    imageName: string
}

export default function ImageViewer() {
    const location = useLocation<ImageInfo>();
    const navigate = useNavigate();

    function onBackButtonClick() {
        navigate(`/${location.state.imageLocation}`);
    }

    async function onDownloadButtonClick() {
        const image = await fetch(location.state.imageUrl);
        const imageBlog = await image.blob();
        const imageURL = URL.createObjectURL(imageBlog);

        const link = document.createElement('a');
        link.href = imageURL;
        link.download = location.state.imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div id="ImageViewer">
            <img src={location.state.imageUrl} alt={location.state.imageName}/>
            <header>
                <IconButton iconClass="fa-solid fa-arrow-left" onClick={onBackButtonClick}/>
                <IconButton iconClass="fa-solid fa-download" onClick={onDownloadButtonClick}/>
            </header>
        </div>
    )
}