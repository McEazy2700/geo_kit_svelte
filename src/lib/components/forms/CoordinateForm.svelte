<script lang="ts">
	import Card from '../Card.svelte';
	import { Input } from '.';

	let latDegRef: HTMLInputElement | null;
</script>

<div class="grid grid-cols-1 md:grid-cols-2">
	<Card>
		<p class="text-lg">Longitude</p>
		<div class="p-2 flex justify-around">
			<Input
				bind:ref={latDegRef}
				class="!m-2 rounded-md w-16 text-xl"
				type="number"
				placeholder="9°"
			/>
			<Input class="!m-2 rounded-md w-16 text-xl" type="number" placeholder="00'" />
			<Input class="!m-2 rounded-md w-16 text-xl" type="number" placeholder={'00"'} />
		</div>
	</Card>
	<Card>
		<p class="text-lg">Latitude</p>
		<div class="flex justify-around">
			<Input class="!m-2 rounded-md w-16 text-xl" type="number" placeholder="9°" />
			<Input class="!m-2 rounded-md w-16 text-xl" type="number" placeholder="00'" />
			<Input class="!m-2 rounded-md w-16 text-xl" type="number" placeholder={'00"'} />
		</div>
	</Card>
</div>
