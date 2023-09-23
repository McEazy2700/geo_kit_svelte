<script lang="ts">
	import { derived } from 'svelte/store';
	import { jointValues } from '$lib/stores';
	import { downloadSreadsheetFromTable } from '$lib/utils/functions';
	import { Button, Table, TableBody, TableBodyCell, TableBodyRow } from 'flowbite-svelte';

	const tableId = 'joint-values';

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

	function downloadJointValues() {
		const table = document.getElementById(tableId) as HTMLTableElement;
		downloadSreadsheetFromTable(table, 'Joint Values');
	}
</script>

<div class="flex items-center w-full max-w-lg flex-col gap-2">
	<h3 class="h3 self-start font-semibold">Joint Values</h3>
	<Table class="w-full" id={tableId} shadow>
		<TableBody>
			{#each $tableRows as row}
				<TableBodyRow>
					{#each row as value}
						<TableBodyCell class="border p-1.5 md:p-2 lg:px-4 border-black/10"
							>{value}</TableBodyCell
						>
					{/each}
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
	{#if $tableRows.length > 0}
		<Button on:click={downloadJointValues} type="button" class="">Download as spreadsheet</Button>
	{/if}
</div>
