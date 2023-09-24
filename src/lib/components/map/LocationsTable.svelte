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
	import { locations } from '$lib/stores/map';
	import { downloadSreadsheetFromTable } from '$lib/utils/functions';
	const tableId = 'coordinates-table';
	function handleDownload() {
		const table = document.getElementById(tableId) as HTMLTableElement;
		downloadSreadsheetFromTable(table, 'Coordinates Table');
	}
</script>

<div class="p-5 class w-full flex flex-col items-center gap-3">
	<Table class="w-screen max-w-6xl" id={tableId} shadow striped>
		<TableHead>
			<TableHeadCell>S/N</TableHeadCell>
			<TableHeadCell>Latitude</TableHeadCell>
			<TableHeadCell>Longitude</TableHeadCell>
			<TableHeadCell>Latitude (dec)</TableHeadCell>
			<TableHeadCell>Longitude (dec)</TableHeadCell>
		</TableHead>
		<TableBody tableBodyClass="divide-y">
			{#each $locations as location, index}
				<TableBodyRow>
					<TableBodyCell>{index + 1}</TableBodyCell>
					<TableBodyCell>{location.latitude.str}</TableBodyCell>
					<TableBodyCell>{location.longitude.str}</TableBodyCell>
					<TableBodyCell>{location.latitude.dec}</TableBodyCell>
					<TableBodyCell>{location.longitude.dec}</TableBodyCell>
				</TableBodyRow>
			{/each}
		</TableBody>
	</Table>
	{#if $locations.length > 0}
		<Button type="button" on:click={handleDownload}>Download as spreadsheet</Button>
	{/if}
</div>
