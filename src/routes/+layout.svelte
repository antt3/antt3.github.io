<script>
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import { themeChange } from 'theme-change';
	import { onMount } from 'svelte';
	import '../app.pcss';

	onMount(async () => {
		themeChange(false);
	});
</script>

<Navbar />
<main class="container mx-auto mb-20 max-w-3xl px-4">
	<slot />
</main>
<Footer />
