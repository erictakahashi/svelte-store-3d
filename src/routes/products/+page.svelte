<script lang="ts">
	import Model from '../../components/Model/Model.svelte';
</script>

<svelte:head>
	<title>Products</title>
	<meta name="description" content="Products" />
</svelte:head>

<div class="text-column">
	<h1>Products</h1>
</div>

<div class="products">
	<Model id="xIytq8jNEa6VkxQf" />
	<Model id="L4F6GdTEyPyesg16" />
	<Model id="nIlLpfHATL3WB5Aj" />
	<Model id="cOQAuqPMvJROrPDL" />
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
