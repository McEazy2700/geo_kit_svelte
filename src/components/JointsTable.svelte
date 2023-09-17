<script lang="ts">
	export let joints: number[];
</script>

<div>
	<div
		class={`
      grid w-full border border-secondary-800/30 rounded-md
      overflow-hidden h-full grid-cols-10 place-content-center
      place-items-center divide-x divide-y divide-secondary-900/20
		`}
	>
		{#each joints as joint}
			<div class="p-3">
				{joint}
			</div>
		{/each}
	</div>
</div>
