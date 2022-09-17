import "./Image.scss";

type ImageProps = {
    imageUrl: string,
    imageName: string
}

export default function Image(props: ImageProps) {
    return (
        <div id="Image">
            <img src={props.imageUrl} alt={props.imageName}/>
        </div>
    );
}