<script lang="ts">
	import JointsTable from '../../components/JointsTable.svelte';

	let joints: number[] = [];
	let jointValue: number;

	let inputRef: HTMLInputElement;
	let btnRef: HTMLButtonElement;

	function handleClick() {
		if (jointValue < 540) {
			let correct: number;
			if (jointValue <= 180) {
				correct = jointValue + 180;
			} else if (jointValue > 360) {
				correct = jointValue - 180;
			} else {
				correct = jointValue;
			}
			joints.push(correct);
			joints = joints;
		}
	}
</script>

<div class="flex flex-col items-center p-10">
	<h2 class="h2 self-start">Create Rossete Diagram</h2>
	<div class="flex flex-col gap-3 items-center">
		<h4 class="h4">Enter joint values</h4>
		<JointsTable {joints} />
		<div class="grid grid-cols-2 max-w-[8rem] gap-2">
			<input
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
				bind:this={inputRef}
				placeholder="230"
			/>
			<button
				on:click={handleClick}
				bind:this={btnRef}
				class="btn btn-sm variant-filled"
				type="button">Add</button
			>
		</div>
	</div>
</div>
