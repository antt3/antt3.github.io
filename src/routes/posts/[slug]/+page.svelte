<script>
	import { marked } from 'marked';

	export let data;
	let { post } = data;
	$: ({ post } = data);

	const { title, date, tags, content, coverImage } = post;
</script>

<svelte:head>
	<title>My Blog | {title}</title>
</svelte:head>

<div class="xl:-mx-38 mb-5 sm:-mx-5 md:-mx-10 lg:-mx-20">
	<img class="rounded-xl" src={coverImage.url} alt={`Cover image for ${title}`} />
</div>

<div class="prose prose-xl">
	<h1>{title}</h1>
</div>

<p class="text-secondary text-xs font-semibold tracking-widest">
	{new Date(date).toDateString()}
</p>

<div class="mb-5 flex justify-between">
	<div>
		{#if tags}
			<div class="mt-5 space-x-2">
				{#each tags as tag}
					<span class="badge badge-primary">{tag}</span>
				{/each}
			</div>
		{/if}
	</div>
</div>

<article div class="prose prose-lg">
	{@html marked(content)}
</article>
