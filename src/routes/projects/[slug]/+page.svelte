<script>
	import { marked } from 'marked';

	export let data;
	let { project } = data;
	$: ({ project } = data);
</script>

<svelte:head>
	<title>My Portfolio | {project.name}</title>
</svelte:head>

<div class="xl:-mx-38 mb-5 sm:-mx-5 md:-mx-10 lg:-mx-20">
	<img class="rounded-lg" src={project.image[0].url} alt={project.title} />
</div>

<h1 class="mb-5 text-4xl font-semibold">{project.name}</h1>

<div class="mb-5 flex justify-between">
	<div>
		{#if project.tags}
			{#each project.tags as tag}
				<span class="badge badge-primary hover:bg-primary-focus mr-2 cursor-pointer">{tag}</span>
			{/each}
		{/if}
	</div>
</div>

<div class="prose prose-a:text-primary hover:prose-a:text-primary-focus mb-5 flex">
	<a class="mr-5" href={project.demo}>Demo</a>
	<a href={project.sourceCode}>Source Code</a>
</div>

<article class="prose prose-xl">
	{@html marked(project.description)}
</article>
