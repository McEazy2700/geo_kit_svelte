<script lang="ts">
	import { AppBar, AppShell } from '@skeletonlabs/skeleton';
	import '../app.postcss';
	import GraphqlWrapper from '../wrappers/GraphqlWrapper.svelte';
</script>

<GraphqlWrapper>
	<AppShell>
		<svelte:fragment slot="header">
			<AppBar gridColumns="grid-cols-2">
				<h1 class="h2">GeoKit</h1>
				<svelte:fragment slot="trail">
					<ul class="flex items-center gap-2">
						<li>
							<a
								class="btn variant-ghost hover:text-secondary-900 hover:border-secondary-800"
								href="/">Coordinates</a
							>
						</li>
						<li>
							<a
								class="btn variant-ghost hover:text-secondary-900 hover:border-secondary-800"
								href="/rosette">Rosette</a
							>
						</li>
					</ul>
				</svelte:fragment>
			</AppBar>
		</svelte:fragment>
		<slot />
	</AppShell>
</GraphqlWrapper>
