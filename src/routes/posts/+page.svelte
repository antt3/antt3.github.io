<script>
	import Post from '$lib/components/cards/post.svelte';

	export let data;
	let { posts } = data;
	$: ({ posts } = data);
</script>

<svelte:head>
	<title>My Blog</title>
</svelte:head>

<h1 class="text-4xl mb-10 font-extrabold">Blog Posts</h1>

{#each posts as { title, slug, content, coverImage, tags }}
	<Post url={coverImage.url} {title} {content} {tags} {slug} />
{/each}
