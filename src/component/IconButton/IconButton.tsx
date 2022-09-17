import "./IconButton.scss";

type IconButtonType = {
    iconClass: string,
    onClick: () => void
}

export default function IconButton(props: IconButtonType) {
    return (
        <div id="IconButton" onClick={props.onClick}>
            <i class={props.iconClass}/>
        </div>
    );
}