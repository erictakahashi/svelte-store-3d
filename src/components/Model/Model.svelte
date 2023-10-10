<script lang="ts">
	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';

	/**
	 * UUID to the Spline export
	 * Unique ID for the canvas to avoid load collisions
	 */
	export let id = '';
	export let background = '#2D2E32';
	export let name = '';

	// Internal loading state
	let loading = true;

	onMount(async () => {
		const bottles = document.getElementById(id) as HTMLCanvasElement;
		const app = new Application(bottles);

		if (id) {
			await app.load(`https://prod.spline.design/${id}/scene.splinecode`);
			loading = false;
		}
	});
</script>

<div class="card rounded-xl overflow-hidden" style="--background:{background};">
	{#if loading}
		<div class="loader">Loading...</div>
	{/if}
	{#if name}
		<span class="text-white text-7xl font-bold m-8 absolute bottom-0">{name}</span>
	{/if}

	<canvas {id} />
</div>

<style>
	.card {
		position: relative;
		background: var(--background);
		aspect-ratio: 1/1;
	}

	.loader {
		position: absolute;
		width: 100%;
		height: 100%;
		display: grid;
		place-content: center;
	}
</style>
