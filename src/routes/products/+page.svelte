<script lang="ts">
	import Model from '../../components/Model/Model.svelte';
	import { products } from '../../products';
</script>

<svelte:head>
	<title>Products</title>
	<meta name="description" content="Products" />
</svelte:head>

<div class="text-column">
	<h1>Products</h1>
</div>

<div class="products">
	{#each products as product}
		<a href={`/products/${product.id}`}>
			<Model id={product.id} background={product.background} />
		</a>
	{/each}
</div>

<style>
	.products {
		--gap: 2rem;
		box-sizing: border-box;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(calc(50% - var(--gap)), 1fr));
		gap: var(--gap);
	}
</style>
