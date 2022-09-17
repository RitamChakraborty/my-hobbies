import {For} from "solid-js";
import "./ImageGallery.scss";
import Image from "../Image/Image";

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

    function imageName(imageUrl: string) {
        const s = imageUrl.split("/");
        return s[s.length - 1];
    }

    return (
        <div id="ImageGallery">
            <For each={images()}>
                {
                    (image) => {
                        return (
                            <Image imageUrl={image} imageName={imageName(image)}/>
                        )
                    }
                }
            </For>
        </div>
    )
}