import {useLocation, useNavigate} from "@solidjs/router";
import "./ImageViewer.scss";
import IconButton from "../IconButton/IconButton";
import {createSignal, onMount, Show} from "solid-js";
import GlobalNav from "../Global-Nav/GlobalNav";

type ImageInfo = {
    imageLocation: string,
    imageId: number,
    imageUrl: string,
    imageName: string,
    imageExtension: string,
    maxCount: number
}

export default function ImageViewer() {
    const location = useLocation<ImageInfo>();
    const navigate = useNavigate();
    const [state, setState] = createSignal<ImageInfo>();

    onMount(() => {
        setState({
            imageLocation: location.state.imageLocation,
            imageId: location.state.imageId,
            imageName: location.state.imageName,
            imageUrl: location.state.imageUrl,
            imageExtension: location.state.imageExtension,
            maxCount: location.state.maxCount
        });
    });

    function onBackButtonClick() {
        navigate(`/${state().imageLocation}`);
    }

    async function onDownloadButtonClick() {
        const image = await fetch(state().imageUrl);
        const imageBlog = await image.blob();
        const imageURL = URL.createObjectURL(imageBlog);

        const link = document.createElement('a');
        link.href = imageURL;
        link.download = state().imageName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function leftAvailable(imageInfo: ImageInfo): boolean {
        return imageInfo.imageId! > 1;
    }

    function rightAvailable(imageInfo: ImageInfo): boolean {
        return imageInfo.imageId! < state().maxCount!;
    }

    function left(imageInfo: ImageInfo) {
        const imageId = imageInfo.imageId - 1;
        const imageName = `${imageInfo.imageLocation}-${imageId}`;
        const imageUrl = new URL(
            `../../assets/${imageInfo.imageLocation}/images/${imageId}.${imageInfo.imageExtension}`,
            import.meta.url
        ).href;
        const newState: ImageInfo = {
            imageLocation: imageInfo.imageLocation,
            imageId: imageId,
            imageName: imageName,
            imageUrl: imageUrl,
            imageExtension: imageInfo.imageExtension,
            maxCount: imageInfo.maxCount
        };
        setState(newState);
        navigate(`/${newState.imageLocation}/${newState.imageId}`, {
            replace: true,
            state: newState
        });
    }

    function right(imageInfo: ImageInfo) {
        const imageId = imageInfo.imageId + 1;
        const imageName = `${imageInfo.imageLocation}-${imageId}`;
        const imageUrl = new URL(
            `../../assets/${imageInfo.imageLocation}/images/${imageId}.${imageInfo.imageExtension}`,
            import.meta.url
        ).href;
        const newState: ImageInfo = {
            imageLocation: imageInfo.imageLocation,
            imageId: imageId,
            imageName: imageName,
            imageUrl: imageUrl,
            imageExtension: imageInfo.imageExtension,
            maxCount: imageInfo.maxCount
        };
        setState(newState);
        navigate(`/${newState.imageLocation}/${newState.imageId}`, {
            replace: true,
            state: newState
        });
    }

    return (
        <Show when={state()} keyed>
            <div id="ImageViewer">
                <img src={state().imageUrl} alt={state().imageName}/>
                <header>
                    <IconButton iconClass="fa-solid fa-arrow-left" onClick={onBackButtonClick}/>
                    <IconButton iconClass="fa-solid fa-download" onClick={onDownloadButtonClick}/>
                </header>
                <Show when={leftAvailable(state())} keyed>
                    <div onClick={() => left(state())} class="nav left">
                        <i class="fa-solid fa-chevron-left"/>
                    </div>
                </Show>
                <Show when={rightAvailable(state())} keyed>
                    <div onClick={() => right(state())} class="nav right">
                        <i class="fa-solid fa-chevron-right"/>
                    </div>
                </Show>
            </div>
            <GlobalNav/>
        </Show>
    )
}