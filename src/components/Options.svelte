<script lang="ts">
  import { storage } from "../storage";
  import "../app.css";
  import Icon from "@iconify/svelte";
  import Switch from "../lib/components/switch/switch.svelte";
  import Label from "../lib/components/label/label.svelte";
  import Schedule from "./schedule.svelte";

  let isTurnedOn: boolean = false;

  storage.get().then((value) => {
    isTurnedOn = value.isTurnedOn || false;
  });

  $: storage.set({ isTurnedOn });
</script>

<div class="container">
  <div class="flex px-3 pt-9 justify-center items-center">
    <div class="flex flex-col justify-center items-center gap-[5px]">
      <Icon icon="material-symbols:history" class="text-black text-3xl" />
      <h1 class="font-extrabold text-black text-lg">Storesis</h1>
    </div>
  </div>
  <p class="text-black mt-3 text-center">
    Storesis helps you track and control how you browse through the web, and improve your productivity.
  </p>
  <div class="mt-20 bg-[#3d3d3d] py-4 px-3 rounded-md">
    <div class="flex flex-col justify-center items-center gap-3">
      <Label for="extension-value" class="text-white">Turn {isTurnedOn ? "Off" : "On"}</Label>
      <Switch id="extension-value" bind:checked={isTurnedOn} />
    </div>
    <p class="text-white text-[10px] mt-4 text-center">
      By turning off the extension, we won't be able to track your browsing history.
    </p>
  </div>
  <Schedule />
</div>

<style>
  .container {
    min-width: 300px;
    min-height: 480px;
    background: white;
  }
</style>
