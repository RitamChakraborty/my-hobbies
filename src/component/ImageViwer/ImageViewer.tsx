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

    return (
        <div id="ImageViewer">
            <img src={location.state.imageUrl} alt={location.state.imageName}/>
            <header>
                <IconButton iconClass="fa-solid fa-arrow-left" onClick={onBackButtonClick}/>
            </header>
        </div>
    )
}