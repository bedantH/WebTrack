import { writable, type Writable } from "svelte/store";

export const page: Writable<string> = writable("onboard-1");

page.subscribe(() => {
  console.log("New subscription added");
});
