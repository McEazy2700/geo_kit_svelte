<script lang="ts">
	import '../app.postcss';
	import { NavBar, Footer } from '$lib/components/layouts';
</script>

<svelte:head>
	<title>GeoKit</title>
</svelte:head>
<main>
	<NavBar />
</main>

<slot />
<Footer />
