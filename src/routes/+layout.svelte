<script lang="ts">
	import '../app.postcss';
	import GraphqlWrapper from '../wrappers/GraphqlWrapper.svelte';
</script>

<GraphqlWrapper>
	<slot />
</GraphqlWrapper>
