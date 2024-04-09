<script>
	import Project from '$lib/components/cards/project.svelte';

	export let data;
	let { projects } = data;
	$: ({ projects } = data);
</script>

<svelte:head>
	<title>My Portfolio</title>
</svelte:head>

<h1 class="mb-20 text-center text-5xl font-bold">Recent Projects By Me</h1>

<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:-mx-52 lg:grid-cols-6">
	{#each projects as { name, slug, description, image }, index}
		<Project {name} {description} url={image[0].url} {index} {slug} />
	{/each}
</div>
