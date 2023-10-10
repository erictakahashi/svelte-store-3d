<script lang="ts">
	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';

	// Unique ID for the canvas to avoid load collisions
	export let id = 'object';

	onMount(() => {
		const bottles = document.getElementById(id) as HTMLCanvasElement;
		const app = new Application(bottles);
		app.load('https://prod.spline.design/xIytq8jNEa6VkxQf/scene.splinecode');
	});
</script>

<div class="card">
	<canvas {id} />
</div>

<style>
	.card {
		border-radius: var(--radius);
		background: var(--color-card);
		aspect-ratio: 1/1;
	}
</style>
