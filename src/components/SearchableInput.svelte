<script>
  import MaterialInput from "./MaterialInput.svelte";

  export let homeNumbers;
  export let value = "";
  $: inputValue = value;

  let isShow = false;

  $: homeList = value
    ? homeNumbers.filter((item) =>
        item?.toLowerCase()?.includes(value.toLowerCase())
      )
    : homeNumbers;

  function onSelect(selected) {
    value = selected;
    isShow = false;
  }
</script>

<MaterialInput
  {...$$restProps}
  on:focus={() => {
    isShow = true;
  }}
  on:blur={() => {
    isShow = false;
  }}
  bind:value={inputValue}
>
  <div
    class={`absolute top-[calc(100%+4px)] -translate-x-1/2 left-1/2 w-[calc(100%+8px)] p-2 bg-white shadow-low rounded-lg max-h-[200px] overflow-y-auto tablet-lg:block z-20 ${
      isShow ? "block" : "hidden"
    }`}
  >
    {#each homeList as homeNumber}
      <button
        type="button"
        class="p-2 block w-full text-left mkr_ty-text-s text-gray-700"
        on:click={() => onSelect(homeNumber)}>{homeNumber}</button
      >
    {/each}
  </div>
</MaterialInput>
