import "./GlobalNav.scss";
import {createSignal, Show} from "solid-js";
import FloatingActionButton from "../FloatingActionButton/FloatingActionButton";
import {useNavigate} from "@solidjs/router";

export default function GlobalNav() {
    const navigate = useNavigate();
    const [selected, setSelected] = createSignal<boolean>(false);

    function onMenuClick() {
        if (selected()) {
            navigate("/");
        } else {
            setSelected(true);
        }
    }

    return (
        <>
            <Show when={selected()} keyed>
                <div class="overlay" onClick={() => setSelected(!selected())}/>
            </Show>
            <div id="GlobalNav">
                <FloatingActionButton
                    icon={selected() ? 'fa-solid fa-house-user' : 'fa-solid fa-bars'}
                    onTap={onMenuClick}
                />
            </div>
        </>
    );
}