<script lang="ts">
	import { derived } from 'svelte/store';
	import { jointValues } from '$lib/stores';
	import { downloadSreadsheetFromTable } from '$lib/utils/functions';

	let tableRef: HTMLTableElement;
	const tableRows = derived(jointValues, ($jointValues) => {
		let rows: Array<number[]> = [];
		$jointValues.forEach((value) => {
			let lastRow = rows.pop() ?? [];
			if (lastRow.length !== 10) {
				rows.push([...lastRow, value]);
			} else {
				rows.push(lastRow);
				rows.push([value]);
			}
		});
		return rows;
	});
</script>

<div class="flex items-center flex-col gap-4">
	<h3 class="h3 font-semibold">Joint Values</h3>
	<table bind:this={tableRef} class="table w-full border-secondary-800/10" id="jointValue">
		{#each $tableRows as row}
			<tr class="table-row border-secondary-800/10">
				{#each row as value}
					<td class="table-cell p-3 border border-secondary-800/10">{value}</td>
				{/each}
			</tr>
		{/each}
	</table>
	{#if $tableRows.length > 0}
		<button
			on:click={() => downloadSreadsheetFromTable(tableRef, 'JointValues')}
			type="button"
			class="btn variant-filled hover:bg-tertiary-900/60">Download as spreadsheet</button
		>
	{/if}
</div>
