<script lang="ts">
	import type { HTMLInputTypeAttribute } from 'svelte/elements';
	import { twMerge } from 'tailwind-merge';

	export let ref: HTMLInputElement | null = null;
	export let type: HTMLInputTypeAttribute | null | undefined;
	export let placeholder: string | null = null;
	let clazz: string;
	export { clazz as class };
</script>

<input class={twMerge('', clazz)} {type} bind:this={ref} {placeholder} />
