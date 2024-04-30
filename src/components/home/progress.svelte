<script lang="ts">
  import Progress from "../../lib/components/progress/progress.svelte";

  let value = 40;
</script>

<div class="rounded-lg mt-1 border-[1px] py-3 px-4 border-solid border-[#f17f4e]">
  <h3 class="text-sm font-medium">Day Insights</h3>
  <p class="text-[11px]">Track your daily browsing habits</p>
  <div class="flex justify-between mt-2">
    <p class="text-[11px]">{value}%</p>
    <p class="text-[11px]">100%</p>
  </div>
  <Progress {value} max={100} class="h-3" />
</div>