<script lang="ts">
	import JointsTable from '../../components/JointsTable.svelte';
	import RoseteDiagram from '../../components/RoseteDiagram.svelte';
	import jontValues from '$lib/stores/jontValues';
	import JointFrequencies from '../../components/JointFrequencies.svelte';

	let jointValue: number;

	let inputRef: HTMLInputElement;
	let btnRef: HTMLButtonElement;

	function handleClick() {
		if (jointValue <= 360) {
			let correct: number;
			if (jointValue >= 180) {
				correct = jointValue - 180;
			} else {
				correct = jointValue;
			}
			jontValues.push(correct);
		}
	}
</script>

<div class="flex flex-col w-full items-center p-10">
	<h2 class="h2 self-start">Create Rossete Diagram</h2>
	<div class="flex flex-col w-full gap-3 items-center">
		<h4 class="h4">Enter joint values</h4>
		<div class="grid grid-cols-2 gap-2">
			<input
				bind:this={inputRef}
				bind:value={jointValue}
				class="input p-1 outline-none px-3"
				type="number"
				on:keydown={(e) => {
					if (e.key === 'Enter') {
						btnRef.click();
						inputRef.value = '';
						inputRef.focus();
					}
				}}
				placeholder="230"
			/>
			<button
				on:click={handleClick}
				bind:this={btnRef}
				class="btn btn-sm variant-filled"
				type="button">Add</button
			>
		</div>
		<div class="flex flex-col items-center justify-evenly w-full p-1 gap-7">
			<div class="max-w-2xl w-screen">
				<RoseteDiagram />
			</div>
			<JointFrequencies />
			<JointsTable />
		</div>
	</div>
</div>
