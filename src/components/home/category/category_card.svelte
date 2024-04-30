<script lang="ts">
  import Icon from "@iconify/svelte";
  import Progress from "../../../lib/components/progress/progress.svelte";
  
  export let category: string;
  export let value: number = 0;
  export let icon: string;
  export let total: number = 0;
</script>

<div style="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;" class="rounded-lg bg-white p-4">
  <Icon icon="{icon}" class="text-[22px]" />
  <p class="text-[15px] mt-1">{category}</p>
  <div class="flex items-center justify-between">
    <Progress class="w-[50%] h-2" value={value} max={total} />
    <p class="bg-primary w-fit text-white px-3 text-[10px] py-[2px] rounded-full">
      {value}/{total}
    </p>
  </div>
</div>