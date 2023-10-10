<script lang="ts">
	import Model from '../../components/Model/Model.svelte';
	import { products } from '../../products';
</script>

<svelte:head>
	<title>Products</title>
	<meta name="description" content="Products" />
</svelte:head>

<div class="text-column">
	<h1 class="mt-2 mb-8 text-3xl font-bold tracking-tight text-gray-600 sm:text-4xl">Products</h1>
</div>

<div class="box-border grid grid-cols-1 gap-8 sm:grid-cols-2">
	{#each products as product}
		<a href={`/products/${product.id}`}>
			<Model id={product.id} background={product.background} name={product.name} />
		</a>
	{/each}
</div>
