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

<Model id={data?.id} background={data?.background} />
<h1>{data?.name}</h1>
