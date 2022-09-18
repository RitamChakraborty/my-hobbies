import "./Video.scss";

type VideoProps = {
    source: string
}

export default function Video(props: VideoProps) {
    return (
        <div id="Video">
            <video src={props.source} controls/>
        </div>
    )
}