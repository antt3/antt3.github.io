<script>
	import Twitter from './icons/twitter.svelte';
	import GitHub from './icons/github.svelte';
	import Facebook from './icons/facebook.svelte';
</script>

<footer class="footer footer-center bg-primary text-primary-content rounded p-10">
	<nav class="grid grid-flow-col gap-4">
		<a class="link link-hover" href="/projects">Projects</a>
		<a class="link link-hover" href="/about">About Me</a>
		<a class="link link-hover" href="/posts">Blog</a>
	</nav>
	<nav>
		<div class="grid grid-flow-col gap-4">
			<a href="https://twitter.com">
				<Twitter />
			</a>
			<a href="https://twitter.com">
				<GitHub />
			</a>
			<a href="https://facebook.com">
				<Facebook />
			</a>
		</div>
	</nav>
	<aside>
		<p>Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved by ME</p>
	</aside>
</footer>
