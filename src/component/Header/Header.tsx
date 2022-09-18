import "./Header.scss";

type HeaderProps = {
    title: string,
    img: string,
    position?: string
}

export default function Header(props: HeaderProps) {
    return (
        <div
            id="Header"
            style={{
                "background-image": `url(${props.img})`,
                "background-position": props.position || 'center'
            }}
        >
            <h1>{props.title}</h1>
        </div>
    )
}