import "./FloatingActionButton.scss";

type FloatingActionButtonProps = {
    icon: string,
    onTap: () => void,
    tooltip?: string,
}

export default function FloatingActionButton(props: FloatingActionButtonProps) {
    return (
        <div id="FloatingActionButton" onClick={props.onTap} title={props.tooltip}>
            <i class={props.icon}/>
        </div>
    )
}