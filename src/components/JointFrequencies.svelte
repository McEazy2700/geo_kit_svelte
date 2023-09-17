<script lang="ts">
	import { Table, tableMapperValues, type TableSource } from '@skeletonlabs/skeleton';
	import type { JointFrequency } from '$lib/stores/types';
	import jointFrequency from '$lib/stores/jointFrequency';

	function createTable(freqs: JointFrequency[]) {
		const simpleTable: TableSource = {
			head: ['Range', 'Frequency'],
			body: tableMapperValues(freqs, ['name', 'value'])
		};
		return simpleTable;
	}
</script>

<Table source={createTable($jointFrequency)} />
