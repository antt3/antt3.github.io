<script>
	import { marked } from 'marked';

	export let data;
	let { authors } = data;
	$: ({ authors } = data);

	const {
		intro,
		bio,
		picture: { url }
	} = authors[0];
</script>

<svelte:head>
	<title>About Me</title>
</svelte:head>

<h1 class="mb-20 text-center text-5xl font-bold">About Me</h1>

<div class="mb-40 flex items-end">
	<div class="mr-6">
		<h2 class="mb-4 text-3xl font-bold tracking-wider">Anthony Taylor</h2>
		<p class="mb-4 text-xl">{intro}</p>
	</div>

	<img class="mask mask-squircle h-48" src={url} alt="Anthony Taylor" />
</div>

<article div class="prose prose-lg">
	{@html marked(bio)}
</article>
