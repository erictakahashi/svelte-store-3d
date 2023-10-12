<script lang="ts">
	import Model from '../../../components/Product/Model.svelte';
	import type { Product } from '../../../products';
	/** @type {import('./$types').PageData} */
	export let data: Product | undefined;
</script>

<svelte:head>
	<title>{data?.name}</title>
	<meta name="description" content={data?.name} />
</svelte:head>

<div class="grid grid-cols-2 gap-5">
	<Model id={data?.id} background={data?.background} variants={data?.variants} name={data?.name} />
	<div class="my-auto">
		<a class="text-sm" href="/products">← Back to products</a>
		<h1 class="text-9xl font-bold overflow-hidden">{data?.name}</h1>
		<h2 class="text-7xl font-bold mt-3">${data?.price}</h2>
	</div>
</div>
