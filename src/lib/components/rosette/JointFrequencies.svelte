<script lang="ts">
	import {
		Button,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { jointValues, jointInterval } from '$lib/stores';
	import { downloadSreadsheetFromTable, getJointFrequencies } from '$lib/utils/functions';

	const tableId = 'joint-frequencies';
	$: jointFrequencies = getJointFrequencies($jointValues, $jointInterval);

	function downloadFrequencies() {
		let tableElement = document.getElementById(tableId) as HTMLTableElement;
		downloadSreadsheetFromTable(tableElement, 'Joint Frequencies');
	}
</script>

<div class="flex flex-col w-full max-w-lg gap-3 items-center">
	<h3 class="h3 font-bold self-start">Joint Frequencies</h3>
	<Table shadow class="w-[90vw] max-w-lg" id={tableId}>
		<TableHead>
			<TableHeadCell>Range</TableHeadCell>
			<TableHeadCell>Frequencies</TableHeadCell>
		</TableHead>
		<TableBody>
			{#each jointFrequencies as freq}
				<TableBodyRow>
					<TableBodyCell>{freq.name}</TableBodyCell>
					<TableBodyCell>{freq.value}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
	{#if $jointValues.length > 0}
		<Button on:click={downloadFrequencies} type="button">Download as spreadsheet</Button>
	{/if}
</div>
