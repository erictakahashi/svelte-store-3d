<script lang="ts">
	import type { Application } from '@splinetool/runtime';
	import type { ColorVariant } from '../../products';

	// Product name
	export let name = '';
	// All product colors - derived from variants
	export let colors: ColorVariant[] = [];
	/** The current Spline application rendering a scene */
	export let spline: Application | null = null;

	/**
	 * Sets a Spline scene variable associated with
	 * changing Materials, assets or states to change the `Model` color
	 */
	const setColorVariant = (value: number) => {
		if (!spline) return null;

		spline.setVariable('variant', value);
	};
</script>

{#if colors.length}
	<div class="absolute bottom-0 m-6 flex gap-3">
		{#each colors as color}
			<button
				on:click={() => setColorVariant(color.value)}
				aria-label={`See ${name} in ${color.name}`}
				class={`shadow-sm bg-${color.className} w-10 h-10 rounded-full border-2 border-transparent hover:border-white focus:border-white focus:outline-none`}
			>
				<span class="sr-only">See {name} in {color.name}</span>
			</button>
		{/each}
	</div>
{/if}
