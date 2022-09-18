import "./Image.scss";
import {useNavigate} from "@solidjs/router";

type ImageProps = {
    imageLocation: string,
    imageId: number,
    imageUrl: string,
    imageName: string
}

export default function Image(props: ImageProps) {
    const navigate = useNavigate();

    function onClick() {
        navigate(`/${props.imageLocation}/${props.imageId}`, {
            state: props
        });
    }

    return (
        <div id="Image">
            <img onClick={onClick} src={props.imageUrl} alt={props.imageName}/>
            <span>
                <i class="fa-solid fa-image"/>
                Click to view image
            </span>
        </div>
    );
}