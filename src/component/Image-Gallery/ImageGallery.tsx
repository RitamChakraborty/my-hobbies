import {createSignal, For, onMount} from "solid-js";
import "./ImageGallery.scss";
import Image from "../Image/Image";

type ImageGalleryProps = {
    imagesLocation: string,
    imagesCount: number,
    imagesExtension: string
}

export default function ImageGallery(props: ImageGalleryProps) {
    const [images, setImages] = createSignal<string[]>([]);

    function pause(delay: number) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve('resolve');
            }, delay);
        });
    }

    onMount(async () => {
        await pause(600);

        for (let i = 0; i < props.imagesCount; ++i) {
            const url = new URL(
                `../../assets/${props.imagesLocation}/images/${i + 1}.${props.imagesExtension}`,
                import.meta.url
            ).href;
            await pause(100);
            setImages((value) => [...value, url]);
        }
    })

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
                                imageExtension={props.imagesExtension}
                                maxCount={props.imagesCount}
                            />
                        )
                    }
                }
            </For>
        </div>
    )
}