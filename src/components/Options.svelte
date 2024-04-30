<script lang="ts">
  import "../app.css";
  import Home from "./home/home.svelte";
  import Topbar from "./topbar.svelte";
  import Name from "./onboard/name.svelte";
  import { page } from "../store/page.store";
  import { onDestroy } from 'svelte';
  import Productivity from "./onboard/productivity.svelte";

  let currPage: string = "";
  let currComponent: any;

  const unsubscribe = page.subscribe((value) => {
    currPage = value;
  });

  $: {
    if (currPage === 'onboard-1') {
      currComponent = Name;
    } 
    else if (currPage === 'onboard-2') {
      currComponent = Productivity;  
    }
    // else if (currPage === 'create-focus') {
    //   currComponent = Startfocus;
    // }
    else if (currPage === 'home') {
      currComponent = Home;
    }
  }
  onDestroy(unsubscribe);
</script>

<div class="container p-0">
  <Topbar />
  <svelte:component this={currComponent} />
</div>

<style>
  .container {
    min-width: 350px;
    min-height: 600px;
    background: white;
  }
</style>
