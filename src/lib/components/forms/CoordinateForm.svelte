<script lang="ts">
	import { Input } from '.';

	let latDegRef: HTMLInputElement | null;
</script>

<div class="p-10 grid grid-cols-1 md:grid-cols-2">
	<div class="grid grid-cols-3 gap-2">
		<Input bind:ref={latDegRef} class="w-16 text-xl" type="number" placeholder="9°" />
		<Input class="w-16 text-xl" type="number" placeholder="00'" />
		<Input class="w-16 text-xl" type="number" placeholder={'00"'} />
	</div>
	<div class="grid grid-cols-3 gap-2">
		<Input class="w-16 text-xl" type="number" placeholder="9°" />
		<Input class="w-16 text-xl" type="number" placeholder="00'" />
		<Input class="w-16 text-xl" type="number" placeholder={'00"'} />
	</div>
</div>
