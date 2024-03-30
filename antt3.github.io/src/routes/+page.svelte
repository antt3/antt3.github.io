<script>  
    import ProjectCard from '$lib/components/project-card.svelte'
    import AuthorCard from '../lib/components/author-card.svelte';

    export let data
    let { projects, authors } = data
    $: ({ projects, authors } = data)
</script>

<h1 class="font-bold text-center mb-20 text-5xl">
    Welcome To My Portfolio!
</h1>

{#each authors as { name, intro, picture: { url } }}
    <AuthorCard {name} {intro} {url} />
{/each}

<div
    class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52"
>
    {#each projects as { name, slug, description, image }}
        <ProjectCard {name} {description} url={image[0].url} {slug} />
    {/each}
</div>