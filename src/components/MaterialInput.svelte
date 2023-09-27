<script lang="ts">
  import type {
    HTMLInputAttributes,
    HTMLLabelAttributes,
  } from "svelte/elements";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let value = "";
  export let inputProps: HTMLInputAttributes;
  export let labelProps: HTMLLabelAttributes;
  export let label: string = "";

  function onFocus() {
    dispatch("focus", "");
  }
</script>

<div>
  <input
    {...inputProps}
    on:focus={onFocus}
    bind:value
    placeholder={inputProps?.placeholder || label}
  />
  <label {...labelProps} for={inputProps?.id}
    >{label || inputProps?.placeholder}</label
  >
  <slot />
</div>

<style lang="postcss">
  div {
    @apply relative h-12;
  }

  input {
    @apply h-full w-full outline-none border border-[#0000003b] rounded-lg px-4 transition-all;
    @apply mkr_ty-text-s text-gray-500 placeholder:mkr_ty-text-s placeholder:text-transparent;
    @apply focus:border-2 focus:border-teal-500 focus:placeholder:text-gray-300;
  }

  label {
    @apply pointer-events-none absolute mkr_ty-text-s text-gray-500 transition-all;
    @apply left-4 top-1/2 -translate-y-1/2;
  }

  input:not(:placeholder-shown) + label,
  input:focus + label {
    @apply left-0 top-0 scale-75 -translate-x-[12%] mx-3 px-2  bg-white;
  }

  input:focus + label {
    @apply text-teal-500;
  }

  input:focus {
    @apply placeholder:text-gray-300;
  }
</style>
