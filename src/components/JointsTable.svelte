<script lang="ts">
	import jointValues from '$lib/stores/jontValues';
</script>

<div class="flex items-center flex-col gap-4">
	<h3 class="h3 font-semibold">Joint Values</h3>
	<div
		class={`
      grid w-full border border-secondary-800/30 rounded-md
      overflow-hidden h-full grid-cols-10 place-content-center
      place-items-center divide-x divide-y divide-secondary-900/20
		`}
	>
		{#each $jointValues as joint}
			<div class="p-3">
				{joint < 10 ? `00${joint}` : joint < 100 ? `0${joint}` : joint}
			</div>
		{/each}
	</div>
</div>
