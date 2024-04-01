<script>
	import Project from '$lib/components/cards/project.svelte';
	import Author from '$lib/components/cards/author.svelte';

	export let data;
	let { projects, authors } = data;
	$: ({ projects, authors } = data);
</script>

<svelte:head>
	<title>My Home Page</title>
</svelte:head>

<h1 class="mb-20 text-center text-5xl font-bold">Welcome To My Portfolio!</h1>

{#each authors as { name, intro, picture: { url } }}
	<Author {name} {intro} {url} />
{/each}

<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:-mx-52 lg:grid-cols-6">
	{#each projects as { name, slug, description, image }}
		<Project {name} {description} url={image[0].url} {slug} />
	{/each}
</div>
