<script lang="ts">
	import Model from '../../../components/Model/Model.svelte';
	import type { Product } from '../../../products';
	/** @type {import('./$types').PageData} */
	export let data: Product | undefined;
</script>

<svelte:head>
	<title>{data?.name}</title>
	<meta name="description" content={data?.name} />
</svelte:head>

<div class="grid grid-cols-2 gap-5">
	<Model id={data?.id} background={data?.background} />
	<div class="my-auto">
		<a class="text-sm block" href="/products">← Back to products</a>
		<h1 class="text-9xl font-bold">{data?.name}</h1>
		<h2 class="text-7xl font-bold">${data?.price}</h2>
	</div>
</div>
