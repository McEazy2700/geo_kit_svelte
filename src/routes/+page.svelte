<script>
	import { A } from 'flowbite-svelte';
</script>

<div class="p-5 md:p-10 flex flex-col gap-4">
	<section class="flex flex-col md:flex-row">
		<p class="text-5xl md:text-7xl font-medium flex-1">
			All your <br /> <span class="text-6xl md:text-8xl font-semibold">Geo-tools</span> <br /> in one
			place
		</p>
		<div class="flex-1" />
	</section>
	<section class="w-rull flex flex-col gap-1">
		<h3 class="font-medium text-xl text-black/70">Get started</h3>
		<div class="w-full max-w-lg flex flex-wrap gap-2 md:gap-8">
			<A href="/map">Create a Map</A>
			<A href="/rosette">Create a Rosette Diagram</A>
		</div>
	</section>
</div>
