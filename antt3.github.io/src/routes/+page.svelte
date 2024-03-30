<script>  
    import ProjectCard from '$lib/components/project-card.svelte'
    export let data
    let { projects } = data
    $: ({ projects } = data)
</script>

<h1>Projects</h1>
<div>
    {#each projects as { name, slug, description, image }}
        <ProjectCard {name} {description} url={image[0].url} {slug} />
    {/each}
</div>