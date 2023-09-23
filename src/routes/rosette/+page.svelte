<script lang="ts">
	import { JointValuesInput } from '$lib/components/forms';
	import { RosetteDiagram, JointsTable, JointFrequencies } from '$lib/components/rosette';
</script>

<div class="w-full flex flex-col items-center">
	<div class="flex flex-col md:flex-row w-full self-center">
		<div class="flex-1 px-10 items-center md:max-h-[85vh] overflow-auto flex flex-col gap-10">
			<JointValuesInput />
			<JointsTable />
			<JointFrequencies />
		</div>
		<div class="flex flex-1 w-full md:max-h-[85vh] overflow-auto items-center flex-col">
			<div class="max-w-lg w-full">
				<RosetteDiagram />
			</div>
		</div>
	</div>
</div>
