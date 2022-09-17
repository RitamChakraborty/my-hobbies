import "./Image.scss";
import {useNavigate} from "@solidjs/router";

type ImageProps = {
    imageUrl: string,
    imageName: string
}

export default function Image(props: ImageProps) {
    const navigate = useNavigate();

    function onClick() {
        navigate("/cycling/1", {
            state: props
        });
    }

    return (
        <div id="Image">
            <img onClick={onClick} src={props.imageUrl} alt={props.imageName}/>
        </div>
    );
}