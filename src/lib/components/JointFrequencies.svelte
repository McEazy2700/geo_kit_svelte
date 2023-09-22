<script lang="ts">
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import type { JointFrequency } from '$lib/stores/types';
	import { jointValues, jointFrequencies } from '$lib/stores';
	import { downloadSreadsheetFromTable } from '$lib/utils/functions';

	function createTable(freqs: JointFrequency[]) {
		const simpleTable: TableSource = {
			head: ['Range', 'Frequency'],
			body: tableMapperValues(freqs, ['name', 'value'])
		};
		return simpleTable;
	}

	function downloadFrequencies() {
		let tableElement = document.getElementsByTagName('table')[0];
		downloadSreadsheetFromTable(tableElement, 'JointFrequencies');
	}
</script>

<div class="flex flex-col w-full gap-3 items-center">
	<h3 class="h3 font-bold">Joint Frequencies</h3>
	<Table source={createTable($jointFrequencies)} />
	{#if $jointValues.length > 0}
		<button
			on:click={downloadFrequencies}
			type="button"
			class="btn variant-filled max-w-md hover:bg-tertiary-900/60">Download as spreadsheet</button
		>
	{/if}
</div>
