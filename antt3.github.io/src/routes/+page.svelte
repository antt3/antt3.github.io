<script>  
    import ProjectCard from '$lib/components/project-card.svelte'

    export let data
    let { projects, authors } = data
    $: ({ projects, authors } = data)
</script>

<h1>Projects</h1>

{#each authors as { name, intro, picture: { url } }}
    <div>
        <div>
            <h2>{name}</h2>
            <p>{intro}</p>
        </div>

        <img src={url} alt={name} />
    </div>   
{/each}

<div>
    {#each projects as { name, slug, description, image }}
        <ProjectCard {name} {description} url={image[0].url} {slug} />
    {/each}
</div>