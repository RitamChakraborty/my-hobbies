import {useLocation} from "@solidjs/router";
import "./ImageViewer.scss";

type ImageInfo = {
    imageName: string,
    imageUrl: string
}

export default function ImageViewer() {
    const location = useLocation<ImageInfo>();

    return (
        <div id="ImageViewer">
            <img src={location.state.imageUrl} alt={location.state.imageName}/>
        </div>
    )
}