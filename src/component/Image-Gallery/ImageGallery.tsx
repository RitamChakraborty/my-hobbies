import {For} from "solid-js";
import "./ImageGallery.scss";

type ImageGalleryProps = {
    imagesLocation: string,
    imagesCount: number,
    imagesExtension: string
}

export default function ImageGallery(props: ImageGalleryProps) {
    function images(): string[] {
        const images = [];

        for (let i = 0; i < props.imagesCount; ++i) {
            images.push(new URL(
                `../../assets/${props.imagesLocation}/${props.imagesLocation}-${i + 1}.${props.imagesExtension}`,
                import.meta.url).href
            );
        }

        return images;
    }

    return (
        <div id="ImageGallery">
            <For each={images()}>
                {
                    (image, i) => {
                        return (
                            <img src={image} alt={`image-${i}`}/>
                        )
                    }
                }
            </For>
        </div>
    )
}