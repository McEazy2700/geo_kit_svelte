<script lang="ts">
	import { CooridnateInput } from '.';
	import { locations } from '$lib/stores/map';
	import { Location } from '$lib/utils/classes';

	let latitude = '';
	let longitude = '';

	function handleComplete() {
		locations.push(new Location(latitude, longitude));
	}
</script>

<div class="w-full flex flex-col items-center">
	<div class="flex items-center gap-20">
		<CooridnateInput on:complete={handleComplete} bind:coordinate={latitude} name="Latitude" />
		<CooridnateInput on:complete={handleComplete} bind:coordinate={longitude} name="Longitude" />
	</div>
</div>
