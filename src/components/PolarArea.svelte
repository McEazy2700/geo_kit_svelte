<script lang="ts">
	import type { ChartData } from 'chart.js';
	import { Chart } from 'chart.js/dist';
	import { afterUpdate } from 'svelte';

	export let id: string;
	export let data: ChartData<'polarArea', number[], unknown>;

	function createChart() {
		const ctx = document.getElementById(id);
		new Chart(ctx, {
			type: 'polarArea',
			data
		});
	}
	afterUpdate(createChart);
</script>

<div>
	<canvas {id} />
</div>
