<script lang="ts">
	import {
		AppBar,
		AppRail,
		AppRailAnchor,
		AppShell,
		Drawer,
		getDrawerStore,
		initializeStores
	} from '@skeletonlabs/skeleton';
	initializeStores();
	import Icon from '@iconify/svelte';
	import '../app.postcss';
	import GraphqlWrapper from '../wrappers/GraphqlWrapper.svelte';

	const drawerStore = getDrawerStore();
</script>

<Drawer width="w-[50vw]">
	<div class="flex flex-col p-3 gap-2">
		<a href="/" class="flex items-center m-5 justify-start gap-3">
			<Icon width={35} height={35} icon="fluent:globe-desktop-24-regular" />
			GeoKit
		</a>
		<a class="flex justify-start items-center btn variant-glass gap-2" href="/">
			<Icon width={35} height={35} icon="fluent:location-12-filled" />
			Location
		</a>
		<a class="flex justify-start items-center btn variant-glass gap-2" href="/rosette">
			<Icon width={35} height={35} icon="typcn:chart-pie-outline" />
			Rosette
		</a>
	</div>
</Drawer>
<GraphqlWrapper>
	<AppShell>
		<svelte:fragment slot="header">
			<AppBar>
				<svelte:fragment slot="lead">
					<a href="/">
						<Icon width={35} height={35} icon="fluent:globe-desktop-24-regular" />
					</a>
				</svelte:fragment>
				<a href="/" class="h2 flex items-center gap-3">GeoKit</a>
				<svelt:fragment slot="trail">
					<button
						class="btn text-2xl btn-icon md:hidden self-end place-self-end"
						on:click={() => {
							if ($drawerStore.open) {
								drawerStore.close();
							} else {
								drawerStore.open();
							}
						}}
					>
						<Icon icon="mingcute:menu-fill" />
					</button>
				</svelt:fragment>
			</AppBar>
		</svelte:fragment>
		<svelte:fragment slot="sidebarLeft">
			<div class="hidden md:block">
				<AppRail>
					<AppRailAnchor href="/">
						<div class="flex items-center flex-col gap-1">
							<Icon width={35} height={35} icon="fluent:location-12-filled" />
							Location
						</div>
					</AppRailAnchor>
					<AppRailAnchor href="/rosette">
						<div class="flex items-center flex-col gap-1">
							<Icon width={35} height={35} icon="typcn:chart-pie-outline" />
							Rosette
						</div>
					</AppRailAnchor>
				</AppRail>
			</div>
		</svelte:fragment>
		<slot />
	</AppShell>
</GraphqlWrapper>
