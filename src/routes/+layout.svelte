<script>
	import Header from '../components/Header/Header.svelte';
	import '../app.css';
	import './styles.css';
</script>

<div class="flex flex-col min-h-screen">
	<Header />

	<main class="box-border flex flex-col flex-1 my-0 mx-auto p-4 w-full max-w-5xl">
		<slot />
	</main>

	<footer class="flex flex-col items-center justify-center p-4">
		<p>
			GitHub <a class="font-bold" href="https://github.com/erictakahashi/svelte-store-3d"
				>repository</a
			>.
		</p>
	</footer>
</div>
