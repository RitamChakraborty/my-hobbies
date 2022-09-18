import {Show} from "solid-js";
import "./FloatingActionButton.scss";

type FloatingActionButtonProps = {
    icon: string,
    onTap: () => void,
    selected: boolean,
    primary?: boolean,
    image?: string,
    tooltip?: string,
}

export default function FloatingActionButton(props: FloatingActionButtonProps) {
    return (
        <div
            id="FloatingActionButton"
            onClick={props.onTap}
            title={props.tooltip}
            style={{
                "background-color": props.primary ? "orange" : "white",
                "position": props.selected ? "relative" : "absolute",
                "box-shadow": props.primary ? 'rgba(0, 0, 0, 0.35) 0 5px 15px' : 'none'
            }}
        >
            <Show
                when={!props.primary}
                fallback={<i class={props.icon}/>}
                keyed
            >
                <img src={props.image} alt={props.tooltip}/>
            </Show>
        </div>
    )
}