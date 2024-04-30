<script lang="ts">

  import { Select, SelectContent, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../../lib/components/ui/select";

  export let label: string;
  export let placeholder: string;
  export let value: any;
  export let onInput :(e: any) => void;
  export let options: { label: string, value: any }[];

</script>

<Select onSelectedChange={onInput}>
  <SelectLabel>{label}</SelectLabel>
  <SelectTrigger class="w-full">
    <SelectValue placeholder={placeholder}>{value}</SelectValue>
  </SelectTrigger>
  <SelectContent>
    {#each options as option}
      <SelectItem value={option.value}>{option.label}</SelectItem>
    {/each}
  </SelectContent>
</Select>