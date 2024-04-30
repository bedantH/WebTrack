<script lang="ts">
  import Icon from "@iconify/svelte";
  import { page } from "../../store/page.store";

  const statements: {
    title: string;
    description: string;
  }[] = [
    {
      title: "Work",
      description: "Efficiently accomplish tasks, meet goals, contribute to organizational objectives at work."
    },
    {
      title: "School",
      description: "Manage time, study effectively, achieve educational objectives in school."
    },
    {
      title: "Casual",
      description: "Enjoy leisure, pursue interests, relax in casual settings."
    }
  ];

  let group = 'work'; // default to work if no query param
</script>

<div class="mx-5 my-4">
  <button class="bg-secondary p-2 rounded-md mt-2" on:click={() => {
    page.set("onboard-1");
  }}>
    <Icon icon="flowbite:chevron-left-solid" class="text-black text-2xl" />
  </button>
  <h3 class="text-xl font-semibold mt-3">What's your definition of being productive ?</h3>
  <!-- text area -->
  <input class="border-[1px] border-solid border-gray-300 rounded-md p-3 mt-2 w-full focus:outline-none" />
  <center class="my-2">or</center>
  <div class="flex flex-col gap-2">
    {#each statements as statement}
      <label>
        <div class="px-3 py-2 border-[1px] border-solid border-gray-200 rounded-md">
          <div class="flex items-cente gap-3">
            <input type="radio" bind:group={group} value={statement.title.toLowerCase()}>
            <div>
              <p class="text-[14px] font-semibold">{statement.title}</p>
              <p class="mt-1 text-[11px] text-gray-500">{statement.description}</p>
            </div>
          </div>
        </div>
      </label>
    {/each}
  </div>

  <div class="flex justify-end">
    <button class="bg-primary p-2 rounded-md mt-2" on:click={() => {
      page.set("home");
    }}>
      <Icon icon="flowbite:chevron-right-solid" class="text-white text-2xl" />
    </button>
  </div>
</div>