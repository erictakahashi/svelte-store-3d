<script lang="ts">
	import { onNavigate } from '$app/navigation';

	import Header from '../components/Header/Header.svelte';
	import '../app.css';
	import './styles.css';

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
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

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
