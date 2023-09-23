<script lang="ts">
	import '../app.postcss';
	import { NavBar, Footer } from '$lib/components/layouts';
</script>

<svelte:head>
	<title>GeoKit</title>
</svelte:head>

<NavBar />
<main class="w-full max-h-screen overflow-auto">
	<slot />
</main>

<Footer />
