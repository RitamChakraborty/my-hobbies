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
                `../../assets/${props.imagesLocation}/images/${i + 1}.${props.imagesExtension}`,
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
                            <Image
                                imageLocation={props.imagesLocation}
                                imageId={i() + 1}
                                imageUrl={image}
                                imageName={`${props.imagesLocation}-${i()}`}
                            />
                        )
                    }
                }
            </For>
        </div>
    )
}