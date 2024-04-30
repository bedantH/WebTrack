<script lang="ts">
  export let name: string;
  export let label: string = "";
  export let value: string;
  export let placeholder = "";
  export let onInput: (e: any) => void;
</script>

<div>
  {#if label}
    <label for={name} class="text-sm">{label}</label>
  {/if}
  <input name={name} type="text" value={value} on:change={(e) => onInput(e)} placeholder={placeholder} class="border-[1px] border-solid border-gray-300 px-3 py-3 rounded-md w-full mt-2 focus:outline-none" />
</div>