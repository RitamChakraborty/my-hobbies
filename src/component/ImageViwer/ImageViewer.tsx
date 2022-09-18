import {useLocation, useNavigate} from "@solidjs/router";
import "./ImageViewer.scss";
import IconButton from "../IconButton/IconButton";
import {Show} from "solid-js";

type ImageInfo = {
    imageLocation: string,
    imageId: number,
    imageUrl: string,
    imageName: string,
    maxCount: number
}

export default function ImageViewer() {
    const location = useLocation<ImageInfo>();
    const navigate = useNavigate();
    const state = location.state;

    function onBackButtonClick() {
        navigate(`/${location.state.imageLocation}`);
    }

    async function onDownloadButtonClick() {
        const image = await fetch(state.imageUrl);
        const imageBlog = await image.blob();
        const imageURL = URL.createObjectURL(imageBlog);

        const link = document.createElement('a');
        link.href = imageURL;
        link.download = location.state.imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function leftAvailable(): boolean {
        return state.imageId! > 1;
    }

    function rightAvailable(): boolean {
        return state.imageId! < state.maxCount!;
    }

    function left() {

    }

    function right() {

    }

    return (
        <div id="ImageViewer">
            <img src={location.state.imageUrl} alt={location.state.imageName}/>
            <header>
                <IconButton iconClass="fa-solid fa-arrow-left" onClick={onBackButtonClick}/>
                <IconButton iconClass="fa-solid fa-download" onClick={onDownloadButtonClick}/>
            </header>
            <Show when={leftAvailable()} keyed>
                <div onClick={left} class="nav left">
                    <i class="fa-solid fa-chevron-left"/>
                </div>
            </Show>
            <Show when={rightAvailable()} keyed>
                <div onClick={right} class="nav right">
                    <i class="fa-solid fa-chevron-right"/>
                </div>
            </Show>
        </div>
    )
}