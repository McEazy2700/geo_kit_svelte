<script lang="ts">
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import Icon from '@iconify/svelte';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<Icon class="text-3xl mr-2" icon="fluent:globe-desktop-20-regular" />
		<span class="text-xl font-semibold">GeoKit</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/map">Map</NavLi>
		<NavLi href="/rosette">Rosette</NavLi>
	</NavUl>
</Navbar>
