import "./GlobalNav.scss";
import {createSignal, Show} from "solid-js";
import FloatingActionButton from "../FloatingActionButton/FloatingActionButton";
import {useNavigate} from "@solidjs/router";
import cycling from "../../assets/cycling/icon.png";
import cycleRepairing from "../../assets/cycle-repairing/icon.png";
import mobileRepairing from "../../assets/mobile-repairing/icon.png";
import computerRepairing from "../../assets/computer-repairing/icon.png";
import speakerRepairing from "../../assets/speakers-repairing/icon.png";
import electronicRepairing from "../../assets/electronics-repairing/icon.png";
import flyingKites from "../../assets/flying-kites/icon.png";

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

    function link(url: string) {
        return () => {
            navigate(url);
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
                    onTap={link("/flying-kites")}
                    selected={selected()}
                    image={flyingKites}
                />
                <FloatingActionButton
                    icon={selected() ? 'fa-solid fa-house-user' : 'fa-solid fa-bars'}
                    onTap={link("/electronics-repairing")}
                    selected={selected()}
                    image={electronicRepairing}
                />
                <FloatingActionButton
                    icon={selected() ? 'fa-solid fa-house-user' : 'fa-solid fa-bars'}
                    onTap={link("/speakers-repairing")}
                    selected={selected()}
                    image={speakerRepairing}
                />
                <FloatingActionButton
                    icon={selected() ? 'fa-solid fa-house-user' : 'fa-solid fa-bars'}
                    onTap={link("/computer-repairing")}
                    selected={selected()}
                    image={computerRepairing}
                />
                <FloatingActionButton
                    icon={selected() ? 'fa-solid fa-house-user' : 'fa-solid fa-bars'}
                    onTap={link("/mobile-repairing")}
                    selected={selected()}
                    image={mobileRepairing}
                />
                <FloatingActionButton
                    icon={selected() ? 'fa-solid fa-house-user' : 'fa-solid fa-bars'}
                    onTap={link("/cycle-repairing")}
                    selected={selected()}
                    image={cycleRepairing}
                />
                <FloatingActionButton
                    icon={selected() ? 'fa-solid fa-house-user' : 'fa-solid fa-bars'}
                    onTap={link("/cycling")}
                    selected={selected()}
                    image={cycling}
                />
                <FloatingActionButton
                    icon={selected() ? 'fa-solid fa-house-user' : 'fa-solid fa-bars'}
                    onTap={onMenuClick}
                    selected={selected()}
                    primary={true}
                />
            </div>
        </>
    );
}