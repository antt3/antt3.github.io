<script>
	import { marked } from 'marked';

	export let url = '';
	export let title = '';
	export let content = '';
	export let tags = [];
	export let slug = '';
</script>

<div class="card text-center shadow-2xl mb-20">
	<figure class="">
		<img class="" src={url} alt={`Cover image for ${title}`} />
	</figure>
	<div class="card-body prose">
		<h2 class="title">{title}</h2>
		{@html marked(content).slice(0, 150)}
		<div class="flex justify-center mt-5 space-x-2">
			{#each tags as tag}
				<span class="badge badge-primary">{tag}</span>
			{/each}
		</div>
		<div class="justify-center card-actions">
			<a href={`/posts/${slug}`} class="btn btn-outline btn-primary"> Read &rAarr; </a>
		</div>
	</div>
</div>
