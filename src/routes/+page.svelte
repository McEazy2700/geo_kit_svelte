<script lang="ts">
	import { ProgressBar, Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import { PARSE_COORDINATES } from '$lib/graphql/mutations';
	import { getContextClient, mutationStore, type OperationResultStore } from '@urql/svelte';
	import type {
		Coordinate,
		MutationParseCoordinatesArgs,
		RawCoordinate
	} from '$lib/graphql/generated';

	let latDeg: number | null;
	let latMin: number | null;
	let latSec: number | null;
	let lonDeg: number | null;
	let lonMin: number | null;
	let lonSec: number | null;
	let latDegRef: HTMLInputElement;
	let latMinRef: HTMLInputElement;
	let latSecRef: HTMLInputElement;
	let lonDegRef: HTMLInputElement;
	let lonMinRef: HTMLInputElement;
	let lonSecRef: HTMLInputElement;
	let addBtnRef: HTMLButtonElement;

	let raw: RawCoordinate[] = [];
	let result: OperationResultStore<
		{ parseCoordinates: Coordinate[] },
		MutationParseCoordinatesArgs
	>;

	function addRawCoord() {
		raw.push({
			lat: `${latDeg},${latMin},${latSec}`,
			lon: `${lonDeg},${lonMin},${lonSec}`
		});
	}

	let client = getContextClient();
	const parseCoordinates = () => {
		result = mutationStore<{ parseCoordinates: Array<Coordinate> }, MutationParseCoordinatesArgs>({
			client,
			query: PARSE_COORDINATES,
			variables: {
				coordinates: raw
			}
		});
	};

	function handleClick() {
		addRawCoord();
		parseCoordinates();
	}
	latDeg = null;
	latMin = null;
	latSec = null;
	lonDeg = null;
	lonMin = null;
	lonSec = null;

	function createTable(coords: { coords: Coordinate[] }) {
		const simpleTable: TableSource = {
			head: ['S/N', 'Latitude (dec)', 'Latitude (deg)', 'Longitude (dec)', 'Longitude (deg)'],
			body: tableMapperValues(coords.coords, ['id', 'lat', 'latStr', 'lon', 'lonStr'])
		};
		return simpleTable;
	}
</script>

<main class="w-full flex items-center p-10 gap-10 flex-col">
	<form class="max-w-5xl flex items-end gap-7">
		<div class="flex flex-col items-center">
			<h2 class="font-bold text-lg">Latitude</h2>
			<div class="flex items-center gap-3">
				<div class="flex items-center gap-1">
					<input
						id="deg"
						type="number"
						bind:value={latDeg}
						bind:this={latDegRef}
						on:keydown={(e) => e.key === 'Enter' && latMinRef.focus()}
						class="input bg-transparent px-3 outline-none w-14"
						placeholder="9°"
					/>
					<label class="font-bold text-lg" for="deg">&deg;</label>
				</div>
				<div class="flex items-center gap-1">
					<input
						id="min"
						type="number"
						bind:value={latMin}
						bind:this={latMinRef}
						on:keydown={(e) => e.key === 'Enter' && latSecRef.focus()}
						class="input bg-transparent px-3 outline-none w-14"
						placeholder="00'"
					/>
					<label class="font-bold text-lg" for="min">&prime;</label>
				</div>
				<div class="flex items-center gap-1">
					<input
						id="sec"
						type="number"
						bind:value={latSec}
						bind:this={latSecRef}
						on:keydown={(e) => e.key === 'Enter' && lonDegRef.focus()}
						class="input bg-transparent px-3 outline-none w-14"
						placeholder={'00"'}
					/>
					<label class="font-bold text-lg" for="sec">&Prime;</label>
				</div>
				<span class="font-bold text-lg">N</span>
			</div>
		</div>
		<div class="flex flex-col items-center">
			<h2 class="font-bold text-lg">Longitude</h2>
			<div class="flex items-center gap-2">
				<div class="flex items-center gap-1">
					<input
						id="deg"
						type="number"
						bind:value={lonDeg}
						bind:this={lonDegRef}
						on:keydown={(e) => e.key === 'Enter' && lonMinRef.focus()}
						class="input bg-transparent px-3 outline-none w-14"
						placeholder="6°"
					/>
					<label class="font-bold text-lg" for="deg">&deg;</label>
				</div>
				<div class="flex items-center gap-1">
					<input
						id="min"
						type="number"
						bind:value={lonMin}
						bind:this={lonMinRef}
						on:keydown={(e) => e.key === 'Enter' && lonSecRef.focus()}
						class="input bg-transparent px-3 outline-none w-14"
						placeholder="00'"
					/>
					<label class="font-bold text-lg" for="min">&prime;</label>
				</div>
				<div class="flex items-center gap-1">
					<input
						id="sec"
						type="number"
						bind:value={lonSec}
						bind:this={lonSecRef}
						on:keydown={(e) => {
							if (e.key === 'Enter') {
								addBtnRef.click();
								latDegRef.value = '';
								latMinRef.value = '';
								latSecRef.value = '';
								lonDegRef.value = '';
								lonMinRef.value = '';
								lonSecRef.value = '';
								latDegRef.focus();
							}
						}}
						class="input bg-transparent px-3 outline-none w-14"
						placeholder={'00"'}
					/>
					<label class="font-bold text-lg" for="sec">&Prime;</label>
				</div>
				<span class="font-bold text-lg">E</span>
			</div>
		</div>
		<button
			on:click={handleClick}
			bind:this={addBtnRef}
			class="btn btn-sm variant-filled"
			type="button">Parse</button
		>
	</form>

	{#if $result && $result.fetching}
		<ProgressBar />
	{:else if $result && $result.error}
		{console.log({ error: $result.error })}
		<p>An Error occured {$result.error.name}</p>
	{:else if $result && $result.data}
		<Table source={createTable({ coords: $result.data.parseCoordinates })} />
	{/if}
</main>
