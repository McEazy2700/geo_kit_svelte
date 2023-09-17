<script lang="ts">
	import { PolarArea } from 'svelte-chartjs';
	import { Chart, Title, Tooltip, Legend, ArcElement, RadialLinearScale } from 'chart.js';
	Chart.register(Title, Tooltip, Legend, ArcElement, RadialLinearScale);
	import type { ChartData } from 'chart.js';
	import { RosePole } from '$lib/utils/classes';
	import jointFrequency from '$lib/stores/jointFrequency';
	import jointInterval from '$lib/stores/jointInterval';
	import { afterUpdate } from 'svelte';

	const canvasId = 'rosette-diagram';
	// console.log($jointFrequency);

	let data: ChartData<'polarArea', number[], unknown>;
	afterUpdate(() => {
		const rosePoles = $jointFrequency.map((freq) => new RosePole(freq.value, freq.name));
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
			anchor.download = 'rosette_diagra.png';
			anchor.click();
		}
	}
</script>

<div class="flex items-center gap-5 flex-col">
	<label class="font-bold text-lg">
		Interval
		<input class="input w-12 px-3" type="number" bind:value={$jointInterval} />
	</label>
	<PolarArea id={canvasId} {data} />
	<button on:click={download} class="btn variant-filled-success" type="button">Download</button>
</div>
