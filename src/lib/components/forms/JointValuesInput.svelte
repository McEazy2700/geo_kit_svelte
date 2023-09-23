<!--
  @component
  Contains the styling and logic for jointValues input
-->
<script lang="ts">
	import { Label, Textarea } from 'flowbite-svelte';
	import { jointValueInputText, jointValues } from '$lib/stores';

	function handleKeyDown() {
		jointValueInputText.set($jointValueInputText.replace(/[a-zA-Z]/g, ''));
		jointValues.set(
			$jointValueInputText
				.split(',')
				.filter((val) => !isNaN(parseInt(val)))
				.map((val) => parseInt(val))
				.map((val) => {
					if (val > 360) {
						return 0o0;
					}
					if (val > 180) {
						return val - 180;
					}
					return val;
				})
		);
	}
</script>

<section class="flex flex-col items-center w-full">
	<div class="max-w-lg w-full">
		<Label class="font-bold text-xl" for="joint-values">Joint values</Label>
		<em
			title="Your joint values should be seperated by a comma ',' and no spaces. e.g 123,432"
			class="text-black/25">Your comma ',' seperated joint values</em
		>
		<Textarea
			bind:value={$jointValueInputText}
			on:keydown={handleKeyDown}
			title="Joint Values"
			name="JointValues"
			rows={5}
			id="joint-values"
			placeholder="36,128,320,127..."
		/>
	</div>
</section>
