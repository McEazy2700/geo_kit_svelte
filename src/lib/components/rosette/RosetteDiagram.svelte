<script lang="ts">
	import { PolarArea } from 'svelte-chartjs';
	import { Chart, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js';
	Chart.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);
	import type { ChartData } from 'chart.js';
	import { RosePole } from '$lib/utils/classes';
	import { jointValues, jointInterval } from '$lib/stores';
	import { afterUpdate } from 'svelte';
	import { Button, Input } from 'flowbite-svelte';
	import { getJointFrequencies } from '$lib/utils/functions';

	const canvasId = 'rosette-diagram';
	let data: ChartData<'polarArea', number[], unknown>;
	afterUpdate(() => {
		const rosePoles = getJointFrequencies($jointValues, $jointInterval).map(
			(freq) => new RosePole(freq.value, freq.name)
		);
		const poleData = rosePoles.map((pole) => pole.value);

		data = {
			datasets: [
				{
					data: [...poleData, ...poleData], //The poleData is doubled to complete the rosette diagram
					backgroundColor: rosePoles.map((pole) => pole.color),
					label: 'Rosetted diagram'
				}
			],
			labels: [...rosePoles.map((pole) => pole.name)]
		};
	});

	function download() {
		const anchor = document.createElement('a');
		const canvas = document.getElementById(canvasId) as HTMLCanvasElement | null;
		if (canvas) {
			anchor.href = canvas.toDataURL('image/png', 1);
			anchor.download = 'Rosette Diagram.png';
			anchor.click();
		}
	}
</script>

<div class="flex w-full items-center gap-5 flex-col">
	<div class="flex items-center gap-2">
		<label for="joint-interval" class="font-bold text-lg"> Interval </label>
		<Input id="joint-interval" class=" w-12 px-3" type="number" bind:value={$jointInterval} />
	</div>
	{#if $jointValues.length > 0}
		<PolarArea id={canvasId} {data} />
		<Button on:click={download} type="button">Download Image</Button>
	{/if}
</div>
