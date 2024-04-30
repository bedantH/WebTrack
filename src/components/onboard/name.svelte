<script lang="ts">
  import Icon from "@iconify/svelte";
  import { page } from "../../store/page.store";

</script>

<div class="mx-5 my-4">
  <h3 class="text-xl font-semibold mt-8">Let's get you going</h3>
  <p class="mt-2">
    <!-- a fun framed question to ask the user's name -->
    What can we call you ?
  </p>
  <input type="text" placeholder="Your Name" class="border-[1px] border-solid border-gray-300 px-3 py-3 rounded-md w-full mt-2 focus:outline-none" />
  <div class="flex justify-end">
    <button class="bg-primary p-2 rounded-md mt-2" on:click={() => {
      page.set("onboard-2");
    }}>
      <Icon icon="flowbite:chevron-right-solid" class="text-white text-2xl" />
    </button>
  </div>
</div>