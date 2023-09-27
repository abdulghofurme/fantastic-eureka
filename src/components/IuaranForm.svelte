<script lang="ts">
  import SearchableInput from "./SearchableInput.svelte";
  import MaterialSelect from "./MaterialSelect.svelte";

  const homeNumbers = [...Array(36).keys()].map((number) => `A-${number + 1}`);
  export let home: string = "";
  export let selectValue = "";
  export let startMonth: number;
  $: endMonth = startMonth;

  const iuaranType: { [index: string]: { label: string; nominal: number } } = {
    keamanan: {
      label: "Keamanan",
      nominal: 75000,
    },
    kebersihan: {
      label: "Kebersihan",
      nominal: 50000,
    },
  };

  let iuaranList: Array<{
    home: string;
    label: string;
    nominal: number;
    months: Array<number | string>;
  }> = [];

$:	total = iuaranList.reduce((result, {nominal, months}) => result += nominal * months.length, 0)

  function addItem() {
    const months = [];
    if (endMonth === startMonth) months.push(startMonth);
    else {
      for (let index = startMonth; index <= endMonth; index++) {
        months.push(index);
      }
    }

    iuaranList = [
      {
        home,
        label: selectValue,
        nominal: iuaranType[selectValue].nominal,
        months,
      },
      ...iuaranList,
    ];
  }

  function removeItem(idx: number) {
    iuaranList = iuaranList.filter((_, i) => i !== idx);
  }
</script>

<form class="pb-[100px]">

  <div class="rounded-lg border border-gray-500 p-4">
    <div>
      <SearchableInput
        {homeNumbers}
        label="No. Rumah"
        inputProps={{ placeholder: "A-1" }}
        bind:value={home}
      />
    </div>

    <MaterialSelect
      class="mt-4"
      label="Nama Iuran"
      options={[
        { label: "Keamanan", value: "keamanan" },
        { label: "Kebersihan", value: "kebersihan" },
      ]}
      inputProps={{ placeholder: "Pilih Iuran" }}
      bind:value={selectValue}
    />

    <div class="mt-4 flex items-center justify-between gap-2">
      <MaterialSelect
        label="dari Bulan"
        options={[
          { label: "Oktober", value: 10 },
          { label: "November", value: 11 },
          { label: "Desember", value: 12 },
        ]}
        inputProps={{ placeholder: "Pilih bulan" }}
        bind:value={startMonth}
      />

      <div class="h-[2px] rounded w-4 bg-teal-500 shrink-0" />

      <MaterialSelect
        label="sampai Bulan"
        options={[
          { label: "Oktober", value: 10 },
          { label: "November", value: 11 },
          { label: "Desember", value: 12 },
        ]}
        inputProps={{ placeholder: "Pilih bulan" }}
        bind:value={endMonth}
      />
    </div>

    <button
      type="button"
      class="mt-4 mkr_btn-primary--outlined w-full h-9 p-0"
      on:click={addItem}>Tambah</button
    >
  </div>

  <div class="mx-auto my-3 h-[2px] rounded w-60 bg-teal-500" />

  <ul>
    {#each iuaranList as iuaran, idx}
      <li class="flex items-center justify-between py-1">
        <p class="mkr_ty-text-xs--regular w-full">
          {iuaran.home} -
          {iuaran.label} -
          <span class="text-teal-600 mkr_ty-text-2xs--regular"
            >{iuaran.nominal}</span
          >
        </p>
        <p class="mkr_ty-text-xs--regular">x{iuaran.months.length}</p>
        <p class="mkr_ty-text-xs--regular w-1/3 shrink-0 text-right">
          Rp {iuaran.months.length * iuaran.nominal}
        </p>

        <button
          type="button"
          class="w-6 h-6 shrink-0 ml-2"
          on:click={() => removeItem(idx)}
        >
          <span class="material-symbols-rounded text-red-900">
            disabled_by_default
          </span>
        </button>
      </li>
    {/each}
  </ul>

  <div class="fixed bottom-0 left-0 w-full p-4 shadow-high">
    <div class="flex items-center justify-between mb-2">
      <span class="mkr_ty-text-s text-gray-600">Total</span>
      <span class="mkr_ty-heading-m text-teal-600">Rp {total}</span>
    </div>
    <button type="submit" class="mkr_btn-primary w-full p-0 h-9"
      >Lanjutkan</button
    >
  </div>
</form>
