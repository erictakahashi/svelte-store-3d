<script lang="ts">
	import { onMount } from 'svelte';
	import { Application } from '@splinetool/runtime';
	import type { Variants } from '../../products';
	import Colors from './Colors.svelte';

	/**
	 * UUID to the Spline export
	 * Unique ID for the canvas to avoid load collisions
	 */
	export let id = '';
	export let name = '';
	export let showName = false;
	export let variants: Variants[] = [];
	export let background = '#2D2E32';

	// The running Spline application
	let spline: Application | null = null;
	// Internal states
	let loading = true;
	let colors = variants?.filter((variant) => variant?.type === 'color');

	onMount(async () => {
		const canvas = document.getElementById(id) as HTMLCanvasElement;
		spline = new Application(canvas);

		if (!id) return;

		try {
			await spline.load(`https://prod.spline.design/${id}/scene.splinecode`);
		} catch (error) {
			throw error;
		} finally {
			loading = false;
		}
	});
</script>

<div
	class="bg-[--background] aspect-square relative rounded-xl overflow-hidden"
	style="--background:{background};"
>
	{#if loading}
		<div class="w-full h-full absolute grid place-content-center">Loading...</div>
	{/if}
	{#if name && showName}
		<span class="text-white text-7xl font-bold m-8 absolute bottom-0">{name}</span>
	{/if}
	{#if colors.length}
		<Colors {colors} {spline} {name} />
	{/if}

	<canvas {id} />
</div>
