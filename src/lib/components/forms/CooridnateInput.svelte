<script lang="ts">
	import { Input } from 'flowbite-svelte';
	import { createEventDispatcher } from 'svelte';
	export let name: 'Longitude' | 'Latitude';
	const degId = `deg-${Math.round(Math.random() * 1000)}`;
	const minId = `min-${Math.round(Math.random() * 1000)}`;
	const secId = `sec-${Math.round(Math.random() * 1000)}`;

	export let coordinate = '';

	const dispatch = createEventDispatcher();

	let deg = '';
	let min = '';
	let sec = '';

	function getHTMLInput(id: string): HTMLInputElement {
		return document.getElementById(id) as HTMLInputElement;
	}
	function handleNextField(e: KeyboardEvent, fieldId: string) {
		if (e.key == 'Enter') {
			getHTMLInput(fieldId).focus();
		}
	}

	function handleComplete() {
		dispatch('complete');
	}

	function goToLastDegInput() {
		let degInput = getHTMLInput(degId);
		let lastDegInput = document.getElementsByClassName('degree')[1] as HTMLInputElement;
		if (degInput !== lastDegInput) {
			lastDegInput.focus();
		} else {
			handleComplete();
			const firstDeg = document.getElementsByClassName('degree')[0] as HTMLInputElement;
			firstDeg.value = '';
			(document.getElementsByClassName('minute')[0] as HTMLInputElement).value = '';
			(document.getElementsByClassName('second')[0] as HTMLInputElement).value = '';
			deg = '';
			min = '';
			sec = '';
			firstDeg.focus();
		}
	}

	function handleSecKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			goToLastDegInput();
		}
	}

	function handleChange() {
		coordinate = `${deg},${min},${sec}`;
		dispatch('change', coordinate);
	}
</script>

<div class="flex flex-col gap-2 items-center">
	<h4 class="font-medium text-black/70">{name}</h4>
	<div class="flex items-center gap-2">
		<div class="flex items-start gap-1">
			<Input
				bind:value={deg}
				on:keydown={(e) => {
					handleChange();
					handleNextField(e, minId);
				}}
				id={degId}
				class="w-10 degree aspect-square text-lg p-1 pl-2"
				placeholder={name === 'Latitude' ? '9' : '6'}
			/>
			<span>°</span>
		</div>
		<div class="flex items-start gap-1">
			<Input
				bind:value={min}
				on:keydown={(e) => {
					handleChange();
					handleNextField(e, secId);
				}}
				id={minId}
				class="w-10 minute aspect-square text-lg p-1 pl-2"
				placeholder="00"
			/>
			<span>'</span>
		</div>
		<div class="flex items-start gap-1">
			<Input
				bind:value={sec}
				on:keydown={(e) => {
					handleChange();
					handleSecKeydown(e);
				}}
				id={secId}
				class="w-10 second aspect-square text-lg p-1 pl-2"
				placeholder="00"
			/>
			<span>"</span>
		</div>
		<span class="text-xl text-black/70">{name == 'Latitude' ? 'N' : 'E'}</span>
	</div>
</div>
