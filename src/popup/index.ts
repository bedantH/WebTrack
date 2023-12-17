import Options from "../components/Options.svelte";
import { storage } from "../storage";

// Action popup
// https://developer.chrome.com/docs/extensions/reference/action/

function render() {
    const target = document.getElementById("app");

    if (target) {
        storage.get().then(({ isTurnedOn }) => {
          new Options({
            target,
          });
        });
    }
}

document.addEventListener("DOMContentLoaded", render);
