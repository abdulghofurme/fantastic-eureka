<script lang="ts">
  import type {
    HTMLLabelAttributes,
    HTMLSelectAttributes,
  } from "svelte/elements";

  export let value: number | string = "";

  export let inputProps: HTMLSelectAttributes = {};
  export let labelProps: HTMLLabelAttributes = {};
  export let label: string = "";
  export let options: Array<{ label: string; value: string | number }> = [];
</script>

<div {...$$restProps}>
  <select {...inputProps} bind:value required>
    <option value="" disabled selected
      >{inputProps?.placeholder || label}</option
    >
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
  <label {...labelProps} for={inputProps?.id}
    >{label || inputProps?.placeholder}</label
  >
  <slot />
</div>

<style lang="postcss">
  div {
    @apply relative h-12 w-full;
  }

  select {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;
    @apply h-full w-full outline-none border border-[#0000003b] rounded-lg px-4 transition-all bg-white;
    @apply mkr_ty-text-s text-gray-500;
    @apply focus:border-2 focus:border-teal-500 focus:placeholder:text-gray-300;
  }

  label {
    @apply pointer-events-none absolute mkr_ty-text-s text-gray-500 transition-all;
    /* @apply left-4 top-1/2 -translate-y-1/2; */
    @apply left-0 top-0 -translate-y-1/2 scale-75 -translate-x-[12%] mx-3 px-2  bg-white;
  }

  select:focus + label {
    @apply text-teal-500;
  }
</style>
